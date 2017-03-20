// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// const obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log("Unable to connect to mongodb server");
    }

    console.log('Connected to mongodb server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("58ce9fda76d5a0651bac9125")
    // }, {
    //     $set: { completed: true }
    // }, {
    //     returnOriginal: false
    // }).then((doc) => {
    //    console.log(doc);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("58cea3328b0a6618b88e19f7")
    }, {
        $set: { name: 'Quyen' },
        $inc: { age: 1 }
    }, {
        returnOriginal: false
    }).then((doc) => {
       console.log(doc);
    });

    db.close();
});
