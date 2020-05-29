var mongoose = require("mongoose");

//player - email, name
var quotesSchema = new mongoose.Schema({
	quote: String,
	book: String,
	author: String
	
});

module.exports = mongoose.model("quotes", quotesSchema);