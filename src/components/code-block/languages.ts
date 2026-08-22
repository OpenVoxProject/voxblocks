/**
 * A small, dependency-free syntax tokenizer. It trades completeness for
 * being self-contained (no Prism/highlight.js/Shiki) and covers the
 * languages that actually show up in OpenVox docs: shell, Puppet
 * manifests, Hiera/YAML data, JSON, Ruby, plus the web basics.
 *
 * Each language is an ordered list of rules; the first rule whose regex
 * matches at the current position wins, so more specific rules (e.g. "a
 * quoted key before a colon") must be listed before the general-purpose
 * ones they'd otherwise be shadowed by.
 */

export type TokenType =
  | 'plain'
  | 'comment'
  | 'keyword'
  | 'string'
  | 'number'
  | 'function'
  | 'property'
  | 'tag';

export interface Token {
  type: TokenType;
  text: string;
}

type TypeResolver = (matchText: string, code: string, matchEnd: number) => TokenType;

interface Rule {
  re: RegExp;
  type: TokenType | TypeResolver;
}

function skipInlineSpace(code: string, from: number): number {
  let j = from;
  while (j < code.length && (code[j] === ' ' || code[j] === '\t')) j++;
  return j;
}

/** Matches an identifier; resolves to `keyword` if it's in `keywords`, `function` if followed by `(`, else `plain`. */
function identifierRule(re: RegExp, keywords: Set<string>): Rule {
  return {
    re,
    type: (text, code, end) => {
      if (keywords.has(text)) return 'keyword';
      return code[skipInlineSpace(code, end)] === '(' ? 'function' : 'plain';
    },
  };
}

/** Matches a quoted string; resolves to `property` if it's a key (followed by `:`), else `string`. */
function quotedPropertyRule(re: RegExp): Rule {
  return {
    re,
    type: (_text, code, end) => (code[skipInlineSpace(code, end)] === ':' ? 'property' : 'string'),
  };
}

const NUMBER = /-?\b\d+\.?\d*(?:[eE][+-]?\d+)?\b/y;
const DQ_STRING = /"(?:\\.|[^"\\])*"/y;
const SQ_STRING = /'(?:\\.|[^'\\])*'/y;
const HASH_COMMENT = /#.*/y;
const SLASH_COMMENT = /\/\/.*/y;
const BLOCK_COMMENT = /\/\*[\s\S]*?\*\//y;

function pushToken(tokens: Token[], type: TokenType, text: string): void {
  const last = tokens[tokens.length - 1];
  if (last && last.type === type) {
    last.text += text;
  } else {
    tokens.push({ type, text });
  }
}

/** Runs `rules` over `code`, falling back to a single plain-text token for anything unmatched. */
export function tokenize(code: string, rules: Rule[]): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  while (i < code.length) {
    let matched = false;
    for (const rule of rules) {
      rule.re.lastIndex = i;
      const m = rule.re.exec(code);
      if (m && m.index === i && m[0].length > 0) {
        const text = m[0];
        const type = typeof rule.type === 'function' ? rule.type(text, code, i + text.length) : rule.type;
        pushToken(tokens, type, text);
        i += text.length;
        matched = true;
        break;
      }
    }
    if (!matched) {
      pushToken(tokens, 'plain', code[i]);
      i++;
    }
  }
  return tokens;
}

const BASH_KEYWORDS = new Set([
  'if', 'then', 'elif', 'else', 'fi', 'for', 'while', 'until', 'do', 'done',
  'case', 'esac', 'in', 'function', 'select', 'time', 'return', 'exit',
  'break', 'continue', 'local', 'export', 'readonly', 'declare', 'unset',
  'shift', 'eval', 'exec', 'trap', 'set', 'source', 'alias', 'unalias', 'true', 'false',
]);

const bash: Rule[] = [
  { re: HASH_COMMENT, type: 'comment' },
  { re: /\$\{[^}]*\}|\$[A-Za-z_]\w*|\$[0-9@#?$!*_-]/y, type: 'function' },
  { re: DQ_STRING, type: 'string' },
  { re: SQ_STRING, type: 'string' },
  { re: NUMBER, type: 'number' },
  identifierRule(/[A-Za-z_][\w-]*/y, BASH_KEYWORDS),
];

const YAML_KEYWORDS = new Set([
  'true', 'false', 'yes', 'no', 'null', 'on', 'off',
  'True', 'False', 'Yes', 'No', 'Null', 'On', 'Off',
  'TRUE', 'FALSE', 'YES', 'NO', 'NULL', 'ON', 'OFF',
]);

const yaml: Rule[] = [
  { re: HASH_COMMENT, type: 'comment' },
  quotedPropertyRule(DQ_STRING),
  quotedPropertyRule(SQ_STRING),
  { re: /[A-Za-z_][\w .-]*?(?=:(\s|$))/y, type: 'property' },
  { re: /[&*!][A-Za-z_][\w:.]*/y, type: 'function' },
  { re: NUMBER, type: 'number' },
  identifierRule(/[A-Za-z_][\w-]*/y, YAML_KEYWORDS),
];

const json: Rule[] = [
  quotedPropertyRule(DQ_STRING),
  { re: NUMBER, type: 'number' },
  identifierRule(/[A-Za-z_]\w*/y, new Set(['true', 'false', 'null'])),
];

const JS_KEYWORDS = new Set([
  'const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while',
  'do', 'switch', 'case', 'default', 'break', 'continue', 'class', 'extends',
  'super', 'new', 'this', 'import', 'export', 'from', 'as', 'async', 'await',
  'try', 'catch', 'finally', 'throw', 'typeof', 'instanceof', 'in', 'of',
  'yield', 'static', 'get', 'set', 'void', 'delete', 'null', 'undefined',
  'true', 'false', 'public', 'private', 'protected', 'readonly', 'interface',
  'type', 'enum', 'implements', 'namespace', 'declare', 'abstract', 'keyof',
  'satisfies',
]);

const javascript: Rule[] = [
  { re: SLASH_COMMENT, type: 'comment' },
  { re: BLOCK_COMMENT, type: 'comment' },
  { re: DQ_STRING, type: 'string' },
  { re: SQ_STRING, type: 'string' },
  { re: /`(?:\\.|[^`\\])*`/y, type: 'string' },
  { re: /-?\b0[xXbBoO][0-9a-fA-F]+\b|-?\b\d+\.?\d*(?:[eE][+-]?\d+)?\b/y, type: 'number' },
  identifierRule(/[A-Za-z_$][\w$]*/y, JS_KEYWORDS),
];

const css: Rule[] = [
  { re: BLOCK_COMMENT, type: 'comment' },
  { re: DQ_STRING, type: 'string' },
  { re: SQ_STRING, type: 'string' },
  { re: /@[\w-]+/y, type: 'keyword' },
  { re: /!important/y, type: 'keyword' },
  { re: /#[0-9a-fA-F]{3,8}\b/y, type: 'number' },
  { re: /-?\b\d+\.?\d*[a-zA-Z%]*\b/y, type: 'number' },
  { re: /[a-zA-Z-]+(?=\s*:)/y, type: 'property' },
  identifierRule(/[a-zA-Z-]+/y, new Set()),
];

const htmlLang: Rule[] = [
  { re: /<!--[\s\S]*?-->/y, type: 'comment' },
  { re: /<\/?[a-zA-Z][\w:-]*/y, type: 'tag' },
  { re: /[a-zA-Z-][\w-]*(?=\s*=)/y, type: 'property' },
  { re: DQ_STRING, type: 'string' },
  { re: SQ_STRING, type: 'string' },
  { re: /&[\w#]+;/y, type: 'keyword' },
];

const RUBY_KEYWORDS = new Set([
  'def', 'end', 'if', 'elsif', 'else', 'unless', 'while', 'until', 'for',
  'in', 'do', 'class', 'module', 'begin', 'rescue', 'ensure', 'raise',
  'return', 'yield', 'break', 'next', 'redo', 'retry', 'case', 'when',
  'then', 'and', 'or', 'not', 'nil', 'true', 'false', 'self', 'super',
  'require', 'require_relative', 'include', 'extend', 'attr_accessor',
  'attr_reader', 'attr_writer', 'private', 'protected', 'public', 'lambda',
  'proc', 'new',
]);

const ruby: Rule[] = [
  { re: HASH_COMMENT, type: 'comment' },
  { re: /:[A-Za-z_]\w*[?!]?/y, type: 'string' },
  { re: /@{1,2}[A-Za-z_]\w*|\$[A-Za-z_]\w*/y, type: 'function' },
  { re: DQ_STRING, type: 'string' },
  { re: SQ_STRING, type: 'string' },
  { re: NUMBER, type: 'number' },
  { re: /[A-Z]\w*/y, type: 'property' },
  identifierRule(/[a-z_]\w*[?!]?/y, RUBY_KEYWORDS),
];

const PUPPET_KEYWORDS = new Set([
  'class', 'define', 'node', 'inherits', 'if', 'elsif', 'else', 'unless',
  'case', 'and', 'or', 'in', 'undef', 'true', 'false', 'default', 'import',
  'include', 'require', 'contain', 'function', 'type', 'application',
  'produces', 'consumes', 'private', 'return', 'break', 'next', 'each',
  'map', 'filter', 'reduce', 'with',
  'String', 'Integer', 'Boolean', 'Array', 'Hash', 'Optional', 'Enum',
  'Variant', 'Numeric', 'Float', 'Undef', 'Any', 'Pattern', 'Regexp',
  'Sensitive', 'Struct', 'Tuple', 'Type', 'Callable', 'Data', 'Scalar',
]);

const puppet: Rule[] = [
  { re: HASH_COMMENT, type: 'comment' },
  { re: DQ_STRING, type: 'string' },
  { re: SQ_STRING, type: 'string' },
  { re: /\$[\w:]+/y, type: 'function' },
  { re: /[a-zA-Z_][\w:]*(?=\s*\{)/y, type: 'tag' },
  { re: /[a-z_]\w*(?=\s*=>)/y, type: 'property' },
  { re: NUMBER, type: 'number' },
  identifierRule(/[A-Za-z_][\w:]*/y, PUPPET_KEYWORDS),
];

const GRAMMARS: Record<string, Rule[]> = {
  bash, sh: bash, shell: bash, zsh: bash,
  yaml, yml: yaml,
  json,
  javascript, js: javascript,
  typescript: javascript, ts: javascript,
  css,
  html: htmlLang, xml: htmlLang,
  ruby, rb: ruby,
  puppet, pp: puppet,
};

export const LANGUAGE_LABELS: Record<string, string> = {
  bash: 'Bash', sh: 'Shell', shell: 'Shell', zsh: 'Zsh',
  yaml: 'YAML', yml: 'YAML',
  json: 'JSON',
  javascript: 'JavaScript', js: 'JavaScript',
  typescript: 'TypeScript', ts: 'TypeScript',
  css: 'CSS',
  html: 'HTML', xml: 'XML',
  ruby: 'Ruby', rb: 'Ruby',
  puppet: 'Puppet', pp: 'Puppet',
  plaintext: 'Plain Text', text: 'Plain Text',
};

export type CodeBlockLanguage =
  | 'plaintext' | 'bash' | 'sh' | 'shell' | 'zsh' | 'yaml' | 'yml' | 'json'
  | 'javascript' | 'js' | 'typescript' | 'ts' | 'css' | 'html' | 'xml'
  | 'ruby' | 'rb' | 'puppet' | 'pp';

/** Tokenizes `code` for `language`; unrecognized languages render as plain, unhighlighted text. */
export function highlight(code: string, language: string): Token[] {
  const rules = GRAMMARS[language];
  return rules ? tokenize(code, rules) : [{ type: 'plain', text: code }];
}
