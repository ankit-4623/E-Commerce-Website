import { update_cart_value } from "./update_cart_value";

export const getCartProductFromLS = () =>{
let cart_products = localStorage.getItem('cartProducts')
if (!cart_products) {
    return [];
}
cart_products = JSON.parse(cart_products)
update_cart_value(cart_products);
return cart_products;
}