import { getCartProductFromLS } from "./getCartProductFromLS";



export const updata_sub_total = (localStorageprice) =>{
    // const total_price = document.querySelector('.productOrderTotal');
    let sub_total = document.querySelector('.productSubTotal');
    let final_total =document.querySelector('.productFinalTotal');
    // const tax_val = total_price.querySelector('.productTax').innerText;
 let ls_data = getCartProductFromLS();
   let initial_val = 0;

    let total_price =ls_data.reduce((acc,ele) =>{
   let product_price = parseInt(ele.price)||0;
   return acc + product_price;
    },initial_val);
    console.log(total_price);
    
    sub_total.textContent= `₹${total_price}`;
    final_total.textContent = `₹${total_price + 50}`;
    
}
