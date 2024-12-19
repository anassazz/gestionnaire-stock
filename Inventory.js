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







}