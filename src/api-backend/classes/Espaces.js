class Espace {
    constructor(id, nom, description, capacite) {
        this.id = id;
        this.nom = nom;
        this.description = description;
        this.capacite = capacite;
    }

    // Getters
    getId() {
        return this.id;
    }

    getNom() {
        return this.nom;
    }

    getDescription() {
        return this.description;
    }

    getCapacite() {
        return this.capacite;
    }

    // Setters
    setId(id) {
        this.id = id;
    }

    setNom(nom) {
        this.nom = nom;
    }

    setDescription(description) {
        this.description = description;
    }

    setCapacite(capacite) {
        if (capacite >= 0) {
            this.capacite = capacite;
        } else {
            throw new Error("La capacité doit être un nombre positif.");
        }
    }
}
