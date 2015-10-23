var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Phone = new Schema({
    type: String,
    color: String,
    price: Number
});

mongoose.connect(process.env.MONGO_URI);
module.exports = mongoose.model("phones", Phone);
