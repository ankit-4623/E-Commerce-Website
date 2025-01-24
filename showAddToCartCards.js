import products from "./api/product.json";
import { fetch_quantity_from_Lc } from "./fetch_quantity_from_Lc";
import { getCartProductFromLS } from "./getCartProductFromLS";
import { increment_and_decrement } from "./increment_and_decrement";
import { remove } from "./remove";
import { updata_sub_total } from "./updata_sub_total";
let cart_product = getCartProductFromLS();

let filter_Product = products.filter((cur_pro) =>{
    // console.log(cur_pro.name);
   return cart_product.some((curElem) => curElem.id === cur_pro.id)     
    
})

// console.log(filter_Product);

const cart_element = document.getElementById('productCartContainer');
const template_Container = document.getElementById('productCartTemplate')
const show_cart_product = () =>{
    filter_Product.forEach((curpod) =>{
        const {brand, category,id,image,name,price,stock} = curpod;
        let product_clone2 = document.importNode(template_Container.content, true);
        const lsactual_data = fetch_quantity_from_Lc(id,price)
        product_clone2.getElementById('cardValue') .setAttribute("id",`card${id}`);
        product_clone2.querySelector('.productImage').src = image;
        product_clone2.querySelector(".category").textContent = category;
        product_clone2.querySelector(".productPrice").textContent = `₹${lsactual_data.price}`;
        product_clone2.querySelector(".productName").textContent = name;
        product_clone2.querySelector('.productQuantity').textContent = lsactual_data.quantity

        
        product_clone2.querySelector('.remove-to-cart-button').addEventListener('click',() =>{
            remove(id);
        })
        product_clone2.querySelector('.stockElement').addEventListener('click',(e) =>{
          increment_and_decrement(e,id,stock,price)
        })
        cart_element.appendChild(product_clone2); 
        
         
})

}
show_cart_product();
updata_sub_total();
