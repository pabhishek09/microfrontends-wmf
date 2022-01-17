import Vue from 'vue'
import App from './App.vue'

const mount = (containerEl) => {
  new Vue({
    render: h => h(App)
  }).$mount(containerEl);
}

if (process.env.NODE_ENV === 'development') {
  const targetEl = document.querySelector('#_remote-dev-root')
  if (targetEl) mount(targetEl);
}

export default mount;
