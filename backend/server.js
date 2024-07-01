const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/buscafacil', { useNewUrlParser: true, useUnifiedTopology: true });

const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const PlaceSchema = new mongoose.Schema({
    name: String,
    address: String,
    contact: String,
    hours: String
});

const Contact = mongoose.model('Contact', ContactSchema);
const Place = mongoose.model('Place', PlaceSchema);

app.post('/api/contact', (req, res) => {
    const newContact = new Contact(req.body);
    newContact.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send('Contact saved successfully!');
        }
    });
});

app.post('/api/place', (req, res) => {
    const newPlace = new Place(req.body);
    newPlace.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send('Place saved successfully!');
        }
    });
});

app.get('/api/places', (req, res) => {
    Place.find({}, (err, places) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(places);
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// Conectando ao MongoDB
mongoose.connect('mongodb://localhost:27017/buscafacil', { useNewUrlParser: true, useUnifiedTopology: true });

// Esquema e Modelo de Lugares
const PlaceSchema = new mongoose.Schema({
    name: String,
    address: String,
    contact: String,
    hours: String
});

const Place = mongoose.model('Place', PlaceSchema);

// Rota para adicionar um lugar
app.post('/api/place', (req, res) => {
    const newPlace = new Place(req.body);
    newPlace.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send('Place saved successfully!');
        }
    });
});

// Rota para obter todos os lugares
app.get('/api/places', (req, res) => {
    Place.find({}, (err, places) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(places);
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
