import manage from './api/manage'

const components = {
  install(Vue){
    Vue.componet (
      'manage', manage
  )
  }
}

export default components
