const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

// Configure MySQL connection
const connection = mysql.createConnection({
  host: '127.0.0.1:3306'
  user: 'u308266873_buditeam',
  password: '*H2VC$bv>c5T',
  database: 'u308266873_budi'
});

// Test MySQL connection
connection.connect((err) => {
  if (err) {
    console.log('Error connecting to MySQL database');
  } else {
    console.log('Connected to MySQL database');
  }
});

// Parse JSON request body
app.use(bodyParser.json());

// Handle form data submission
app.post('/submit-form', (req, res) => {
  const formData = req.body;
  
  // Insert form data into MySQL database
  connection.query('INSERT INTO user SET ?', formData, (err, result) => {
    if (err) {
      console.log('Error inserting form data into MySQL database');
      console.log(err);
      res.status(500).send('Internal server error');
    } else {
      console.log('Form data inserted into MySQL database');
      res.status(200).send('Form data submitted successfully');
    }
  });
});

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
