const prompt = require('prompt');
const Inventory = require('./Inventory');
const inventory = new Inventory('data.json');

// Configuration de prompt
prompt.start();
prompt.message = ''; // Supprime le préfixe par défaut

// Fonction pour afficher le menu principal
function mainMenu() {
    console.log(`\n=== Gestionnaire de Stock ===\n`);
    console.log(`1. Ajouter un produit`);
    console.log(`2. Afficher tous les produits`);
    console.log(`3. Mettre à jour un produit`);
    console.log(`4. Supprimer un produit`);
    console.log(`5. Quitter`);

    prompt.get({
        name: 'option',
        description: 'Choisissez une option',
        type: 'integer',
        required: true,
        conform: (value) => value >= 1 && value <= 5
    }, (err, result) => {
        if (err) {
            console.error("Erreur :", err.message);
            return;
        }

        switch (result.option) {
            case 1:
                addProductMenu();
                break;
            case 2:
                listProductsMenu();
                break;
            case 3:
                updateProductMenu();
                break;
            case 4:
                deleteProductMenu();
                break;
            case 5:
                console.log("Au revoir !");
                process.exit();
                break;
        }
    });
}

// Menu pour ajouter un produit
function addProductMenu() {
    console.log("\n=== Ajouter un Produit ===\n");
    prompt.get([
        { name: 'name', description: 'Nom du produit', required: true },
        { name: 'description', description: 'Description du produit', required: true },
        { name: 'quantity', description: 'Quantité', type: 'integer', required: true, minimum: 0 },
        { name: 'price', description: 'Prix', type: 'number', required: true, minimum: 0 }
    ], (err, result) => {
        if (err) {
            console.error("Erreur :", err.message);
            return mainMenu();
        }

        try {
            inventory.addProduct(
                result.name,
                result.description,
                result.quantity,
                result.price
            );
            console.log("Produit ajouté avec succès !");
        } catch (error) {
            console.error("Erreur :", error.message);
        }

        mainMenu();
    });
}

// Menu pour lister tous les produits
function listProductsMenu() {
    console.log("\n=== Liste des Produits ===\n");
    const products = inventory.listProducts();

    if (products.length === 0) {
        console.log("Aucun produit trouvé.");
    } else {
        console.table(products);
    }

    mainMenu();
}

// Menu pour mettre à jour un produit
function updateProductMenu() {
    console.log("\n=== Mettre à Jour un Produit ===\n");
    prompt.get([
        { name: 'id', description: 'ID du produit', type: 'integer', required: true },
        { name: 'quantity', description: 'Nouvelle quantité (laisser vide pour ignorer)', type: 'integer', required: false },
        { name: 'price', description: 'Nouveau prix (laisser vide pour ignorer)', type: 'number', required: false }
    ], (err, result) => {
        if (err) {
            console.error("Erreur :", err.message);
            return mainMenu();
        }

        try {
            inventory.updateProduct(
                result.id,
                result.quantity !== undefined ? result.quantity : undefined,
                result.price !== undefined ? result.price : undefined
            );
            console.log("Produit mis à jour avec succès !");
        } catch (error) {
            console.error("Erreur :", error.message);
        }

        mainMenu();
    });
}

// Menu pour supprimer un produit
function deleteProductMenu() {
    console.log("\n=== Supprimer un Produit ===\n");
    prompt.get({
        name: 'id',
        description: 'ID du produit',
        type: 'integer',
        required: true
    }, (err, result) => {
        if (err) {
            console.error("Erreur :", err.message);
            return mainMenu();
        }

        try {
            inventory.deleteProduct(result.id);
            console.log("Produit supprimé avec succès !");
        } catch (error) {
            console.error("Erreur :", error.message);
        }

        mainMenu();
    });
}

// Démarrage du programme
mainMenu();
