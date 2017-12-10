var Twit = require('twit');
var config = require('./config.js');





var T = new Twit(config);
T.get('search/tweets' , {q : 'trump' , count : 100}, (err, data , response) => {
    var tweets = data.statuses;
    for (var i= 0 ; i<tweets.length ; i++){
        
        console.log("************************************************");
        console.log(tweets[i].text);
        console.log("************************************************");

    }
    console.log('done');
})
