let cart_val = document.getElementById('cartValue');

export const update_cart_value = (arrLocalStorage) =>{
return cart_val.innerHTML = ` <i class="fa-solid fa-cart-shopping"> ${arrLocalStorage.length} </i>`
}