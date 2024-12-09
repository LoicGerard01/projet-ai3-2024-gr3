CREATE TABLE API3_utilisateurs (
                              id NUMBER PRIMARY KEY,
                              nom VARCHAR2(50),
                              email VARCHAR2(100) UNIQUE,
                              mot_de_passe VARCHAR2(255),
                              role VARCHAR2(20) CHECK (role IN ('utilisateur', 'administrateur'))
);

CREATE TABLE API3_espaces (
                         id NUMBER PRIMARY KEY,
                         nom VARCHAR2(100),
                         description VARCHAR2(255),
                         capacite NUMBER
);

CREATE TABLE API3_reservations (
                              id NUMBER PRIMARY KEY,
                              id_utilisateur NUMBER REFERENCES API3_utilisateurs(id),
                              id_espace NUMBER REFERENCES API3_espaces(id),
                              date_debut DATE,
                              date_fin DATE,
                              statut VARCHAR2(20)
);
