const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CrudSchema = new Schema({
    name: {type: String, required: true, max: 100},
    type: {type: String, required: true, max: 100},
    age: {type:Number },
    issue_date: {type: Date,  default: Date.now, required: true},
});


// Export the model
module.exports = mongoose.model('Crud', CrudSchema);