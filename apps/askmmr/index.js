var alexa = require('alexa-app');

module.change_code = 1;

var app = new alexa.app('askmmr');
app.launch(function(req, res) {
  res.say("Ask MMR launching");
});

app.intent('ForTransactions', {
  "slots": {},
  "utterances": [""]
}, function(req, res) {
  res.say('');
});

app.intent('ForHistoricalAverage', {
  "slots": {},
  "utterances": [""]
}, function(req, res) {
  res.say('');
});

app.intent('ForProjectedAverage', {
  "slots": {},
  "utterances": [""]
}, function(req, res) {
  res.say('');
});

app.intent('ForEstimatedRetailValue', {
  "slots": {},
  "utterances": [""]
}, function(req, res) {
  res.say('');
});

app.intent('ToAdjustMMR', {
  "slots": {},
  "utterances": [""]
}, function(req, res) {
  res.say('');
});

app.intent('ForAverageMMR', {
  "slots": {},
  "utterances": [""]
}, function(req, res) {
  res.say('');
});

module.exports = app;
