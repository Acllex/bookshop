import instance from "./axios";


function saveGoods(data){
    return instance.post('/api/goods',data);
}
function seeGoods(data){
    return instance.get('/api/goods',{params:data});
}
function readGoods(id){
    return instance.get('/api/goods/'+id);
}
function upGoods(data){
    return instance.put('/api/goods/'+data.gid,data);
}

export {saveGoods, seeGoods, readGoods, upGoods};