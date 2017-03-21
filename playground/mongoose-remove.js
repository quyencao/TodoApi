const {ObjectID} = require('mongodb');
const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((result) => {
//    console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findOneAndRemove({}).then((todo) => {
//
// });

// Todo.findByIdAndRemove

// Todo.findByIdAndRemove('58d14d33c21606ef6c9c9428').then((todo) => {
//     console.log(todo);
// });