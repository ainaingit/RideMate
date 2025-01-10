const { Pool } = require('pg');

// Classe User pour gérer les interactions avec la base de données
class User {
    // Initialisation du pool de connexions
    constructor() {
        this.pool = new Pool();  // Utilisation du pool pour gérer les connexions
    }

    // Créer un utilisateur
    async createUser(email, password, role) {
        const query = 'INSERT INTO users(email, password, role) VALUES($1, $2, $3) RETURNING *';
        const values = [email, password, role];
        
        try {
            const res = await this.pool.query(query, values);  // Exécution de la requête
            return res.rows[0];  // Retourner l'utilisateur créé
        } catch (err) {
            console.error('Error creating user:', err);
            throw err;  // Propager l'erreur en cas de problème
        }
    }

    // Récupérer un utilisateur par son email
    async getUserByEmail(email) {
        const query = 'SELECT * FROM users WHERE email = $1';
        const values = [email];
        
        try {
            const res = await this.pool.query(query, values);  // Exécution de la requête
            return res.rows[0];  // Retourner l'utilisateur trouvé
        } catch (err) {
            console.error('Error fetching user:', err);
            throw err;  // Propager l'erreur en cas de problème
        }
    }
}

module.exports = User;  // Exporter la classe User pour utilisation ailleurs
