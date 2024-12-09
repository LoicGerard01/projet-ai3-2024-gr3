const UtilisateursDAO = require('../classes/Utilisateurs.js');

class UtilisateursDAO {
    constructor() {
        this.utilisateurs = [];
    }

    ajouterUtilisateur(utilisateur) {
        this.utilisateurs.push(utilisateur);
    }

    getUtilisateur(index) {
        if (index >= 0 && index < this.utilisateurs.length) {
            return this.utilisateurs[index];
        } else {
            throw new Error("Index invalide");
        }
    }

    getAllUtilisateurs() {
        return this.utilisateurs;
    }

    updateUtilisateur(index, utilisateur) {
        if (index >= 0 && index < this.utilisateurs.length) {
            this.utilisateurs[index] = utilisateur;
        } else {
            throw new Error("Index invalide");
        }
    }

    supprimerUtilisateur(index) {
        if (index >= 0 && index < this.utilisateurs.length) {
            this.utilisateurs.splice(index, 1);
        } else {
            throw new Error("Index invalide");
        }
    }

    rechercherParNom(nom) {
        return this.utilisateurs.filter(utilisateur =>
            utilisateur.nom.toLowerCase().includes(nom.toLowerCase())
        );
    }

    rechercherParEmail(email) {
        return this.utilisateurs.filter(utilisateur =>
            utilisateur.email.toLowerCase() === email.toLowerCase()
        );
    }

    rechercherParRole(role) {
        return this.utilisateurs.filter(utilisateur =>
            utilisateur.role.toLowerCase() === role.toLowerCase()
        );
    }

    getUtilisateurParId(id_utilisateur) {
        const utilisateur = this.utilisateurs.find(utilisateur => utilisateur.id_utilisateur === id_utilisateur);
        if (!utilisateur) {
            throw new Error("Utilisateur non trouvé.");
        }
        return utilisateur;
    }
}
