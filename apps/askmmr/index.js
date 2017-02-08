var alexa = require('alexa-app');

module.change_code = 1;

var app = new alexa.app('askmmr');
app.dictionary = {"colors":["beige","black","blue","brown","burgundy","camouflage","charcoal","gold","gray","green","lime","off-white","orange","pink","purple","red","silver","turquoise","white","yellow"]};

app.launch(function(req, res) {
  res.say("Ask MMR launching");
});

app.intent('ForTransactions', {
  "slots": {
    "VIN": "AMAZON.LITERAL",
    "YEAR": "AMAZON.FOUR_DIGIT_NUMBER",
    "MMS": "AMAZON.LITERAL"
  },
  "utterances": [
    "for a {-|YEAR} {PONTIAC G six V six four DOOR SEDAN|MMS}",
    "for {one G two Z G five five eight seven six four two four nine eight seven zero|VIN}"
  ]
}, function(req, res) {
  res.say('yay for transactions');
});

app.intent('ForHistoricalAverage', {
  "slots": {
    "VIN": "AMAZON.LITERAL",
    "YEAR": "AMAZON.FOUR_DIGIT_NUMBER",
    "MMS": "AMAZON.LITERAL"
  },
  "utterances": [
    "for a {-|YEAR} {PONTIAC G six V six four DOOR SEDAN|MMS}",
    "for {one G two Z G five five eight seven six four two four nine eight seven zero|VIN}"
  ]
}, function(req, res) {
  res.say('yay for historical average');
});

app.intent('ForProjectedAverage', {
  "slots": {
    "VIN": "AMAZON.LITERAL",
    "YEAR": "AMAZON.FOUR_DIGIT_NUMBER",
    "MMS": "AMAZON.LITERAL"
  },
  "utterances": [
    "for a {-|YEAR} {PONTIAC G six V six four DOOR SEDAN|MMS}",
    "for {one G two Z G five five eight seven six four two four nine eight seven zero|VIN}"
  ]
}, function(req, res) {
  res.say('yay for projected average');
});

app.intent('ForEstimatedRetailValue', {
  "slots": {
    "VIN": "AMAZON.LITERAL",
    "YEAR": "AMAZON.FOUR_DIGIT_NUMBER",
    "MMS": "AMAZON.LITERAL"
  },
  "utterances": [
    "for a {-|YEAR} {PONTIAC G six V six four DOOR SEDAN|MMS}",
    "for {one G two Z G five five eight seven six four two four nine eight seven zero|VIN}"
  ]
}, function(req, res) {
  res.say('yay for estimated retail value');
});

app.intent('ToAdjustMMR', {
  "slots": {
    "miles": "AMAZON.NUMBER",
    "color": "AMAZON.Color",
    "tensdigit": "AMAZON.NUMBER",
    "onesdigit": "AMAZON.NUMBER",
    "region": "LIST_OF_REGIONS" },
  "utterances": [
    "by {1000-90000 by 100|miles} miles",
    "by color {-|color}",
    "by condition {0-5|tensdigit}{point| }{0-9|onesdigit}",
    "by region {-|region}"
  ]
}, function(req, res) {
  res.say('yay to adjust mmr');
});

app.intent('ForAverageMMR', {
  "slots": {
    "VIN": "AMAZON.LITERAL",
    "YEAR": "AMAZON.FOUR_DIGIT_NUMBER",
    "MMS": "AMAZON.LITERAL"
  },
  "utterances": [
    "for a {-|YEAR} {PONTIAC G six V six four DOOR SEDAN|MMS}",
    "for {one G two Z G five five eight seven six four two four nine eight seven zero|VIN}"
  ]
}, function(req, res) {
  res.say('yay for average mmr');
});

module.exports = app;
