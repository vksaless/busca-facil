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

const Contact = mongoose.model('Contact', ContactSchema);

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

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
