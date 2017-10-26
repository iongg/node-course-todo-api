"use strict";
/**
 * Created by iong on 25.10.2017.
 */
var mongoose = require("mongoose");
var todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});
var Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
//# sourceMappingURL=todo.js.map