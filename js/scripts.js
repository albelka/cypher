var sentence = prompt("Please enter a sentence:");
var last = /\w(?=([\W]*$))/;

alert(sentence);

var firstLast = function(input){
  var firstCap = input.charAt().toUpperCase();
  var positionLast = input.search(last);
  var lastLetter = (input.charAt(positionLast));
  var lastCap = lastLetter.toUpperCase();
  return firstCap + lastCap;
};

alert(firstLast(sentence));

var lastFirst = function(input){
  var firstCap = input.charAt().toUpperCase();
  var positionLast = input.search(last);
  var lastLetter = (input.charAt(positionLast));
  var lastCap = lastLetter.toUpperCase();
  return lastCap + firstCap;
};

alert(lastFirst(sentence));

var bothWays = function (sentence){

  alert(sentence + lastFirst(firstLast(sentence)));
};

bothWays(sentence);

var counter = function(sentence){
  var sentenceLength = sentence.length;
  var halve = sentenceLength / 2;
  var round = Math.floor(halve);
  var newBeginning = sentence.charAt(round);
  alert(newBeginning + sentence + lastFirst(firstLast(sentence)));
//  alert(floor(charAt(sentence.length / 2)));

};
counter(sentence);
