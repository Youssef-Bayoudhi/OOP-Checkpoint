class Product {
    constructor (id,name,price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCartItem {
    constructor(product,quantity){
        this.product = product;
        this.quantity = quantity;
    }calculateTotalPrice(){
    
        return this.product.price * this.quantity;
} 
}

class ShoppingCart(){
    constructor(){
        this.items=[]
    }
}
getTotalItems (){
    return this.items.length;
}

addItem(product,quantity){
    const cartItem = new ShoppingCartItem (product,quantity);
    this.items.push(cartItem)
    this.displayCartItems()
    const productQuantity = document.getElementById("productQuantity")
    productQuantity.innerHTML=""
}

 


