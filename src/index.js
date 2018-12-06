import selectOnFocus from "./vue-select-on-focus"

const install = function(Vue) {
  Vue.directive("select-on-focus", selectOnFocus)
  // For previous version compatibility
  Vue.directive("highlight-on-focus", selectOnFocus)
}
// Install by default if included from script tag
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(install)
}

selectOnFocus.install = install
export default selectOnFocus
