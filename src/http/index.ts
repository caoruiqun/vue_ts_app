import axios from "axios";
import { ElMessage } from 'element-plus'

enum MSGS{
    "操作错误" =200,
    "密码错误",
    "账号错误",
    "请求异常"
}

//创建http实例
const $http = axios.create({
    baseURL:"http://127.0.0.1:9001/api/ts",
    timeout:2000,
    headers:{
        "Content-type":"application/json;charset=utf-8"
        // "Authorization":store.state.uInfo.userInfo.token
    }
})

//请求拦截
$http.interceptors.request.use(config=>{
    config.headers = config.headers || {}
    if(localStorage.getItem('token')){
        config.headers.token = localStorage.getItem('token') || ''
    }
    return config
})

$http.interceptors.response.use(res=>{
    // {
    //     code:200,
    //     data:{},
    //     msg:"操作成功"
    // }

    const code:number = res.data.code
    if(code != 200){
        ElMessage.error(MSGS[code] || "服务器出错")
        return Promise.reject(res.data)
    }
    return res.data
},err=>{
    console.log(err)
})

export default $http