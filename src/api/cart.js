import instance from "./axios";

function queryCart(){
    return instance.get('/api/cart');
}
function cartAdd(data){
    return instance.post('/api/cart',data);
}
function choiceCart(data){
    return instance.put('/api/cart/'+data.gid,data);
}
function allCart(flag){
    return instance.put('/api/allcart/2',flag);
}
export {queryCart,cartAdd,choiceCart,allCart};