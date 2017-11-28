//Check the letters guessed versus the random word selected
var letterCons = require("./letter.js");
var guessWord = require("./game.js");
 
//our constructor for the word. An empty array to hold the letters.
var WordSetup = function (word){

    this.letArray = [];
// Push export word into letArray
    this.addWord = function(){
      for (var i = 0; i < this.letArray; i++) {
        var newLetter = new Letter(this.word[i]);
        this.letters
      }
      
    }

};
console.log(addWord);
