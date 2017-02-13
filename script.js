$(document).ready(function(){
	var input = [];
	var inputString; 
	var operators = ['/','*','+','-'];
	var decimal = ['.'];
	var numbers = [0,1,2,3,4,5,6,7,8,9];

	function getValue(){

	}
	function update(){
		if(operators.indexOf(input[input.length-1]) != -1 ){				
			$('#numDisplay').html('');			
		}
	}
	function getTotal(){
		inputString = input.join('');
		$('#numDisplay').html(eval(inputString));
	}
	function findOne(haystack, needle){
		return needle.some(function(v){
			return haystack.indexOf(v) >= 0;
		});
	}
	function operate(){ //calls gettotal when multiple operators are used
		if(findOne(input,operators) === true){
				getTotal();
				console.log(findOne(input,operators));
			}
	}
	
	$('button').on("click", function(){ //when any button is clicked
		update(); // should clear initial '0' on numDisplay ??
//numbers
		if(this.id === "decimal"){		
			input.push(".");
			console.log(input);	
			$('#numDisplay').append(".");	
		}
		if(this.id === "zero"){		
			input.push(0);
			console.log(input);	
			$('#numDisplay').append(0);	
		}
		if(this.id === "one"){		
			input.push(1);
			console.log(input);	
			$('#numDisplay').append(1);	
		}
		if(this.id === "two"){
			input.push(2);
			console.log(input);
			$('#numDisplay').append(2);	
		}
		if(this.id === "three"){		
			input.push(3);
			console.log(input);	
			$('#numDisplay').append(3);	
		}
		if(this.id === "four"){		
			input.push(4);
			console.log(input);	
			$('#numDisplay').append(4);	
		}
		if(this.id === "five"){
			input.push(5);
			console.log(input);
			$('#numDisplay').append(5);	
		}
		if(this.id === "six"){		
			input.push(6);
			console.log(input);	
			$('#numDisplay').append(6);	
		}
		if(this.id === "seven"){		
			input.push(7);
			console.log(input);	
			$('#numDisplay').append(7);	
		}
		if(this.id === "eight"){
			input.push(8);
			console.log(input);
			$('#numDisplay').append(8);	
		}
		if(this.id === "nine"){
			input.push(9);
			console.log(input);
			$('#numDisplay').append(9);	
		}
//operations
		if(this.id === "/"){
			operate();
			input.push('/');			
		}
		if(this.id === "*"){
			operate();
			input.push('*');			
		}
		if(this.id === "+"){
			operate();
			input.push('+');			
		}
		if(this.id === "-"){
			operate();
			input.push('-');			
		}
		if(this.id === "equals"){
			getTotal();			
		}			
		if(this.id === "clear"){
			input = [];
			$('#numDisplay').html('0');	
		}
		
	});	

});


//operators.indexOf(this.id) ask about this, scope. When function is placed, will it get the id of where itis placed?