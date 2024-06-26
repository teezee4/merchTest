const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = 3000;

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'zmttZ48$',
  database: 'helloworld'
});

app.get('/message', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT message FROM messages LIMIT 1');
    res.json({ message: rows[0].message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});