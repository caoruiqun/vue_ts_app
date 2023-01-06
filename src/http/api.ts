import $http from "./index";

interface LoginData{
    userName:string,
    password:string
}

export const login = (data:LoginData)=>$http({
    url:"/login",
    method:"post",
    data
})