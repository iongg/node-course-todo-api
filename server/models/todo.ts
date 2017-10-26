/**
 * Created by iong on 25.10.2017.
 */
import mongoose = require('mongoose');

interface ITodo {
    text: string,
    completed: boolean,
    completedAt: number
}

interface ITodoModel extends ITodo, mongoose.Document {}

let todoSchema = new mongoose.Schema({
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

let Todo = mongoose.model<ITodo>('Todo', todoSchema);

export = Todo;

