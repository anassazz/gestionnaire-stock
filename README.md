# Gestionnaire de Stock
Ce projet est une application de gestion d'inventaire développée en Node.js. Elle permet de gérer des produits, d'effectuer des opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) et de sauvegarder les données dans un fichier JSON.
## Fonctionnalités
Ajouter un produit à l'inventaire
 . Lister les produits disponibles avec leurs détails et prix totaux
 . Mettre à jour les informations d'un produit (quantité et prix)
 . Supprimer un produit de l'inventaire
 . Persistance des données grâce à un fichier JSON

 ## Prérequis
Node.js installé sur votre machine.

 ### 1-Installation
Clonez le dépôt :
```git clone <url_du_dépôt>
cd gestionnaire-stock
```
## jddd
### 2-Installez les dépendances :

 ```
npm install

```
# Utilisation :
### 1-Lancez l'application :

bash
Copier le code

```
node index.js
```
### 2-Suivez les instructions pour gérer l'inventaire.

## Structure du projet

.` Product.js` : Classe représentant un produit.
.` Inventory.js` : Classe gérant les opérations sur l'inventaire.
. `data.json` : Fichier contenant les données des produits.
. `index.js `: Point d'entrée de l'application.


## Dépendances
. prompt : Pour gérer les interactions utilisateur.
## Licence
Ce projet est sous licence ISC.

 ## Exemple d'exécution
 ```
 === Gestionnaire de Stock ===

1. Ajouter un produit
2. Afficher tous les produits
3. Mettre à jour un produit
4. Supprimer un produit
5. Quitter
Choisissez une option:

 ```






