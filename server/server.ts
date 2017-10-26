/**
 * Created by iong on 25.10.2017.
 */
import express = require('express');
import bodyParser = require('body-parser')
import mongoose = require('mongoose');

import Todo = require('./models/todo');
import  User = require('./models/user');

let app = express();
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ToDoApp');

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

app.listen(3000, () => console.log('Started on port 3000'));