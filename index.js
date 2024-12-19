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