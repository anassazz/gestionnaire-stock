const fs = require('fs');
const Product = require('./Product');

class Inventory {
    constructor(filePath) {
        this.filePath = filePath;
        this.products = this.loadProducts();
    }






}