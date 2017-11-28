

var letter = require("./letter.js");
var guessWord = require("./game.js");

console.log(guessWord);
 
//our constructor for the word. An empty array to hold the letters.
var WordSetup = function (word){

    this.letArray = [];
// Push export word into letArray
    this.addWord = function(){
     var newLetter = this.letArray.push(guessWord);
     
    }

};

// I am stuck here, and the lack of code doesn't reflect the amount of time I've put into it, or the amount of code that I had done, but then deleted and replaced.

// I'm trying to get construct a word using the letter constructor and my guessWord but I'm not sure how to. 

// My psuedocode steps for this.

// Push to guessword to letArray, then split it.

//Apply letter constructor to let Array, so that the letters show as "_" or a letter.

//-- Code for main.js ---

//Run fuction to display the word in as "_" characters.

//Use inquirer to prompt the user for their guess.

//Use a for loop to check if the user guess matches the letters in the array, and if it does change to letter.

//have a counter that tracks the guesses and add guess.

//rerun the function for 12 guesses.

// if the user guesses the work, prompt user to ask if they want to play again.

//if they run out of guesses use inquirer message "Out of guesses" and "would you like to play again?"






