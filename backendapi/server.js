const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


// MySQL Database Connection
const db = mysql.createConnection({
    host: 'localhost',  // Change this if your DB is hosted elsewhere
    port: '3333',
    user: 'root',       // Your MySQL username
    password: 'Black@113322',       // Your MySQL password
    database: 'reactusers'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database');
});

// Sample route
app.get('/', (req, res) => {
    res.send('Welcome to the backend API');
});

// Sample data endpoint
app.get('/api/data', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
    res.json(results);
    });
});

app.post('/api/data', (req, res) => {
    const { name, username , password } = req.body;
    if (!name || !username || !password) {
        return res.status(400).json({ error: 'Information is required' });
    }

    db.query('INSERT INTO users (name, username, password) VALUES (?,?,?)', [name,username,password], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ id: result.insertId, name , username, password });
    });

});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
