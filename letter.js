
var letter = function(letter) {
	this.letter = letter;
	this.show = false;

	
	this.printInfo = function(){
		if (this.value == " ") {
		this.show = true;
		return " ";
		}	 
		if (this.show = false){
			return this.value;
		}
		else {
			return "_ ";
		}
	}	
};

