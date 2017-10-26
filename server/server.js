"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by iong on 25.10.2017.
 */
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var mongodb_1 = require("mongodb");
var Todo = require("./models/todo");
var app = express();
app.use(bodyParser.json());
var port = process.env.PORT || 3000;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://john:sakura123@ds233895.mlab.com:33895/mongo-node-udemy');
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
app.get('/todos/:id', function (req, res) {
    var id = req.params.id;
    console.log(req.params.id);
    if (!mongodb_1.ObjectID.isValid(id)) {
        return res.status(404).send("not a valid id");
    }
    else {
        console.log('Id is valid');
    }
    Todo.findById(id).then(function (todos) {
        res.send({ todos: todos });
    }, function (e) {
        res.status(400).send(e);
    });
});
app.listen(port, function () { return console.log("Started on port " + port); });
//# sourceMappingURL=server.js.map