// server/routes/language.js
const express = require('express');
const router = express.Router();
const i18n = require('../i18n');

router.get('/:lng', (req, res) => {
  const { lng } = req.params;
  i18n.changeLanguage(lng, (err, t) => {
    if (err) return res.status(500).json({ error: 'Language change failed' });
    res.json({ message: t('welcome') }); // Example response
  });
});

module.exports = router;
