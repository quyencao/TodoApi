// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// const obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log("Unable to connect to mongodb server");
    }

    console.log('Connected to mongodb server');

    // db.collection('Todos').find({_id: new ObjectID("58ce9a38f35be518f088f5d1")}).toArray().then((todos) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(todos, null, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find({completed: false}).count().then((count) => {
    //     console.log(`Todos: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Quyen'}).toArray().then((users) => {
        console.log(JSON.stringify(users, null, 2));
    }, (err) => {
        console.log('Unable to find users', err);
    });

    db.close();
});
