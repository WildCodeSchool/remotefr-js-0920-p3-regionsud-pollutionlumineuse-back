const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const { port, connection } = require('./config');

const app = express();

app.get('/', (req, res) => res.send('Express server is up and running!'));

app.get('/mot-message-cle', (req, res) => {
  if (err) {
    res.status(500).send({ error: err.message });
  } else {
    res.status(200).send("Bienvenue sur la page Mots-clés et Messages-clés !");
  }
});

app.get('/definition', (req, res) => {
  if (err) {
    res.status(500).send({ error: err.message });
  } else {
    res.status(200).send("Bienvenue sur la page Définitions !");
  }
});

app.get('/pratique', (req, res) => {
  if (err) {
    res.status(500).send({ error: err.message });
  } else {
    res.status(200).send("Bienvenue sur la page 'Passons à la pratique' !");
  }
});

app.get('/jeu', (req, res) => {
  if (err) {
    res.status(500).send({ error: err.message });
  } else {
    res.status(200).send("Bienvenue sur la page Jeu !");
  }
});

app.get('/ressource', (req, res) => {
  if (err) {
    res.status(500).send({ error: err.message });
  } else {
    res.status(200).send("Bienvenue sur la page Ressource !");
  }
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Express server listening on ${port}`);
  }
});
