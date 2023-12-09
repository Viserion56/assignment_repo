const express = require('express');
const router = express.Router();
const pollModel = require('../models/pollModel');

// Create a poll
router.post('/create', (req, res) => {
  const { question, options, createdBy } = req.body;

  pollModel.createPoll(question, options, createdBy, (err, pollId) => {
    if (err) {
      return res.status(500).json({ error: 'Error creating poll' });
    }
    res.json({ message: 'Poll created successfully', pollId });
  });
});

// Get polls created by a specific user
router.get('/user/:createdBy', (req, res) => {
  const createdBy = req.params.createdBy;

  pollModel.getPollsByUser(createdBy, (err, polls) => {
    if (err) {
      return res.status(500).json({ error: 'Error fetching polls' });
    }
    res.json(polls);
  });
});

module.exports = router;