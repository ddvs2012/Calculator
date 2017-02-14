$(document).ready(function(){
	var inputString = ''; 
	var input = [];

	var operators = ['/','*','+','-','='];
	var decimal = ['.'];
	var operatorSequence = [];
	var numbers = [0,1,2,3,4,5,6,7,8,9];
	var count = 0;

	
	function update(){
		$('#process').html(inputString);
		console.log(input, operatorSequence);
	}

	function getTotal(){
		$('#numDisplay').html(eval(input.join(''))); //change to input
	}
	function findOne(haystack, needle){
		return needle.some(function(v){
			return haystack.indexOf(v) >= 0;
		});
	}
	function operate(){ //calls gettotal when multiple operator button pressed after the first time
		if(operatorSequence != []){
			input.push($('#numDisplay').text());
		}
		// input.push(this.id.bind());  how to bind this to buttons?
		if(findOne(inputString, operators) === true){
				getTotal();
			}
	}
	function reset(){ //if inputstring empty or operator is lastindex, replace numdisplay with input
		if(inputString === '' || operators.indexOf(inputString[inputString.length-1]) != -1){
				$('#numDisplay').html('');
			}
	}

	
	$('button').on("click", function(){ //when any button is clicked
//numbers
		if(this.id === "decimal"){		
			inputString += ".";				
			$('#numDisplay').append(".");	
		}
		if(this.id === "zero"){
			reset();		
			inputString += "0";	
			$('#numDisplay').append(0);	
		}
		if(this.id === "one"){
			reset();		
			inputString += "1";	
			$('#numDisplay').append(1);	
		}
		if(this.id === "two"){
			reset();
			inputString += "2";
			$('#numDisplay').append(2);	
		}
		if(this.id === "three"){
			reset();		
			inputString += "3";	
			$('#numDisplay').append(3);	
		}
		if(this.id === "four"){		
			reset();
			inputString += "4";	
			$('#numDisplay').append(4);	
		}
		if(this.id === "five"){
			reset();
			inputString += "5";
			$('#numDisplay').append(5);	
		}
		if(this.id === "six"){		
			reset();
			inputString += "6";	
			$('#numDisplay').append(6);	
		}
		if(this.id === "seven"){		
			reset();
			inputString += "7";	
			$('#numDisplay').append(7);	
		}
		if(this.id === "eight"){
			reset();
			inputString += "8";
			$('#numDisplay').append(8);	
		}
		if(this.id === "nine"){
			reset();
			inputString += "9";
			$('#numDisplay').append(9);	
		}
//operations: code seems redundant, needs bind
		if(this.id === "/"){
			operate();
			input.push(this.id); 
			inputString += "/";			
			operatorSequence.push(this.id);
		}
		if(this.id === "*"){
			operate();
			input.push(this.id); 
			inputString += "*";			
			operatorSequence.push(this.id);
		}
		if(this.id === "+"){
			operate();
			input.push(this.id); 
			inputString += "+";			
			operatorSequence.push(this.id);
		}
		if(this.id === "-"){
			operate();
			input.push(this.id); 
			inputString += "-";			
			operatorSequence.push(this.id);
		}
		if(this.id === "="){
			operate();
			getTotal();		
			operatorSequence = [];	
		}			
		if(this.id === "clear"){
			inputString = '';
			input = [];
			$('#numDisplay').html('0');	
		}
		if(this.id === "clearEntry"){
			input.pop();
			inputString = input.join('');
			$('#numDisplay').html('0');
		}
		update();
	});	
});


//operators.indexOf(this.id) ask about this, scope. When function is placed, will it get the id of where itis placed?