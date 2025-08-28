// components.js
const requireComponent = require.context("@com", true, /[A-Z]\w+\.vue$/);

export default function registerComponents(Vue) {
  requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName);

    const componentName = fileName
      .split("/")
      .pop()
      .replace(/\.\w+$/, "");

    if (
      componentName &&
      componentConfig &&
      (componentConfig.default || componentConfig)
    ) {
      Vue.component(componentName, componentConfig.default || componentConfig);
    }
  });
}
