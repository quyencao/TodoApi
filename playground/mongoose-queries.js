const {ObjectID} = require('mongodb');
const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// var id = "58d09e5f2c69841002041e3811";
//
// if(!ObjectID.isValid(id)) {
//     console.log('id not valid');
// }

// Todo.find({
//     _id : id
// }).then((todos) => {
//     console.log('todos', JSON.stringify(todos, null, 2));
// });
//
// Todo.findOne({
//     _id : id
// }).then((todo) => {
//     console.log('todo', JSON.stringify(todo, null, 2));
// });

// Todo.findById({
//     _id : id
// }).then((todo) => {
//     if(!todo) {
//         return console.log('id not found');
//     }
//
//     console.log('todo by id', JSON.stringify(todo, null, 2));
// }).catch((err) => {
//     console.log(err);
// });

var id = "58cffe326f0dfcb02b4319ae";
User.findById({
    _id: id
}).then((user) => {
    if(!user) {
        return console.log('User not found');
    }

    console.log(user);
}, (err) => console.log(err));