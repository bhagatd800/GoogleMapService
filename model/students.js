var mongoose = require('mongoose');

// User Schema
var StudentSchema = mongoose.Schema({
    name: {
        type: String,
        index: true
    },
    subject: {
        type: String
    },
    contact: {
        type: Number
    },
    longitude: {
        type: Number
    },
    latitude: {
        type: Number
    }
});

var student = module.exports = mongoose.model('student', StudentSchema);

module.exports.submitData = function (newData, callback) {
    console.log(newData);
    
    student.update({ "contact":newData.contact,"subject":newData.subject },{$set:newData},{ upsert: true },callback);
}

module.exports.getLocationData = function (data, callback) {
    console.log(data);
    
    student.find({"subject":data.subject},callback);
}
