import { add_to_cart } from "./add_to_cart";
import { home_quantity_Toggle } from "./home_quantity_Toggle";

const product_container = document.getElementById('productContainer')
const template_sec = document.getElementById('productTemplate')

export const showProductContainer = (products) =>{
    if (!products) {
        return false;
    }
products.forEach((ele) =>{
const {brand, category,description,id,image,name,price,stock} = ele;
const product_clone = document.importNode(template_sec.content, true);
let index = 1;  
product_clone.querySelector('.productName').textContent = name;
        // product_clone.querySelector('.productBrand').textContent = brand;
        product_clone.querySelector('.category').textContent = category;
        product_clone.querySelector('.productDescription').textContent = description;
        product_clone.querySelector('.productImage').src =image;
        product_clone.querySelector('.productPrice').textContent = `₹${price}`;
        product_clone.querySelector('.productActualPrice').textContent=`₹${price*2}`
        product_clone.querySelector('.productStock').textContent = stock 
product_clone.querySelector('#cardValue').setAttribute('id',`card${id}`)
   product_clone.querySelector('.stockElement').addEventListener('click',(e) =>{
  home_quantity_Toggle(e,id,stock)
   })
   product_clone.querySelector('.add-to-cart-button').addEventListener('click',(e) =>{
    add_to_cart(e,id,stock);
   })

       
        productContainer.appendChild(product_clone);
})
// add_to_cart();

}