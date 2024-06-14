const i18n = require('../i18n');

exports.changeLanguage = (req, res) => {
  const { lng } = req.body;
  i18n.changeLanguage(lng, (err, t) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'Language changed', lng });
  });
};
