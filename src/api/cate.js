import instance from "./axios";


function queryCate(){
    return instance.get('/api/cate1');
}

export {queryCate};