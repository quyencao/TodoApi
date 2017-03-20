// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// const obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log("Unable to connect to mongodb server");
    }

    console.log('Connected to mongodb server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: "Something to do"}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Walk the cat'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: true}).then((doc) => {
    //    console.log(doc);
    // });

    // db.collection('Users').deleteMany({name: 'Quyen'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID("58cea33869fb28021c060af8")}).then((doc) => {
        console.log(JSON.stringify(doc, undefined, 2));
    });

    db.close();
});
