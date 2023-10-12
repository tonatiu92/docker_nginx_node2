const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'password',
    database: 'fullcycle'
});

db.connect();

app.get('/', (req, res) => {
  let message = '<h1>Full Cycle Rocks!</h1><br/>Names of PEOPLE TABLE<br/>';

  db.query('SELECT name FROM people', (error, results) => {
      if (error) throw error;

      results.forEach(person => {
          message += `<p>${person.name}</p>`;
      });

      res.send(message);
  });
});


app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
