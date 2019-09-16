import axios from 'axios'
import qs from 'qs'

const errorHandle =(status,message)=>{
  switch(status){
    //未登录
    case 401:
    //跳转去登录 toLogin
      toLogin()
      break;
    case 403:
      break;
    case 404:
      break;
    default:

  }
}

const instance = axios.create({
  // baseURL:http_env,
  timeout:10000,
  headers:{
    'Content-Type':'application/json;charset=utf-8',//
  }
})

instance.interceptors.request.use(
  config =>{
    return config
  },
  error => {        
    return Promise.error(error);    
  }
)

instance.interceptors.response.use(
  res =>{
    // 请求成功
    res.status === 200 ? Promise.resolve(res) : Promise.reject(res) 
  },
  //请求失败
  error=>{
    const { response } = error;
    if (response) {
        // 请求已发出，但是不在2xx的范围 
        errorHandle(response.status, response.data.message);
        return Promise.reject(response);
    } else {
        // 处理断网的情况
        // eg:请求超时或断网时，更新state的network状态
        // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
        // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
        if (!window.navigator.onLine) {
          //  store.commit('changeNetwork', false);
        } else {
            return Promise.reject(error);
        }
    }
  }
)

const myAxios=(options=>{
  const {methods,url,params}=options
  const realUrl = http_env + url 
  switch(methods.toLowerCase()){
    case 'get':
      return axios.get(realUrl,{params:params})
    case 'post':
      return axios.post(realUrl,params)
    case 'delete':
      return axios.delete(realUrl,{params:params})
    case 'put':
      return axios.put(realUrl,params)
    default:
      return axios(options)
  }
})

const toLogin=()=>{

}



export default function request(options){
  return myAxios(options).then(response=>{
    const { status,statusText,data} = response
    return {
      success:true,
      message:statusText,
      statusCode:status,
      ...data
    }
  }).catch(error=>{
    const { response } = error
    let msg
    let statusCode
    if (response && response instanceof Object) {
      const { data, statusText } = response
      statusCode = response.status
      msg = data.message || statusText
    } else {
      statusCode = 600
      msg = error.message || 'Network Error'
    }
    return { success: false, statusCode, message: msg }
  })
}