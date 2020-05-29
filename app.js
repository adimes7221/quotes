var express 				= require("express");
var	app 					= express();
var bodyParser 				= require("body-parser");
var mongoose 				= require("mongoose");

var methodOverride			= require("method-override");
var flash 					= require("connect-flash");





mongoose.connect("mongodb+srv://cfrazier1227:Silver16@gatorgreats-i0slu.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());



var quotes = {
	q1: {
		quote: "The art of acquiescence, we must see things for what they are.",
		book: "Meditations",
		author: "Marcus Aurelius"
	},
	q2: {
		quote: "Avoid certain things in your train of thought, everything random, everything irrelevant.",
		book: "Meditations",
		author: "Marcus Aurelius"
	},
	q3: {
		quote: "Each of us lives only now, this brief instant",
		book: "Meditations",
		author: "Marcus Aurelius"
	},
	q4: {
		quote: "If you seek tranquility, do less, do what's essential.",
		book: "Meditations",
		author: "Marcus Aurelius",
	},
	q5: {
		quote: "Things gravitate toward what they were intended for, what things gravitate toward is their goal.",
		book: "Meditations",
		author: "Marcus Aurelius"
	},
	q6: {
		quote: "I do what is mine to do; the rest does not disturb me.",
		book: "Meditations",
		author: "Marcus Aurelius"
	},
	q7: {
		quote: "Sanity means tying your well bring to your own actions.",
		book: "Meditations",
		author: "Marcus Aurelius"
	},
	q8: {
		quote: "My only fear is doing something contrary to human nature, the wrong thing, the wrong way, or at the wrong time.",
		book: "Meditations",
		author: "Marcus Aurelius"
	},
	q9: {
		quote: "Don't try to picture everything bad that could possibly happen, Stick to the situation at hand.",
		book: "Meditations",
		author: "Marcus Aurelius"
	},
	q10: {
		quote: "Limit yourself to the present.",
		book: "Meditations",
		author: "Marcus Aurelius"
	},
	q11: {
		quote: "Get a move on, if you have it in you, and don't worry whether anyone will give you credit for it.",
		book: "Meditations",
		author: "Marcus Aurelius"
	},
	q12: {
		quote: "Stop talking about what a good man is like and just be one.",
		book: "Meditations",
		author: "Marcus Aurelius"
	},
	q13: {
		quote: "Look at the individual parts and move from analysis to indifference.",
		book: "Meditations",
		author: "Marcus Aurelius"
	},
	q14: {
		quote: "If you don't have a consistent goal in life, you can't live it in a consistent way.",
		book: "Meditations",
		author: "Marcus Aurelius"
	},
	q15: {
		quote: "Concentrate on living what can be lived, the present, then you can spend the time you have left in tranquility.",
		book: "Meditations",
		author: "Marcus Aurelius"
	},
	q16: {
		quote: "Concentrate on living what can be lived, the present, then you can spend the time you have left in tranquility.",
		book: "Meditations",
		author: "Marcus Aurelius"
	},
	q17: {
		quote: "It's all in how you percieve it. You're in control.",
		book: "Meditations",
		author: "Marcus Aurelius"
	},
	q18: {
		quote: "The present is all we have to live in or to lose.",
		book: "Meditations",
		author: "Marcus Aurelius"
	}
}




app.get("/", function(req, res){
	res.render("quotes/show", {quotes: quotes});
});
























let port = process.env.PORT || 3000;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);