import instance from "./axios";

function queryOrder(){
    return instance.get('api/orderlist');
}
function queryOrderList(id,data){
    return instance.get('api/orderlist/'+id,{params:data})
}
export {queryOrder, queryOrderList};