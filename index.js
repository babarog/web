const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'assets')));
app.set('view options', { layout: 'layout.hbs' });


app.get('/matija', (req, res) => {
  res.render('matija', { name: 'Matija' });
});

app.listen(3000, () => {
  console.log(`Server is running on ${port}`);
});
