//Random word is selected and exported
var wordsToGuess = ["Hawaii", "New York", "California", "Oregon", "Illinois", "Utah", "Arizona", "Louisiana", "Washington", "United Kindgom"];
var Index = Math.floor(Math.random() * wordsToGuess.length);
var guessWord = wordsToGuess[Index];
exports = guessWord;