//this file was created in the command line

function sayHi(){
	console.log("Hello!");
	console.log("Goodbye!");
}

sayHi();

sayHi //this will only refer to the function 

function square(num){
	console.log(num * num);
}

square(5);
square(10);

function sayHello(name){
	console.log(`Hello, ${name}`);
}

sayHello("Dave");

function area (length, width){
	console.log(length*width);
}

area(43, 40);

function isEven(num) {
	if(num %2 === 0){
		return true;
	}
	else{
		return false;
	}
}

isEven(8);
isEven(38);

function factorial(num){
	var result = num
	if(num === 0){
		console.log(1)
		console.log("/////////////////");
		return 1;
	}
	var result = num;
	for(var counter = num-1; counter > 0; counter--){
		result*=counter;
	}
	console.log(result);
	console.log("/////////////////");
	return result;
}

factorial(5);
factorial(20);
factorial(0);


