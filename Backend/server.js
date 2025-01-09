// Importation des modules nécessaires
const express = require('express');
const { connectDB } = require('./database_access/database'); // Importer la fonction de connexion DB
require('dotenv').config();  // Pour charger les variables d'environnement

const app = express();
const port = 3001; // Port du serveur

// Middleware pour parser les données JSON
app.use(express.json());

// Route pour tester la connexion à la base de données
app.get('/', async (req, res) => {
  try {
    await connectDB(); // Tester la connexion à la base de données
    res.send('Connexion réussie à la base de données et serveur RideMate en marche!');
  } catch (err) {
    res.status(500).send('Erreur de connexion à la base de données');
  }
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur backend fonctionne sur http://localhost:${port}`);
});
