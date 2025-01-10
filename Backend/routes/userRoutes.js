const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Importer le contrôleur User

// Route pour créer un utilisateur
router.post('/register', userController.createUser);

// Route pour la connexion
router.post('/login', userController.loginUser);

module.exports = router;
