export default function(el, binding) {
  const defaultRange = {
    start: 0,
    end: -1,
    ...binding.value
  };
  el.addEventListener("focus", e => {
    const start = parseInt(defaultRange.start, 10);
    const end = parseInt(defaultRange.end, 10);

    if (e.currentTarget.hasAttribute("contenteditable")) {
      selectNodeContents(e.currentTarget, start, end);
    } else {
      e.currentTarget.setSelectionRange(start, end);
    }
  });
}

const selectNodeContents = ($el, start, end) => {
  let textNode = $el.childNodes[0];

  let r = document.createRange();

  r.setStart(textNode, start);

  if (end < 0 || end > textNode.textContent.length) {
    end = textNode.textContent.length;
  }
  r.setEnd(textNode, end);

  let s = window.getSelection();
  s.removeAllRanges();
  s.addRange(r);
};
