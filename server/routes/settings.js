const express = require('express');
const url = require('url');
const data = require('../static_data/users.json');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.get('/profile', (req, res) => {
  const query = url.parse(req.url, true).query;
  const userId = query.userId;

  res.send(data[userId].profile);
});

router.get('/preference', (req, res) => {
  const query = url.parse(req.url, true).query;
  const userId = query.userId;

  res.send(data[userId].preference);
});

module.exports = router;
