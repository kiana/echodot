var alexa = require('alexa-app');

module.change_code = 1;
var mmr = '<say-as interpret-as="spell-out">MMR</say-as>';

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
    "for vin {one G two Z G five five eight seven six four two four nine eight seven zero|VIN}"
  ]
}, function(req, res) {
  res.say('Do you really want me to read out all those transactions? I don\'t think so.');
});

app.intent('ForHistoricalAverage', {
  "slots": {
    "VIN": "AMAZON.LITERAL",
    "YEAR": "AMAZON.FOUR_DIGIT_NUMBER",
    "MMS": "AMAZON.LITERAL"
  },
  "utterances": [
    "for a {-|YEAR} {PONTIAC G six V six four DOOR SEDAN|MMS}",
    "for vin {one G two Z G five five eight seven six four two four nine eight seven zero|VIN}"
  ]
}, function(req, res) {
  if (req.slot('VIN')) {
    res.say('The historical average for the past 30 days is $1725, average odometer <say-as interpret-as="cardinal">143668</say-as>, 6 months ago is $1875, average odometer <say-as interpret-as="cardinal">136056</say-as>, last year is $2350, odometer <say-as interpret-as="cardinal">136715</say-as> for ' + req.slot('VIN'));
  } else if (req.slot('MMS')){
    res.say('The historical average for the past 30 days is $1725, average odometer <say-as interpret-as="cardinal">143668</say-as>, 6 months ago is $1875, average odometer <say-as interpret-as="cardinal">136056</say-as>, last year is $2350, odometer <say-as interpret-as="cardinal">136715</say-as> for ' + req.slot('YEAR') + req.slot('MMS'));
  } else {
    res.say('Unable to retrieve historical average at this time.');
  }
});

app.intent('ForProjectedAverage', {
  "slots": {
    "VIN": "AMAZON.LITERAL",
    "YEAR": "AMAZON.FOUR_DIGIT_NUMBER",
    "MMS": "AMAZON.LITERAL"
  },
  "utterances": [
    "for a {-|YEAR} {PONTIAC G six V six four DOOR SEDAN|MMS}",
    "for vin {one G two Z G five five eight seven six four two four nine eight seven zero|VIN}"
  ]
}, function(req, res) {
  if (req.slot('VIN')) {
    res.say('The projected average next month is $1750 for ' + req.slot('VIN'));
  } else if (req.slot('MMS')){
    res.say('The projected average next month is $1750 for ' + req.slot('YEAR') + req.slot('MMS'));
  } else {
    res.say('Unable to retrieve projected average at this time.');
  }
});

app.intent('ForEstimatedRetailValue', {
  "slots": {
    "VIN": "AMAZON.LITERAL",
    "YEAR": "AMAZON.FOUR_DIGIT_NUMBER",
    "MMS": "AMAZON.LITERAL"
  },
  "utterances": [
    "for a {-|YEAR} {PONTIAC G six V six four DOOR SEDAN|MMS}",
    "for vin {one G two Z G five five eight seven six four two four nine eight seven zero|VIN}"
  ]
}, function(req, res) {
  if (req.slot('VIN')) {
    res.say('Let\'s see<break time="1s" /> Today the estimated retail value for ' + req.slot('VIN') + ' is $5,175, with a typical range of $4,250 and $6,100');
  } else if (req.slot('MMS')){
    res.say('Let\'s see<break time="1s" /> Today the estimated retail value for ' + req.slot('YEAR') + req.slot('MMS') + ' is $5,175, with a typical range of $4,250 and $6,100');
  } else {
    res.say('Unable to retrieve estimated retail value at this time.');
  }
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
  if (req.slot('region')) {
    res.say('Checking the ' + req.slot('region') + ' region, the Adjusted ' +mmr+ ' drops $20 to $1750.');
  }

  if (req.slot('color')) {
    res.say('Checking the color ' + req.slot('color')+ ', the Adjusted ' +mmr+ ' drops $90 to $1675.')
  }

  if (req.slot('condition')) {
    res.say('Checking for condition ' + req.slot('condition') + ', the adjusted ' + mmr + ' increases $350 to $2,125.')
  }

  if (req.slot('miles')) {
    res.say('With ' + req.slot('miles') + ' miles, the adjusted ' + mmr + ' increases $1560 to $3325. You should probably buy that car.');
  }
});

app.intent('ForAverageMMR', {
  "slots": {
    "VIN": "AMAZON.LITERAL",
    "YEAR": "AMAZON.FOUR_DIGIT_NUMBER",
    "MMS": "AMAZON.LITERAL"
  },
  "utterances": [
    "for a {-|YEAR} {PONTIAC G six V six four DOOR SEDAN|MMS}",
    "for vin {one G two Z G five five eight seven six four two four nine eight seven zero|VIN}"
  ]
}, function(req, res) {
  if (req.slot('VIN')) {
    res.say('Let\'s see<break time="1s" /> Today the average <say-as interpret-as="spell-out">MMR</say-as> for ' + req.slot('VIN') + 'is $1,775, with average odometer of 143,668, average condition of 2 point zero, and a typical range between $1,000 and $2,5550');
  } else if (req.slot('MMS')){
    res.say('Let\'s see<break time="1s" /> Today the average <say-as interpret-as="spell-out">MMR</say-as> for ' + req.slot('YEAR') + req.slot('MMS') + 'is $1,775, with average odometer of 143,668, average condition of 2 point zero, and a typical range between $1,000 and $2,5550');
  } else {
    res.say('Unable to retrieve Average <say-as interpret-as="spell-out">MMR</say-as> at this time.');
  }
});

module.exports = app;
