var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.PORT ? 'mongodb://quyen:123456@ds137360.mlab.com:37360/todoapi' : 'mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose
};