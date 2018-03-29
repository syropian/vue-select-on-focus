function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function vSelectOnFocus (el, binding) {
  var defaultRange = _objectSpread({
    start: 0,
    end: -1
  }, binding.value);

  el.addEventListener("focus", function (e) {
    var start = parseInt(defaultRange.start, 10);
    var end = parseInt(defaultRange.end, 10);

    if (e.currentTarget.hasAttribute("contenteditable")) {
      selectNodeContents(e.currentTarget, start, end);
    } else {
      e.currentTarget.setSelectionRange(start, end);
    }
  });
}

var selectNodeContents = function selectNodeContents($el, start, end) {
  var textNode = $el.childNodes[0];
  var r = document.createRange();
  r.setStart(textNode, start);

  if (end < 0 || end > textNode.textContent.length) {
    end = textNode.textContent.length;
  }

  r.setEnd(textNode, end);
  var s = window.getSelection();
  s.removeAllRanges();
  s.addRange(r);
};

function install(Vue) {
  Vue.directive("highlight-on-focus", vSelectOnFocus);
}

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(install);
}

export default install;
export { vSelectOnFocus };
