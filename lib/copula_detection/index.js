// Generated by CoffeeScript 1.6.3
var adjective, freebase, topic;

freebase = require('freebase');

adjective = "totally";

topic = "first world war";

freebase.sentence(topic, {}, function(sentence) {
  return console.log(sentence.replace(/\W(is|was|will|were|are) (an?|the)\W/, " $1 " + adjective + " $2 "));
});