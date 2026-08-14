// Vanilla-JS port of the old docs/.vitepress/theme/VoxToc.vue's scroll-spy
// algorithm, including its getAbsoluteTop offsetParent-walk. No framework
// needed here — this is the only genuinely runtime part of the TOC; heading
// extraction itself happens at build time (see _plugins/toc_hook.rb).

function getAbsoluteTop(el) {
  let top = 0;
  let node = el;
  while (node && node !== document.body) {
    top += node.offsetTop;
    node = node.offsetParent;
  }
  return top;
}

export function initTocScrollSpy() {
  const items = [...document.querySelectorAll('vox-toc-item[data-toc-id]')];
  const targets = items
    .map((item) => ({ item, el: document.getElementById(item.dataset.tocId) }))
    .filter((t) => t.el);
  if (!targets.length) return;

  function update() {
    const scrollY = window.scrollY;
    const atBottom =
      Math.abs(scrollY + window.innerHeight - document.body.offsetHeight) < 1;
    let current = null;
    if (scrollY >= 1) {
      current = atBottom
        ? targets[targets.length - 1].item
        : targets.reduce(
            (acc, t) => (getAbsoluteTop(t.el) > scrollY + 80 ? acc : t.item),
            null,
          );
    }
    for (const t of targets) t.item.toggleAttribute('current', t.item === current);
  }

  let ticking = false;
  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    },
    { passive: true },
  );
  update();
}
