
var letter = function(letter) {
	this.letter = letter;
	this.show = false;

	
	this.printInfo = function(){
		if (this.letter == " ") {
		this.show = true;
		return " ";
		}	 
		if (this.show = false){
			return this.letter;
		}
		else {
			return "_ ";
		}
	}	
};

exports.letter = letter;
