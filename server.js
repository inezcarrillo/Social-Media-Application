const express = require('express');
const db = require('./config/connection');
const routes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
});

app.post('/thought', (req, res) => {
    // Use db connection to add a document
    db.collection('userCollection').insertOne(
      { name: req.body.name, breed: req.body.breed }
    )
      .then(results => res.json(results))
      .catch(err => {
        if (err) throw err;
      });
  });

  app.get('/user', (req, res) => {
    // Use db connection to find all documents in collection
    db.collection('petCollection')
      .find()
      .toArray()
      .then(results => res.json(results))
      .catch(err => {
        if (err) throw err;
      });

    });