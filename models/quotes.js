
// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const quoteSchema = new Schema(
  {
    localId: {
    	quote: String,
		book: String,
		author: String
    }
    }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Quote", quoteSchema);