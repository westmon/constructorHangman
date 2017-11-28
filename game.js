//Random word is selected and exported
var wordsToGuess = ["Hawaii", "New York", "California", "Oregon", "Illinois", "Utah", "Arizona", "Louisiana", "Washington", "United Kindgom"];
var randoIndex = Math.floor(Math.random() * wordsToGuess.length);
var randoWord = wordsToGuess[randoIndex];
exports.randoWord = randoWord;