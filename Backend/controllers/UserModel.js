const mongoose = require('mongoose');    


// mongoose schema for user 


const User = mongoose.model('User', {
    username: String,
    email: String,
    password: String,
});

module.exports = User;