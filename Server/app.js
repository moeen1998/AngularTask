const express = require('express')
const cors = require('cors')

var LocalStorage = require('node-localstorage').LocalStorage,
    localStorage = new LocalStorage('./scratch');

const app = express()

app.use(cors()) 

app.use(express.json()) //////formdata
app.use(express.urlencoded({ extended: true })) //////postman

app.post('/register', (req, res) => {
    if (req.body.email != "") {
        localStorage.setItem(req.body.email, JSON.stringify(req.body));
        res.status(201).send(req.body);
    } else {
        res.status(422).send({ msg: "Enter All The Fields" });
    }
})

app.post('/note', (req, res) => {
    console.log(req.body)
    if (req.body != {}) {
        localStorage.setItem(req.body.name, JSON.stringify(req.body));
        res.status(201).send(req.body);
    } else {
        res.status(422).send({ msg: "Enter All The Fields" });
    }
})

app.post('/login', (req, res) => {
    if (req.body.email != "") {
        let localData = localStorage.getItem(req.body.email);
        let userData = JSON.parse(localData);
        res.send(userData);
    }
    else
        res.status(422).send({ msg: "Not Valid Data" });
})

app.listen(3000);