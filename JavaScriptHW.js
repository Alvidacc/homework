//question 1; create 4 variables, 2 assigned to numbers & the other 2 as strings, then output console. 
	var mello = 200;
	var bello = 100;
	console.log (mello + bello);

	var k = "love";
	var m = "me";
	console.log (k + m)


//question 2; create multidimentional arrays, then output console. 

	var interests1 = ["sunflowers", "roses", "tulips", "cacti"];
	var interests2 = ["movies", "brownies", "hubby", "cross-fit"];
	var sum = [["sunflowers", "roses", "tulips", "cacti"], ["movies", "brownies", "hubby", "cross-fit"]];
		console.log(sum[1][3]);	
		console.log(sum[0][1]);


//question 3; write scripts that checks if variable is less than 100, then create alert w/ results.
	var s = 50;
	if (s < 100){
		alert('Your variable is less than 100');
	}
	else {
		alert('Your variable was 50 and therefore less than 100')
	}

//question 4; declare function that takes a name as an argument, then tell the user the name they selected.
	function firstName(numberOne){
		console.log(numberOne);
	}

	firstName("John")



//question 5; declare a function depending on which door was entered, user obtains a prize!

function surprise(door){

	if(door===1){
		alert("You've won a trip to Disney World");	
	} else if(door===2){
		alert("You've won a million dollars a day for life!");
	}else if(door===3){
		alert("You've won a celebrity makeover!!");
	}	

}
surprise(1)

surprise(2)

surprise(3)




function enter(door){

	if(door===1){
		alert('you won a car');	
	} else if(door===2){
		alert("won a trip");
	}else if(door===3){
		alert('your are star for the day');
	}	

}
enter(1)









