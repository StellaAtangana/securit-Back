    const express = require('express'); 
    const db = require('./database');
    const cors = require('cors'); 
const e = require('express');
    const app = express(); 
    app.use(cors()); 
    app.use(express.json());
    app.post('/api/auth/login', (req, res) => { 
        const { email, password } = req.body; 
        
        const query = `SELECT * FROM users WHERE email = ?  password = ?`; 
        
        db.get(query, [email, password], (err, user) => { 
                if (err) { 
                return res.status(500).json({ error: "Erreur serveur" }); 
                } 
                if (user) { 
                res.json({ user: user, token: 'super-faux-token' }); 
                } else { 
                res.status(401).json({ error: "Identifiants incorrects" }); 
                } 
            }); 
        });

    app.post('/api/auth/inscription', (req, res) => {
    const { email, password } = req.body;
    const insertQuery = `INSERT INTO users (email, password) VALUES (?, ?)`;
        db.get(insertQuery, [email, password], function (err) {
            if (err) {
                return res.status(500).json({ error: "Erreur lors de l'inscription" });
            }

            res.json({ 
                message: "Inscription réussie",
                userId: this.lastID 
            });
        });
    });
    
    app.get('/api/notes', (req, res) => { 
    console.log("React demande la liste des notes !"); 
    
    res.json([ 
        {  
        id: 1,  
        content: 'Ceci est une fausse note envoyée par le serveur !',  
        authorId: 2  
        } 
    ]); 
    }); 
    
    const PORT = 3000; 
    app.listen(PORT, () => { 
    console.log(`🚀Serveur Back-end démarré sur http://localhost:${PORT}`); 
    }); 