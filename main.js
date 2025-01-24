import './style.css';
import products from "./api/product.json";
import { showProductContainer } from './home_product_card';
// console.log(products);
showProductContainer(products)
