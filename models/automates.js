var mongoose = require('mongoose');

var automateSchema = new mongoose.Schema({
    name: String,
    model: String,
    brand: String,
    pool: String,
	physical_area: String,
	configuration: String

})

var automates = mongoose.model('automates',automateSchema);
module.exports = automates