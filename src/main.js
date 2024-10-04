import * as cartService from "./services/cart.js"
import criarItem from "./services/item.js"

const myCart = [];
const myWishList = [];

console.log("Bem vindo ao carrinho da Shopee")

const item1 = await criarItem("HotWheels", "20.99", 1);
const item2 = await criarItem("Barbie", "50.99", 1);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removerItem(myCart, item2);
await cartService.removerItem(myCart, item2);
await cartService.removerItem(myCart, item2);

await cartService.displaycart(myCart);

