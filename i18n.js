// server/i18n.js
const i18n = require('i18next');
const Backend = require('i18next-fs-backend');

i18n.use(Backend).init({
  lng: 'en',
  fallbackLng: 'en',
  backend: {
    loadPath: path.join(__dirname, 'locales/{{lng}}.json'),
  },
});

module.exports = i18n;
