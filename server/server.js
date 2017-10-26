"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by iong on 25.10.2017.
 */
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Todo = require("./models/todo");
var app = express();
app.use(bodyParser.json());
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ToDoApp');
app.post('/todos', function (req, res) {
    console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then(function (doc) {
        res.send(doc);
    }, function (e) {
        res.status(400).send(e);
    });
});
app.get('/todos', function (req, res) {
    Todo.find().then(function (todos) {
        res.send({ todos: todos });
    }, function (e) {
        res.status(400).send(e);
    });
});
app.listen(3000, function () { return console.log('Started on port 3000'); });
//# sourceMappingURL=server.js.map