//Required methods: addItem(cart,item,quantity), removeItem(cart,item), getTotalItems(cart)

//Defining the methods + exporting them 

let cart = [];

function addItem (cart,item, quantity) {
    cart.push({item,quantity});
    console.log(`🛒  ${quantity} ${item} added to your cart.`);
    return cart;
    
}

function removeItem (cart,item) {
    for (i= 0; i<cart.length; i++) {
        if (cart[i].item === item) {
            cart.splice(i,1); 
    }
}
    console.log(`❗ An item was removed from the cart.`)
    return cart; 
}

function getTotalItems (cart) { 
    let totalItems = 0; 
    for (let i=0; i<cart.length;i++) {
        totalItems += cart[i].quantity;
    }
    return totalItems; 
}

//Testing if it works 
//Adding items 
cart = addItem(cart,"Onions", 30);
cart = addItem(cart,"Carrots", 47);
cart = addItem(cart,"Strawberries", 25);
console.log ("Total items:", getTotalItems(cart));

//Removing items
cart = removeItem (cart, "Onions");
console.log ("Total items now:", getTotalItems(cart));

//Exporting the methods 
module.exports = {
    addItem,
    removeItem,
    getTotalItems};