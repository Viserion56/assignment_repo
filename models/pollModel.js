const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Raidenshogun@1234',
  database: 'polling_app'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

const pollModel = {
  createPoll: (question, options, createdBy, callback) => {
    const pollData = {
      question,
      options: JSON.stringify(options),
      createdBy,
      selectedOption: null,
      votes: JSON.stringify([]),
    };

    const query = 'INSERT INTO polls SET ?';
    db.query(query, pollData, (err, result) => {
      if (err) {
        console.error('Error creating poll:', err);
        callback(err, null);
      } else {
        console.log('Poll created successfully');
        callback(null, result.insertId);
      }
    });
  },

  getPollsByUser: (createdBy, callback) => {
    const query = 'SELECT * FROM polls WHERE createdBy = ?';
    db.query(query, [createdBy], (err, results) => {
      if (err) {
        console.error('Error fetching polls by user:', err);
        callback(err, null);
      } else {
        console.log('Polls fetched successfully');
        callback(null, results);
      }
    });
  },
};

module.exports = pollModel;
