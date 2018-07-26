var mongoose = require('mongoose');


var todoList = new mongoose.Schema({
    title:  String,
    isDone: Boolean,
});

module.exports = mongoose.model('todoList',todoList)
