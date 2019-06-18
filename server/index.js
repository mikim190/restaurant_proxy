require('newrelic');
const express = require('express');
const path = require('path');
const request = require('request');
const app = express();
const PORT = 1111;


app.use(express.static(path.join(__dirname, '../public/')))

app.get('/restaurants/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/index.html'));
});

app.get('/api/restaurants/:id/info', (req,res) => {
  
  const { id } = req.params;
  request('http://127.0.0.1:3005/api/restaurants/' + id + '/info', (err, results) => {
  if (err) {
    res.send(err);
  }
  })
  .pipe(res)
});

// app.get('/restaurants/:id/reviews', (req, res) => {
//   res.redirect(`http://127.0.0.1:3001/api/restaurants/${req.params.id}/reviews`);
// });

// app.get('/restaurants/:id/photos', (req, res) => {
//   res.redirect(`http://127.0.0.1:3000/api/restaurants/${req.params.id}/photos`);
// });

// app.get('/restaurants/:id/googlereviews', (req, res) => {
//   res.redirect(`http://127.0.0.1:3003/api/restaurants/${req.params.id}/googlereviews`);
// });

app.listen(PORT, () => console.log(`Proxy server listening on port ${PORT}!`));



