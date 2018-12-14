const express = require('express');
const url = require('url');
let userData = require('../static_data/users.json');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.get('/profiles/:id', (req, res) => {
  const userId = req.params.id;

  res.send(userData[userId].profile);
});

router.put('/profiles/:id', (req, res) => {
  const data = req.body;
  console.log(data);
  userData = data;

  res.send('user data modified');
});

router.get('/preferences/:id', (req, res) => {
  const userId = req.params.id;

  res.send(userData[userId].preference);
});

module.exports = router;
