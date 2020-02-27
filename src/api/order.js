import instance from "./axios";

function addOrder(){
    return instance.post('/api/order');
}
function readOrder(id){
    return instance.get('/api/order/'+id);
}
function upOrder(data,datas){
    return instance.put('/api/order/'+data,datas);
}
export {addOrder, readOrder, upOrder};