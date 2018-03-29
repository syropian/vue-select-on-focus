import vSelectOnFocus from "./vue-select-on-focus";

export { vSelectOnFocus };

function install(Vue) {
  Vue.directive("highlight-on-focus", vSelectOnFocus);
}

export default install;

// Install by default if included from script tag
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(install);
}
