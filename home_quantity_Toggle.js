export const home_quantity_Toggle = (e,id,stock) =>{
  const current_Card_Element = document.getElementById(`card${id}`)
  // console.log(current_Card_Element.id);
  let product_quentity = current_Card_Element.querySelector('.productQuantity');
  let quantity = parseInt( product_quentity.getAttribute('data-quen') )|| 1;
  if (e.target.className ==='cartIncrement') {
    {
      if(quantity<stock)
      {
        quantity++;
      }
      else
      {
        quantity=stock;
      }
    }
    
  }

  if (e.target.className ==='cartDecrement') {
    {
      if(quantity>1)
      {
        quantity--;
      }
      else 
      {
        quantity=1;
      }
    }
    
  }
  
  // console.log(number.innerHTML);
  
  product_quentity.textContent = quantity;
  product_quentity.setAttribute('data-quen',quantity.toString());
  return quantity;
  
};
