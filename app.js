var express 				= require("express");
var	app 					= express();
const mongodb 				= require("mongodb"); // load mongodb
var bodyParser 				= require("body-parser");
var mongoose 				= require("mongoose");

var methodOverride			= require("method-override");
var flash 					= require("connect-flash");
var Quote = require('./models/quotes');





// var qData = 'mongodb+srv://cfrazier1227:<Silver16>@gatorgreats-i0slu.mongodb.net/<inspire.>?retryWrites=true&w=majority';
// mongoose.connect(qData, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
// var db = mongoose.connection;



mongoose.connect("mongodb+srv://cfrazier1227:Silver16@gatorgreats-i0slu.mongodb.net/inspire?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}, (err, db) => {
  // connect to your specific collection (a.k.a database) that you specified at the end of your URI (/database)
//const connnection = mongoose.connection;
//const db = inspire.db('quotes');
 	var cmon = db.collection('quotes');
    app.get("/", (req, res) => {
    // search the database (collection) for all users with the `user` field being the `user` route paramter
    Quote.find({}, function(err, allQuotes){
		 var quoteKeys = Object.keys(allQuotes);
	     var randomIndex = Math.floor(Math.random() * quoteKeys.length); 
	     var randomObject = allQuotes[quoteKeys[randomIndex]]; 
	     var final = JSON.stringify(randomObject); 
	     var finalObject = JSON.parse(final);

	     // var quote = JSON.stringify(final);
	     // var show = quote; console.log(show)
	     // var theQuote = show[quote]; console.log(theQuote)
    	res.render("quotes/show", { quote: finalObject.quote, author: finalObject.author, book: finalObject.book });

    })
});

});



  // Responds to GET requests with the route parameter being the username.
  // Returns with the JSON data about the user (if there is a user with that username)
  // Example request: https://mynodeserver.com/myusername
  



app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());




















let port = process.env.PORT || 3000;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
// let port = process.env.PORT || 3000;
// if (port == null || port == "") {
//   port = 8000;
// }
// app.listen(port);

//process.env.PORT
