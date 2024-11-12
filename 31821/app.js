const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Example EJS', message: 'This is EJS.', isLoggedIn: true });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
