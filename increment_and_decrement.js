import { getCartProductFromLS } from "./getCartProductFromLS";
import { updata_sub_total } from "./updata_sub_total";

export const increment_and_decrement = (e,id,stock,price) =>{
    const current_Card_Element = document.getElementById(`card${id}`)
    let product_quentity = current_Card_Element.querySelector('.productQuantity');
    let product_price = current_Card_Element.querySelector('.productPrice')

    let quantity = 1;
    let localStorageprice = 0;
    let localStorage_data = getCartProductFromLS();
    let existing_data = localStorage_data.find((item) => item.id === id) 
       
        if (existing_data) {
            quantity = existing_data.quantity;
            localStorageprice = existing_data.price;
        }
        else
        {
            localStorageprice = price;
            price = price;
        }
       
    

    if (e.target.className === 'cartIncrement') {
        if (quantity<stock) {
            quantity++;
            
        }
        else if (quantity === stock) {
            quantity = stock;
            localStorageprice = price*stock;
        }
        
    }

    if (e.target.className === 'cartDecrement') {
        if (quantity>1) {
            quantity--;
            
        }
      
    }

    localStorageprice = price*quantity;
    localStorageprice = Number(localStorageprice.toFixed(2))
    let update_cart = {id, quantity, price:localStorageprice}
    update_cart = localStorage_data.map((item) =>{
        return item.id === id ? update_cart:item;
    })
    localStorage.setItem('cartProducts',JSON.stringify(update_cart))

    product_quentity.textContent = quantity;
    product_price.innerText = localStorageprice;
    // console.log(localStorageprice);
    // console.log(id);
    
    updata_sub_total();
    
}