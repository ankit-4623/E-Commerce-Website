import { getCartProductFromLS } from "./getCartProductFromLS";
import { show_tost } from "./show_tost";
import { update_cart_value } from "./update_cart_value";
getCartProductFromLS();
export const add_to_cart = (e,id,stock) => {

let arrLocalStorage = getCartProductFromLS();
const current_addTo_ele  = document.getElementById(`card${id}`);
// console.log(current_addTo_ele);
let quantity = current_addTo_ele.querySelector('.productQuantity').innerText;
let price = current_addTo_ele.querySelector('.productPrice').innerText;
// console.log(price);

 price = price.replace("₹", "")

let existing_data = arrLocalStorage.find((current) => current.id === id )

// let past_quentity = 1;
if (existing_data&&quantity>1) {
    // past_quentity = quantity;
    quantity = Number(existing_data.quantity)+Number(quantity);
    price=Number( price*quantity);
    let update_cart_ele  = {id,quantity,price}
    update_cart_ele = arrLocalStorage.map((e) =>{
        return  e.id === id ? update_cart_ele:e;
    })
    localStorage.setItem('cartProducts',JSON.stringify(update_cart_ele));
 
}
if (existing_data) {
    return false;
    
}
price=Number( price*quantity);
// console.log(price);
quantity = Number(quantity);
let update_cart = {id,quantity,price}
{
    arrLocalStorage.push(update_cart);
    localStorage.setItem('cartProducts',JSON.stringify(arrLocalStorage));
    show_tost('Add',id);
}
// let cart_val = document.getElementById('cartValue');
update_cart_value(arrLocalStorage);


// console.log("Cart updated. Items in cart:", arrLocalStorage.length);
}