const express = require('express');
const path = require('path');
const hbs = require('hbs');

const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'assets')));

app.set('view options', { layout: 'layout' });
hbs.registerPartials(path.join(__dirname, '/views/partials'));

const globalVars = { routes };

app.get(routes.home, (req, res) => {
  res.render('home', globalVars);
});

app.get(routes.detailing, (req, res) => {
  res.render('detailing', { ...globalVars, name: 'Detailing' });
});

app.get(routes.kemijsko, (req, res) => {
  res.render('kemijsko', { ...globalVars, name: 'Kemijsko čišćenje' });
});

app.get(routes.gallery, (req, res) => {
  res.render('gallery', { ...globalVars, name: 'Galerija radova' });
});

app.get(routes.cjenik, (req, res) => {
  res.render('cjenik', { ...globalVars, name: 'Cjenik' });
});

app.get(routes.about, (req, res) => {
  res.render('about', { ...globalVars, name: 'O nama' });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
