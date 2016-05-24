var express             = require('express'),
    quotesRouter          = express.Router(),
    passport            = require('../../lib/passportStrategy.js');

var Quote = require('../../models/quote.js');

//index action
quotesRouter.get("/", function(req, res){
  Quote.find( function(err, quotes){
    if(err){
      console.log(err);
      res.json({ error: "NOOOOOOOO"});
       }

    res.status(200).json(quotes);
  });
});

// show action
quotesRouter.get("/quote", function(req, res){});

quotesRouter.use( passport.authenticate( "jwt", { session: false }) );

// create action
quotesRouter.post("/", function(req, res){

  // Owl.new en Rails
  var newQuote = Quote({
    title: req.body.title,
    who: req.body.who
  });

  // Owl.save en Rails
  newQuote.save( function( err, quote){
    // handle errors
    if(err){
      console.log("FAILURE SAVING QUOTE: " +  err);
      res.status(501).json(err);
    }

    // we choose to send back whatever we want but for now we're responding with JSOn to test our app
    res.status(201).json(quote);

  } );

});

//edit action
quotesRouter.put("/quote", function(req, res){});

//delete action
quotesRouter.delete("/quote", function(req, res){ });


module.exports = quotesRouter;
