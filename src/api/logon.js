import instance from "./axios";

function register(data){
    return instance.post('/api/logon',data);
}
function vef(data){
    return instance.get('/api/logon',{params:data});
}
function logins(data){
    return instance.post('/api/ulogin',data);
}
function seeUser(){
    return instance.get('/api/logon/x');
}

export {register,vef,logins, seeUser};