import axios from 'axios';
// import store from 'store';
let instance = axios.create({
  baseURL: '',
})

//请求拦截
instance.interceptors.request.use((config)=>{
  window.console.log('请求开始');
  let token = sessionStorage.getItem('token');
  // Do something before request is sent
  config.headers.token = token;
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

instance.interceptors.response.use(function(response){
  return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
});
export default instance;