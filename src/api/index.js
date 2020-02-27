import instance from "./axios";

function queryIndex(){
    return instance.get('/api/index');
}
function queryList(data){
    return instance.get('/api/glist',{params:data})
}

export {queryIndex, queryList};