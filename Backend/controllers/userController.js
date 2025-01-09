const User = require('../model/user');  // Importer le modèle User

// Fonction pour créer un utilisateur
const createUser = async (req, res) => {
    const { email, password, role } = req.body;  // Récupérer les données du body de la requête
    try {
        const newUser = await User.createUser(email, password, role);  // Appeler la méthode createUser du modèle User
        res.status(201).json(newUser);  // Retourner la réponse en JSON
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Fonction pour récupérer un utilisateur par email
const getUserByEmail = async (req, res) => {
    const { email } = req.params;  // Récupérer l'email dans les paramètres de l'URL
    try {
        const user = await User.getUserByEmail(email);  // Appeler la méthode getUserByEmail du modèle User
        if (!user) {
            return res.status(404).json({ message: 'User not found' });  // Si aucun utilisateur n'est trouvé
        }
        res.status(200).json(user);  // Retourner l'utilisateur trouvé
    } catch (err) {
        console.error('Error fetching user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { createUser, getUserByEmail };
