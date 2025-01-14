CREATE TABLE users (
    id SERIAL PRIMARY KEY,              -- Identifiant unique auto-incrémenté
    email VARCHAR(255) NOT NULL UNIQUE, -- Adresse email unique
    password VARCHAR(255) NOT NULL,     -- Mot de passe hashé
    role VARCHAR(50) NOT NULL,          -- Rôle de l'utilisateur (ex. admin, user)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Date de création
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Date de mise à jour
);

-- Trigger function to update 'updated_at' column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = CURRENT_TIMESTAMP;
   RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to call the function before any update on the table
CREATE TRIGGER set_updated_at
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();
