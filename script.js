$(document).ready(function(){
	var input = [];
	var operands = [];

	var operators = ['/','*','+','-'];
	var decimal = ['.'];
	var operatorSequence = [];
	var numbers = [0,1,2,3,4,5,6,7,8,9];
	var count = 0;
	
	function update(){
		$('#process').html(input);
		count++;
		console.log(input, operatorSequence, operands);
	}

	function getTotal(){	
		// operands = [$('#numDisplay').text(),input[input.length - 2],input[input.length-1]];
		$('#numDisplay').html(eval(input.join('')));
	}
	
	function operate(){ //calls getTotal when multiple operator button pressed after the first time
		if(operatorSequence[0] != "=" && count != 0){
			input.push($('#numDisplay').text());
		}
		if(findOne(input, operators) === true){
				getTotal();
			}
		count = -1; //update makes this 0, fulfilling reset condition to replace html
		// input.push(this.id.bind());  how to bind this to buttons?
		
	}
	function reset(){ //if  operator is lastindex, replace numdisplay with input
		if(input.length === 0 || operators.indexOf(input[input.length-1]) != -1){
			if(count === 0){
				$('#numDisplay').html('');
			}
		}
	}
	function findOne(haystack, needle){
		return needle.some(function(v){
			return haystack.indexOf(v) >= 0;
		});
	}	
	$('button').on("click", function(){ //when any button is clicked
//numbers
		if(this.id === "decimal"){		
			$('#numDisplay').append(".");	
		}
		if(this.id === "zero"){
			reset();			
			$('#numDisplay').append(0);	
		}
		if(this.id === "one"){
			reset();			
			$('#numDisplay').append(1);	
		}
		if(this.id === "two"){
			reset();
			$('#numDisplay').append(2);	
		}
		if(this.id === "three"){
			reset();			
			$('#numDisplay').append(3);	
		}
		if(this.id === "four"){		
			reset();	
			$('#numDisplay').append(4);	
		}
		if(this.id === "five"){
			reset();
			$('#numDisplay').append(5);	
		}
		if(this.id === "six"){		
			reset();	
			$('#numDisplay').append(6);	
		}
		if(this.id === "seven"){		
			reset();	
			$('#numDisplay').append(7);	
		}
		if(this.id === "eight"){
			reset();
			$('#numDisplay').append(8);	
		}
		if(this.id === "nine"){
			reset();
			$('#numDisplay').append(9);	
		}
//operations: code seems redundant, needs bind
		if(this.id === "="){
			input.push($('#numDisplay').text());
			getTotal();
			operatorSequence = [];		
			operatorSequence.push(this.id);	
		}			
		if(this.id === "/"){
			operate();
			input.push(this.id); 						
			operatorSequence.push(this.id);
		}
		if(this.id === "*"){
			operate();
			input.push(this.id); 						
			operatorSequence.push(this.id);
		}
		if(this.id === "+"){
			operate();
			input.push(this.id); 		
			operatorSequence.push(this.id);
		}
		if(this.id === "-"){
			operate();
			input.push(this.id); 			
			operatorSequence.push(this.id);
		}
		if(this.id === "clear"){
			input = [];
			operatorSequence = [];
			operands = [];
			$('#numDisplay').html('0');	
			count = -1; //update will make this zero again, reset condition fulfilled
		}
		if(this.id === "clearEntry"){
			input.pop();
			$('#numDisplay').html('0');
			count = -1;
		}
		update();
	});	
});


//operators.indexOf(this.id) ask about this, scope. When function is placed, will it get the id of where itis placed?