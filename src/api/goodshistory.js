import  instance from "./axios";

function upGoodsHistory(id){
    return instance.put('/api/goodshistory/'+id);
}

function seeGoodsHistory(){
    return instance.get('/api/goodshistory');
}

export {upGoodsHistory, seeGoodsHistory};