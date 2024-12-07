class Reservation {
    constructor(id, id_utilisateur, id_espace, date_debut, date_fin, statut) {
        this.id = id;
        this.id_utilisateur = id_utilisateur;
        this.id_espace = id_espace;
        this.date_debut = date_debut;
        this.date_fin = date_fin;
        this.statut = statut;
    }

    // Getters
    getId() {
        return this.id;
    }

    getIdUtilisateur() {
        return this.id_utilisateur;
    }

    getIdEspace() {
        return this.id_espace;
    }

    getDateDebut() {
        return this.date_debut;
    }

    getDateFin() {
        return this.date_fin;
    }

    getStatut() {
        return this.statut;
    }

    // Setters
    setId(id) {
        this.id = id;
    }

    setIdUtilisateur(id_utilisateur) {
        this.id_utilisateur = id_utilisateur;
    }

    setIdEspace(id_espace) {
        this.id_espace = id_espace;
    }

    setDateDebut(date_debut) {
        this.date_debut = date_debut;
    }

    setDateFin(date_fin) {
        this.date_fin = date_fin;
    }

    setStatut(statut) {
        this.statut = statut;
    }
}
