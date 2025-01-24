import { getCartProductFromLS } from "./getCartProductFromLS"

export const fetch_quantity_from_Lc = (id,price)=>{
let cart_product = getCartProductFromLS();
let existing_product = cart_product.find((cele) => cele.id ===id)
let quantity = 1;
if (existing_product) {
    quantity = existing_product.quantity;
    price = existing_product.price;
}
return {quantity,price};
}