const express = require('express');
const url = require('url');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.get('/profile', (req, res) => {
  const query = url.parse(req.url, true).query;
  const userId = query.userId;
  res.send(`userId = ${userId}`);
});

module.exports = router;
