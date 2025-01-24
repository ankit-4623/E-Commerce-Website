import { getCartProductFromLS } from "./getCartProductFromLS";
import { show_tost } from "./show_tost";
import { updata_sub_total } from "./updata_sub_total";
import { update_cart_value } from "./update_cart_value";
 
export const remove = (id) => {
    // console.log("Removing item with ID:", id);


    let ls_data = getCartProductFromLS();

    const updated_ls_data = ls_data.filter((item) => item.id !== id);

    localStorage.setItem("cartProducts", JSON.stringify(updated_ls_data));
    

     const removeDiv = document.getElementById(`card${id}`);
    if (removeDiv) {
        removeDiv.remove();
        show_tost("delet",id);
    }
    update_cart_value
    (updated_ls_data)
 updata_sub_total();

};
