import oracledb from "oracledb";

// Configuration de la base Oracle
const dbConfig = {
    user: 'ora25',
    password: 'oracle',
    connectString: '(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = mons-oracle19.condorcet.be)(PORT = 1521))(CONNECT_DATA = (SID = ORCL)))'
    // ou simplement : 'mons-oracle19.condorcet.be:1521/orcl'
};

// Fonction de connexion
const connectToDb = async () => {
    try {
        const connection = await oracledb.getConnection(dbConfig);
        console.log("Connexion à Oracle réussie !");
        return connection;
    } catch (error) {
        console.error("Erreur de connexion à Oracle :", error);
        throw error;
    }
};

export default connectToDb;