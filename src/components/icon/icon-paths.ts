import { svg, type SVGTemplateResult } from 'lit';

/**
 * The VoxBlocks icon set. Every icon shares one drawing rule: 48x48
 * viewBox, 2px stroke, round caps/joins, `currentColor` — see
 * docs/guide/colors.md and the card/empty-state doc icons this set
 * grew out of. Add new icons here and to `IconName` below; nowhere
 * else needs to change.
 *
 * Grouped by the phases from the icon roadmap:
 * - Phase 1: shared UI baseline — search through refresh, plus eye-slash.
 * - Phase 2: OpenVox marketing site — community through heart.
 * - Phase 3: module registry (Forge replacement) — module through collection.
 * - Phase 4: fleet console (Puppet Enterprise replacement) — dashboard
 *   through drift.
 *
 * A few concepts repeat across phases (e.g. a release tag and a topic
 * tag) and deliberately share one icon rather than drawing
 * near-duplicates — `star` also covers "rating", `copy` also covers
 * "copy install command", `terminal` also covers "live management
 * session", and `key` covers both PKI and API keys.
 *
 * `blocks`, `plug`, `ballot`, `sun`, and `accessibility` were added
 * later, consolidating hand-drawn SVGs that had been copy-pasted
 * inline across docs/index.md, card.md, and marketing.md before this
 * component existed — see each one's call site for what it replaced.
 * `settings` was added when components (not just docs) started using
 * icons — e.g. a sidenav "Settings" item needed one that didn't exist yet.
 */
export type IconName =
  // Phase 1: shared UI baseline
  | 'search'
  | 'close'
  | 'menu'
  | 'chevron-up'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'external-link'
  | 'copy'
  | 'check'
  | 'warning'
  | 'info'
  | 'add'
  | 'remove'
  | 'edit'
  | 'delete'
  | 'filter'
  | 'sort'
  | 'calendar'
  | 'clock'
  | 'person'
  | 'people'
  | 'lock'
  | 'eye'
  | 'eye-slash'
  | 'refresh'
  // Phase 2: OpenVox marketing site
  | 'community'
  | 'book'
  | 'terminal'
  | 'shield'
  | 'roadmap'
  | 'help'
  | 'repository'
  | 'star'
  | 'chat'
  | 'heart'
  // Phase 3: module registry (Forge replacement)
  | 'module'
  | 'tag'
  | 'dependency'
  | 'verified'
  | 'archived'
  | 'publish'
  | 'changelog'
  | 'vulnerability'
  | 'gauge'
  | 'file-tree'
  | 'check-circle'
  | 'x-circle'
  | 'fork'
  | 'trending'
  | 'collection'
  // Phase 4: fleet console (Puppet Enterprise replacement)
  | 'dashboard'
  | 'node'
  | 'node-group'
  | 'pulse'
  | 'compliance'
  | 'report'
  | 'activity-log'
  | 'bell'
  | 'orchestrate'
  | 'plan'
  | 'badge'
  | 'audit'
  | 'key'
  | 'layers'
  | 'classifier'
  | 'deploy'
  | 'metrics'
  | 'schedule'
  | 'backup'
  | 'webhook'
  | 'organization'
  | 'drift'
  // Added later: consolidated from docs pages that predated vox-icon
  | 'blocks'
  | 'plug'
  | 'ballot'
  | 'sun'
  | 'moon'
  | 'accessibility'
  | 'settings'
  | 'github';

export const ICON_PATHS: Record<IconName, SVGTemplateResult> = {
  // Phase 1: shared UI baseline -----------------------------------------

  search: svg`<circle cx="21" cy="21" r="13"/><path d="M30.5 30.5 L41 41"/>`,

  close: svg`<path d="M14 14 L34 34 M34 14 L14 34"/>`,

  menu: svg`<path d="M8 14 H40 M8 24 H40 M8 34 H40"/>`,

  'chevron-up': svg`<path d="M14 28 L24 18 L34 28"/>`,
  'chevron-down': svg`<path d="M14 20 L24 30 L34 20"/>`,
  'chevron-left': svg`<path d="M28 14 L18 24 L28 34"/>`,
  'chevron-right': svg`<path d="M20 14 L30 24 L20 34"/>`,

  'external-link': svg`<path d="M36 26 V38 A4 4 0 0 1 32 42 H10 A4 4 0 0 1 6 38 V16 A4 4 0 0 1 10 12 H22"/><path d="M30 6 H42 V18"/><path d="M20 28 L42 6"/>`,

  copy: svg`<rect x="8" y="14" width="24" height="24" rx="3"/><path d="M16 14 V10 A2 2 0 0 1 18 8 H38 A2 2 0 0 1 40 10 V30 A2 2 0 0 1 38 32 H34"/>`,

  check: svg`<path d="M10 25 L20 35 L38 13"/>`,

  warning: svg`<path d="M24 8 L44 40 H4 Z"/><path d="M24 20 V28"/><circle cx="24" cy="34" r="1.6" fill="currentColor" stroke="none"/>`,

  info: svg`<circle cx="24" cy="24" r="17"/><path d="M24 22 V33"/><circle cx="24" cy="15.5" r="1.8" fill="currentColor" stroke="none"/>`,

  add: svg`<path d="M24 10 V38 M10 24 H38"/>`,

  remove: svg`<path d="M10 24 H38"/>`,

  edit: svg`<path d="M30 8 L40 18 L18 40 L7 41 L8 30 Z"/><path d="M26 12 L36 22"/>`,

  delete: svg`<path d="M10 14 H38"/><path d="M17 14 V9 A2 2 0 0 1 19 7 H29 A2 2 0 0 1 31 9 V14"/><path d="M13 14 L15 40 A2 2 0 0 0 17 42 H31 A2 2 0 0 0 33 40 L35 14"/><path d="M20 21 V35 M28 21 V35"/>`,

  filter: svg`<path d="M6 10 H42 L28 26 V38 L20 42 V26 Z"/>`,

  sort: svg`<path d="M14 30 V10 M14 10 L8 16 M14 10 L20 16"/><path d="M34 18 V38 M34 38 L28 32 M34 38 L40 32"/>`,

  calendar: svg`<rect x="6" y="10" width="36" height="32" rx="3"/><path d="M6 20 H42"/><path d="M15 6 V14 M33 6 V14"/><circle cx="15" cy="28" r="1.6" fill="currentColor" stroke="none"/><circle cx="24" cy="28" r="1.6" fill="currentColor" stroke="none"/><circle cx="33" cy="28" r="1.6" fill="currentColor" stroke="none"/>`,

  clock: svg`<circle cx="24" cy="24" r="17"/><path d="M24 14 V24 L32 29"/>`,

  person: svg`<circle cx="24" cy="16" r="8"/><path d="M8 42 C8 31 15 26 24 26 C33 26 40 31 40 42"/>`,

  people: svg`<circle cx="17" cy="16" r="7"/><circle cx="33" cy="18" r="6"/><path d="M4 41 C4 31 10 27 17 27 C21 27 24 28.3 26.3 30.5"/><path d="M24 41 C24 32 29 28 37 28 C43 28 44 32 44 41"/>`,

  lock: svg`<rect x="10" y="21" width="28" height="21" rx="3"/><path d="M16 21 V15 A8 8 0 0 1 32 15 V21"/><circle cx="24" cy="31" r="2.2" fill="currentColor" stroke="none"/>`,

  eye: svg`<path d="M4 24 C10 12 20 8 24 8 C28 8 38 12 44 24 C38 36 28 40 24 40 C20 40 10 36 4 24 Z"/><circle cx="24" cy="24" r="6"/>`,

  'eye-slash': svg`<path d="M4 24 C10 12 20 8 24 8 C28 8 38 12 44 24 C38 36 28 40 24 40 C20 40 10 36 4 24 Z"/><circle cx="24" cy="24" r="6"/><path d="M6 6 L42 42"/>`,

  refresh: svg`<path d="M46 8 L46 20 L34 20"/><path d="M2 40 L2 28 L14 28"/><path d="M7.02 18 A18 18 0 0 1 36.72 11.28 L46 20"/><path d="M2 28 L11.28 36.72 A18 18 0 0 0 40.98 30"/>`,

  // Phase 2: OpenVox marketing site --------------------------------------

  community: svg`<circle cx="24" cy="10" r="5"/><circle cx="10" cy="34" r="5"/><circle cx="38" cy="34" r="5"/><path d="M24 15 L14 30 M24 15 L34 30 M15 34 H33"/>`,

  book: svg`<path d="M24 12 C20 8 12 7 6 9 V37 C12 35 20 36 24 40 C28 36 36 35 42 37 V9 C36 7 28 8 24 12 Z"/><path d="M24 12 V40"/>`,

  terminal: svg`<rect x="6" y="9" width="36" height="30" rx="3"/><path d="M14 19 L21 24 L14 29"/><path d="M25 30 H33"/>`,

  shield: svg`<path d="M24 6 L40 12 V22 C40 33 33 40 24 43 C15 40 8 33 8 22 V12 Z"/><path d="M17 23 L22 28 L32 17"/>`,

  roadmap: svg`<path d="M6 38 C14 38 14 26 22 26 C30 26 30 14 38 14"/><circle cx="6" cy="38" r="3" fill="currentColor" stroke="none"/><circle cx="22" cy="26" r="3" fill="currentColor" stroke="none"/><circle cx="38" cy="14" r="3" fill="currentColor" stroke="none"/>`,

  help: svg`<circle cx="24" cy="24" r="17"/><path d="M18 18 C18 13 30 13 30 19 C30 24 24 23 24 29"/><circle cx="24" cy="35" r="1.8" fill="currentColor" stroke="none"/>`,

  repository: svg`<rect x="7" y="10" width="34" height="28" rx="3"/><path d="M18 20 L13 24 L18 28 M30 20 L35 24 L30 28"/>`,

  star: svg`<path d="M24 6 L29 19 L43 19 L32 28 L36 42 L24 34 L12 42 L16 28 L5 19 L19 19 Z"/>`,

  chat: svg`<path d="M8 10 H40 A2 2 0 0 1 42 12 V30 A2 2 0 0 1 40 32 H20 L12 40 V32 H8 A2 2 0 0 1 6 30 V12 A2 2 0 0 1 8 10 Z"/><path d="M14 18 H34 M14 24 H28"/>`,

  heart: svg`<path d="M24 41 C10 32 4 23 4 15.5 C4 9 9 5 15 5 C19.5 5 22.5 7.5 24 11 C25.5 7.5 28.5 5 33 5 C39 5 44 9 44 15.5 C44 23 38 32 24 41 Z"/>`,

  // Phase 3: module registry (Forge replacement) -------------------------

  module: svg`<rect x="8" y="16" width="32" height="24" rx="3"/><path d="M8 24 H40"/><path d="M20 16 L24 24 L28 16"/>`,

  tag: svg`<path d="M6 10 H26 L42 26 L26 42 H6 Z"/><circle cx="15" cy="19" r="3" fill="currentColor" stroke="none"/>`,

  dependency: svg`<rect x="6" y="19" width="20" height="10" rx="5"/><rect x="22" y="19" width="20" height="10" rx="5"/>`,

  verified: svg`<path d="M24 5 L31 10 L39 9 L40 17 L46 24 L40 31 L39 39 L31 38 L24 43 L17 38 L9 39 L8 31 L2 24 L8 17 L9 9 L17 10 Z"/><path d="M16 24 L21 29 L32 18"/>`,

  archived: svg`<rect x="6" y="6" width="36" height="10" rx="2"/><rect x="10" y="16" width="28" height="26" rx="2"/><path d="M20 26 H28"/>`,

  publish: svg`<path d="M24 6 V28 M24 6 L16 14 M24 6 L32 14"/><path d="M8 32 V38 A2 2 0 0 0 10 40 H38 A2 2 0 0 0 40 38 V32"/>`,

  changelog: svg`<path d="M10 6 H28 L36 14 V42 H10 Z"/><path d="M28 6 V14 H36"/><path d="M16 24 H24"/><circle cx="34" cy="34" r="7"/><path d="M34 30 V34 L37 36"/>`,

  vulnerability: svg`<path d="M24 6 L40 12 V22 C40 33 33 40 24 43 C15 40 8 33 8 22 V12 Z"/><path d="M24 16 V26"/><circle cx="24" cy="32" r="1.8" fill="currentColor" stroke="none"/>`,

  gauge: svg`<path d="M6 34 A18 18 0 0 1 42 34"/><path d="M24 34 L34 20"/><circle cx="24" cy="34" r="2.2" fill="currentColor" stroke="none"/>`,

  'file-tree': svg`<path d="M6 12 H18 L22 17 H42 V38 H6 Z"/><path d="M26 24 H36 M26 30 H36"/>`,

  'check-circle': svg`<circle cx="24" cy="24" r="17"/><path d="M15 24 L21 30 L33 17"/>`,

  'x-circle': svg`<circle cx="24" cy="24" r="17"/><path d="M18 18 L30 30 M30 18 L18 30"/>`,

  fork: svg`<circle cx="14" cy="10" r="4"/><circle cx="34" cy="10" r="4"/><circle cx="24" cy="38" r="4"/><path d="M14 14 V22 L24 32 M34 14 V22 L24 32 M24 32 V34"/>`,

  trending: svg`<path d="M6 34 L18 22 L26 28 L42 10"/><path d="M32 10 H42 V20"/>`,

  collection: svg`<rect x="10" y="6" width="28" height="10" rx="2"/><rect x="6" y="19" width="36" height="10" rx="2"/><rect x="10" y="32" width="28" height="10" rx="2"/>`,

  // Phase 4: fleet console (Puppet Enterprise replacement) ---------------

  dashboard: svg`<rect x="6" y="6" width="18" height="14" rx="2"/><rect x="28" y="6" width="14" height="8" rx="2"/><rect x="28" y="18" width="14" height="14" rx="2"/><rect x="6" y="24" width="18" height="18" rx="2"/>`,

  node: svg`<rect x="10" y="14" width="28" height="20" rx="3"/><path d="M16 22 H22 M16 27 H22"/><circle cx="32" cy="24" r="2" fill="currentColor" stroke="none"/>`,

  'node-group': svg`<rect x="6" y="10" width="24" height="9" rx="2"/><rect x="12" y="21" width="24" height="9" rx="2"/><rect x="18" y="32" width="24" height="9" rx="2"/>`,

  pulse: svg`<path d="M4 24 H14 L19 12 L27 36 L32 24 H44"/>`,

  compliance: svg`<rect x="9" y="6" width="30" height="36" rx="3"/><path d="M16 16 L19 19 L26 12 M16 26 L19 29 L26 22 M16 36 H30"/>`,

  report: svg`<path d="M10 6 H28 L36 14 V42 H10 Z"/><path d="M28 6 V14 H36"/><path d="M16 34 V28 M22 34 V24 M28 34 V30"/>`,

  'activity-log': svg`<path d="M14 8 V40"/><circle cx="14" cy="12" r="3" fill="currentColor" stroke="none"/><circle cx="14" cy="24" r="3" fill="currentColor" stroke="none"/><circle cx="14" cy="36" r="3" fill="currentColor" stroke="none"/><path d="M22 12 H40 M22 24 H40 M22 36 H34"/>`,

  bell: svg`<path d="M12 32 V22 A12 12 0 0 1 36 22 V32 L40 38 H8 Z"/><path d="M20 38 A4 4 0 0 0 28 38"/>`,

  orchestrate: svg`<circle cx="24" cy="24" r="17"/><path d="M19 15 L33 24 L19 33 Z"/>`,

  plan: svg`<rect x="6" y="8" width="24" height="32" rx="3"/><path d="M12 16 H24 M12 22 H24 M12 28 H20"/><path d="M32 24 H44 M38 18 L44 24 L38 30"/>`,

  badge: svg`<rect x="6" y="10" width="36" height="28" rx="3"/><circle cx="17" cy="21" r="5"/><path d="M10 32 C10 26 13 24 17 24 C21 24 24 26 24 32"/><path d="M30 18 H38 M30 24 H38 M30 30 H36"/>`,

  audit: svg`<path d="M10 6 H26 L34 14 V42 H10 Z"/><path d="M26 6 V14 H34"/><path d="M16 24 H24 M16 30 H22"/><circle cx="33" cy="33" r="6"/><path d="M37.5 37.5 L43 43"/>`,

  key: svg`<circle cx="16" cy="24" r="9"/><path d="M23 24 H42 M34 24 V31 M40 24 V29"/>`,

  layers: svg`<path d="M24 6 L44 16 L24 26 L4 16 Z"/><path d="M4 26 L24 36 L44 26"/><path d="M4 34 L24 44 L44 34"/>`,

  classifier: svg`<path d="M6 10 H24 L40 26 L24 42 H6 Z"/><circle cx="14" cy="18" r="3" fill="currentColor" stroke="none"/><circle cx="32" cy="26" r="3" fill="currentColor" stroke="none"/>`,

  deploy: svg`<path d="M24 8 V34"/><path d="M24 8 L15 20 M24 8 L33 20"/><path d="M10 40 H38"/>`,

  metrics: svg`<path d="M6 40 H42"/><path d="M6 40 V6"/><path d="M10 30 L18 22 L26 27 L38 12"/>`,

  schedule: svg`<rect x="6" y="10" width="28" height="30" rx="3"/><path d="M6 18 H34"/><path d="M14 6 V14 M26 6 V14"/><circle cx="34" cy="34" r="10"/><path d="M34 28 V34 L38 37"/>`,

  backup: svg`<path d="M24 6 V26 M24 26 L16 18 M24 26 L32 18"/><rect x="8" y="30" width="32" height="12" rx="2"/><path d="M8 36 H40"/>`,

  webhook: svg`<circle cx="12" cy="14" r="6"/><circle cx="36" cy="34" r="6"/><path d="M17 17 L31 31"/><path d="M22 22 L20 28 L26 26 L24 32"/>`,

  organization: svg`<rect x="10" y="10" width="28" height="32" rx="2"/><path d="M17 18 H21 M27 18 H31 M17 26 H21 M27 26 H31 M17 34 H21 M27 34 H31"/>`,

  drift: svg`<rect x="6" y="12" width="20" height="20" rx="3"/><rect x="22" y="16" width="20" height="20" rx="3"/><path d="M20 24 H28"/>`,

  // Added later: consolidated from docs pages that predated vox-icon ------

  blocks: svg`<rect x="7" y="7" width="15" height="15" rx="2.5"/><rect x="26" y="7" width="15" height="15" rx="2.5"/><rect x="7" y="26" width="15" height="15" rx="2.5"/><rect x="26" y="26" width="15" height="15" rx="2.5"/>`,

  plug: svg`<path d="M16 6 V18 M32 6 V18 M12 18 H36 V28 C36 34 30 38 24 38 C18 38 12 34 12 28 Z"/><path d="M24 38 V44"/>`,

  ballot: svg`<rect x="8" y="18" width="32" height="24" rx="2.5"/><path d="M8 26 H40"/><path d="M24 10 V26"/><path d="M18 6 L24 12 L30 6"/>`,

  sun: svg`<circle cx="24" cy="24" r="8"/><path d="M24 4v4M24 40v4M9.86 9.86l2.82 2.82M35.32 35.32l2.82 2.82M4 24h4M40 24h4M12.68 35.32l-2.82 2.82M38.14 9.86l-2.82 2.82"/>`,

  moon: svg`<path d="M42 25.58A18 18 0 1 1 22.42 6 14 14 0 0 0 42 25.58Z"/>`,

  github: svg`<g transform="translate(4,4) scale(2.5)" fill="currentColor" stroke="none"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></g>`,

  accessibility: svg`<circle cx="24" cy="24" r="18"/><circle cx="24" cy="16" r="2.6" fill="currentColor" stroke="none"/><path d="M14 21 H34 M24 21 V32 M24 25 L18 34 M24 25 L30 34"/>`,

  settings: svg`<circle cx="24" cy="24" r="7"/><path d="M24 6 V12 M24 36 V42 M6 24 H12 M36 24 H42 M11 11 L15.2 15.2 M32.8 32.8 L37 37 M37 11 L32.8 15.2 M15.2 32.8 L11 37"/>`,
};
