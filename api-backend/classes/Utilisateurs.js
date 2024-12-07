class Utilisateur {
    constructor(id_utilisateur, nom, prenom, email, role) {
        this.id_utilisateur = id_utilisateur;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.role = role;
    }

    // Getters
    getIdUtilisateur() {
        return this.id_utilisateur;
    }

    getNom() {
        return this.nom;
    }

    getPrenom() {
        return this.prenom;
    }

    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
    }
    // Setters
    setIdUtilisateur(id_utilisateur) {
        this.id_utilisateur = id_utilisateur;
    }

    setNom(nom) {
        this.nom = nom;
    }

    setPrenom(prenom) {
        this.prenom = prenom;
    }

    setEmail(email) {
        this.email = email;
    }
    setRole(role) {
        this.role = role;
    }
}
