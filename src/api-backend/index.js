import express from "express";
import connectToDb from "./db.js";

const app = express();

// Middleware pour lire les données JSON
app.use(express.json());

// Route pour récupérer tous les espaces
app.get("/espaces", async (req, res) => {
    let connection;
    try {
        // Se connecter à Oracle
        connection = await connectToDb();

        // Exécuter une requête SQL
        const result = await connection.execute('SELECT * FROM API3_ESPACES');

        // Retourner les résultats
        res.json(result.rows);
    } catch (error) {
        console.error("Erreur lors de la récupération des espaces :", error);
        res.status(500).json({ error: "Erreur lors de la récupération des espaces" });
    } finally {
        // Fermer la connexion
        if (connection) await connection.close();
    }
});
// Route pour récupérer tous les reservations
app.get("/reservations", async (req, res) => {
    let connection;
    try {
        // Se connecter à Oracle
        connection = await connectToDb();

        // Exécuter une requête SQL
        const result = await connection.execute('SELECT * FROM API3_RESERVATIONS');

        // Retourner les résultats
        res.json(result.rows);
    } catch (error) {
        console.error("Erreur lors de la récupération des reservations :", error);
        res.status(500).json({ error: "Erreur lors de la récupération des reservations" });
    } finally {
        // Fermer la connexion
        if (connection) await connection.close();
    }
});

// Route pour récupérer tous les utilisateurs
app.get("/utilisateurs", async (req, res) => {
    let connection;
    try {
        // Se connecter à Oracle
        connection = await connectToDb();

        // Exécuter une requête SQL
        const result = await connection.execute('SELECT * FROM API3_UTILISATEURS');

        // Retourner les résultats
        res.json(result.rows);
    } catch (error) {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
        res.status(500).json({ error: "Erreur lors de la récupération des utilisateurs" });
    } finally {
        // Fermer la connexion
        if (connection) await connection.close();
    }
});








// Démarrer le serveur

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});