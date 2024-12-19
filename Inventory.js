const fs = require('fs');
const Product = require('./Product');

class Inventory {
    constructor(filePath) {
        this.filePath = filePath;
        this.products = this.loadProducts();
    }

    loadProducts() {
        try {
            if (fs.existsSync(this.filePath)) {
                const data = fs.readFileSync(this.filePath, 'utf8');
                return JSON.parse(data).map(
                    p => new Product(p.id, p.name, p.description, p.quantity, p.price)
                );
            } else {
                fs.writeFileSync(this.filePath, JSON.stringify([], null, 2));
                return [];
            }
        } catch (error) {
            console.error("Erreur lors de la lecture du fichier JSON :", error.message);
            return [];
        }
    }

    saveProducts() {
        try {
            fs.writeFileSync(this.filePath, JSON.stringify(this.products, null, 2));
        } catch (error) {
            console.error("Erreur lors de l'écriture du fichier JSON :", error.message);
        }
    }

    addProduct(name, description, quantity, price) {
        const id = this.products.length > 0 ? this.products[this.products.length - 1].id + 1 : 1;
        const newProduct = new Product(id, name, description, quantity, price);
        this.products.push(newProduct);
        this.saveProducts();
    }

    listProducts() {
        return this.products.map(product => ({
            id: product.id,
            name: product.name,
            description: product.description,
            quantity: product.quantity,
            price: product.price,
            total: product.getTotalPrice()
        }));
    }

    updateProduct(id, quantity, price) {
        const product = this.products.find(p => p.id === id);
        if (!product) throw new Error("Produit introuvable");
        if (quantity !== undefined) product.quantity = quantity;
        if (price !== undefined) product.price = price;
        this.saveProducts();
    }

    deleteProduct(id) {
        const index = this.products.findIndex(p => p.id === id);
        if (index === -1) throw new Error("Produit introuvable");
        this.products.splice(index, 1);
        this.saveProducts();
    }







}