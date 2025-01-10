// Importation des modules nécessaires
const express = require('express');
const { connectDB } = require('./database_access/database'); // Importer la fonction de connexion DB
const userRoutes = require('./routes/userRoutes'); // Importer les routes utilisateur
const cors = require('cors');
require('dotenv').config();  // Pour charger les variables d'environnement

const app = express();
const port = 3001; // Port du serveur

// Ajouter le middleware CORS
app.use(cors({
  origin: `http://localhost:${port}`, // Remplacez par l'URL de votre frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware pour parser les données JSON
app.use(express.json());


// Routes
app.use('/api/users', userRoutes); // Préfixe pour les routes utilisateur

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
