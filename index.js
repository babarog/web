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

app.get(routes.matija, (req, res) => {
  res.render('matija', { ...globalVars, name: 'Matija' });
});

app.listen(3000, () => {
  console.log(`Server is running on ${port}`);
});
