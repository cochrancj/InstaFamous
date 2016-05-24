var mongoose = require("mongoose");

var quoteSchema = mongoose.Schema({
  title: { type: String, required: true},
  who: { type: String }
});

var Quote = mongoose.model("Quote", quoteSchema);

module.exports = Quote;
