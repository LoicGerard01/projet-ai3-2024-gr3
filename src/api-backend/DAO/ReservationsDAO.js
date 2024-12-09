const ReservationsDAO = require('../classes/Reservations.js');

class ReservationsDAO {
    constructor() {
        this.reservations = [];
    }

    ajouterReservation(reservation) {
        this.reservations.push(reservation);
    }

    getReservation(index) {
        if (index >= 0 && index < this.reservations.length) {
            return this.reservations[index];
        } else {
            throw new Error("Index invalide");
        }
    }

    getAllReservations() {
        return this.reservations;
    }

    updateReservation(index, reservation) {
        if (index >= 0 && index < this.reservations.length) {
            this.reservations[index] = reservation;
        } else {
            throw new Error("Index invalide");
        }
    }

    supprimerReservation(index) {
        if (index >= 0 && index < this.reservations.length) {
            this.reservations.splice(index, 1);
        } else {
            throw new Error("Index invalide");
        }
    }

    rechercherParUtilisateur(id_utilisateur) {
        return this.reservations.filter(reservation => reservation.id_utilisateur === id_utilisateur);
    }

    rechercherParEspace(id_espace) {
        return this.reservations.filter(reservation => reservation.id_espace === id_espace);
    }

    rechercherParStatut(statut) {
        return this.reservations.filter(reservation => reservation.statut.toLowerCase() === statut.toLowerCase());
    }

    rechercherParDate(dateDebut, dateFin) {
        return this.reservations.filter(reservation =>
            reservation.date_debut >= dateDebut && reservation.date_fin <= dateFin
        );
    }

    getReservationParId(id) {
        const reservation = this.reservations.find(reservation => reservation.id === id);
        if (!reservation) {
            throw new Error("Réservation non trouvée.");
        }
        return reservation;
    }
}
