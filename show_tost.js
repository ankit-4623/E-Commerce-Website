export function show_tost(operation,id)
{
    const tost = document.createElement('div')
    tost.classList.add("toast")
    if (operation ==='Add') {
        tost.textContent = `Product with ID ${id} has been added to the cart`
    }
    else
    {
       tost.textContent = `Product with ID ${id} has been remove`
    }
    document.body.appendChild(tost);
    setTimeout(() => {
        tost.remove();
    }, 2000);
}