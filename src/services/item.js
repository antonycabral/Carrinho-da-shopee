async function criarItem(name, price, quantity) {
    return{
        name,
        price,
        quantity,
        subtotal:() => price * quantity,
    }
}

export default criarItem;