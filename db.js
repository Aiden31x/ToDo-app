const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://aryan31:Aryan%4031@todo.oem8m.mongodb.net/");

const ToDoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', ToDoSchema);

module.exports = {
    todo
}