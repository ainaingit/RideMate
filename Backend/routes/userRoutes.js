const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route pour créer un utilisateur
router.post('/register', userController.createUser);

// Route pour se connecter
router.post('/login', userController.loginUser);

// Vérifier une route de test
router.get('/test', (req, res) => {
    res.status(200).json({ message: 'Router is working!' });
});

module.exports = router;
