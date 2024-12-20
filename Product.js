class Product {
    constructor(id, name, description, quantity, price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
    }
    getTotalPrice() {
        return this.quantity * this.price;
    }

}

module.exports = Product;