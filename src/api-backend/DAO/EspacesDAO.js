const EspacesDAO = require('../classes/Espaces.js');

class EspacesDAO {
    constructor() {
        this.espaces = [];
    }

    ajouterEspace(Espace){
        this.espaces.push(Espace);
    }

    getEspace(index){
        if(index >= 0 && index < this.espaces.length){
            return this.espaces[index];
        }
        else {
            throw new Error("Index invalide");
        }
    }

    getAllEspaces() {
        return this.espaces;
    }

    updateEspace(index , espace){
        if(index >= 0 && index < this.espaces.length){
            this.espaces[index] = espace;
        }
        else {
            throw new Error("Index invalide");
        }
    }

    supprimerEspace(index){
        if(index >= 0 && index < this.espaces.length){
            this.espaces.splice(index, 1);
        }
        else {
            throw new Error("Index invalide");
        }
    }

    rechercherParNom(nom) {
        return this.espaces.filter(espace => espace.nom.toLowerCase().includes(nom.toLowerCase()));
    }

    rechercherParCapacite(capaciteMin, capaciteMax) {
        return this.espaces.filter(espace =>
            espace.capacite >= capaciteMin && espace.capacite <= capaciteMax
        );
    }

    trierParNom() {
        return this.espaces.sort((a, b) => a.nom.localeCompare(b.nom));
    }

    trierParCapacite(desc = false) {
        return this.espaces.sort((a, b) => desc ? b.capacite - a.capacite : a.capacite - b.capacite);
    }

    getEspaceParId(id) {
        const espace = this.espaces.find(espace => espace.id === id);
        if (!espace) {
            throw new Error("Espace non trouvé.");
        }
        return espace;
    }



}


