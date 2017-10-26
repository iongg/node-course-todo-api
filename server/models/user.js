"use strict";
/**
 * Created by iong on 25.10.2017.
 */
var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});
var User = mongoose.model('User', userSchema);
module.exports = User;
//# sourceMappingURL=user.js.map