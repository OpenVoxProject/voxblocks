import { css } from 'lit';

/**
 * Direction support for VoxBlocks.
 *
 * Layout is written in CSS logical properties (`margin-inline-start`,
 * `inset-inline-end`, `text-align: start`, …), which follow the inherited
 * direction on their own and need no help here. This module covers the
 * cases logical properties can't express: transforms, mirrored glyphs, and
 * keyboard handling, all of which have to ask which way the text runs.
 *
 * Components opt in by adding `rtlStyles` to their `static styles`, which
 * defines `--vox-flip` on the host: `1` in LTR, `-1` in RTL. Multiply any
 * horizontal translation by it and the motion follows the text.
 *
 * `:dir()` is used rather than `[dir='rtl']` because it matches on resolved
 * directionality — inherited from any ancestor, including across a shadow
 * boundary — so a component picks up `dir="rtl"` set once on `<html>` without
 * every consumer having to thread the attribute down to each element.
 */
export const rtlStyles = css`
  :host {
    --vox-flip: 1;
  }

  :host(:dir(rtl)) {
    --vox-flip: -1;
  }
`;

/**
 * Whether `element` resolves to right-to-left, for the behaviour CSS can't
 * reach — chiefly arrow-key navigation, where <kbd>→</kbd> means "previous"
 * in RTL because the next item sits to the left.
 *
 * Reads the resolved style rather than the `dir` attribute so that direction
 * inherited from an ancestor (the usual case: `dir` on `<html>`) is seen.
 */
export function isRtl(element: Element): boolean {
  return getComputedStyle(element).direction === 'rtl';
}
