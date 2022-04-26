import manage from 'wanxi-vue-fm/src/api/manage'

const components = {
  install(Vue){
    Vue.componet (
      'manage', manage
  )
  }
}

export default components
