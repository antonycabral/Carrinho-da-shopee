

async function  addItem(userCart, item) {
    userCart.push(item);
}

async function calcularTotal(userCart){
    console.log("\n Total Valor: ")

    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`Total: ${result}`);
}

async function deletarItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        userCart.splice(index, 1);
    }
}

async function removerItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    if (indexFound == -1){
        console.log("Item não encontrado");
        return;
    }

    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity-=1;
        return
    }

    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }

    async function displaycart(userCart) {
        console.log("\nShopee cart list:");
        userCart.forEach((item, index) => {
        console.log(
            `${index + 1}. ${item.name} - R$ ${item.price} | ${
            item.quantity
            }x | Subtotal = ${item.subtotal()}`
        );
        });
    }

}

export {addItem, calcularTotal, deletarItem,removerItem};