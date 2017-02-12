$(document).ready(function(){
	var input = [];
	var inputString; 
	var operators = ['/','*','+','-','.'];
	var numbers = [0,1,2,3,4,5,6,7,8,9];

	function getValue(){

	}
	function update(){

	}
	function getTotal(){
		inputString = input.join('');
		$('#numDisplay').html(eval(inputString));
	}
	
	$('button').on("click", function(){
		if(this.id === "one"){
			input.push(1);
			console.log(input);
			$('#numDisplay').append(1);	
		}
		if(this.id === "two"){
			input.push(2);
			console.log(input);
			$('#numDisplay').html(2);	
		}
		if(this.id === "plus"){
			input.push('+');
			console.log(input);
			// $('#numDisplay').html(2);	
		}
		if(this.id === "equals"){
			getTotal();
			// $('#numDisplay').html(2);	
		}
		if(this.id === "clear"){
			input = [];
			$('#numDisplay').html('0');	
		}
		
	});	

});
