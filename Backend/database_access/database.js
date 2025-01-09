// Importation de 'pg' pour la connexion PostgreSQL
const { Pool } = require('pg');
require('dotenv').config();  // Charger les variables d'environnement

// Créer une instance de Pool avec les informations de connexion
const pool = new Pool({
  user: process.env.PG_USER,           // Utilisateur de la DB
  host: process.env.PG_HOST,           // Hôte de la DB
  database: process.env.PG_DATABASE,   // Nom de la base de données
  password: process.env.PG_PASSWORD,   // Mot de passe de la DB
  port: process.env.PG_PORT,           // Port de la DB
});

// Fonction pour tester la connexion
const connectDB = async () => {
  try {
    await pool.connect();
    console.log('Connexion à PostgreSQL réussie!');
  } catch (err) {
    console.error('Erreur de connexion à la base de données', err);
    process.exit(1); // Arrêter le processus en cas d'erreur
  }
};

// Exporter l'objet pool pour utilisation dans d'autres parties de l'application
module.exports = { pool, connectDB };
