/**
 * Created by iong on 25.10.2017.
 */
import mongoose = require('mongoose');

interface IUser {
    email: string
}

interface IUserModel extends IUser, mongoose.Document {}

let userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

let User = mongoose.model<IUser>('User', userSchema);

export = User;