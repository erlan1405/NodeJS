const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const port = 3000;

app.get('/', (req, res) => {
  res.render('index', { title: 'Example EJS', message: 'This is EJS.', isLoggedIn: true });
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
