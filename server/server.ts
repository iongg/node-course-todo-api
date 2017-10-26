/**
 * Created by iong on 25.10.2017.
 */
import express = require('express');
import bodyParser = require('body-parser')
import mongoose = require('mongoose');
import {ObjectID} from "mongodb";

import Todo = require('./models/todo');
import  User = require('./models/user');

let app = express();
app.use(bodyParser.json());

let port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://john:sakura123@ds233895.mlab.com:33895/mongo-node-udemy');

app.post('/todos', (req, res) => {
    console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/todos/:id', (req, res) => {
    let id = req.params.id;
    console.log(req.params.id);

    if (!ObjectID.isValid(id)){
        return res.status(404).send("not a valid id");
    } else {
        console.log('Id is valid');
    }

    Todo.findById(id).then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    })


});

app.listen(port, () => console.log(`Started on port ${port}`));