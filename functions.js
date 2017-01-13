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
isEven(21);
isEven(99);

function isEvenShort(num){
	return num % 2 === 0; //this will return true if the result is true
}

isEvenShort(8);
isEvenShort(38);
isEvenShort(21);
isEvenShort(99);


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

function factorialShorter(num){
	var result =1;
	for(var a = 2; i <= num; a++){
		result *= a;
	}
	return result;
}

factorialShort(5);
factorialShort(20);
factorialShort(0);


function kebabToSanke(word){
	var newWord = word.replace(/-/g , "_");
	return newWord;

	// var newWord;
	// for(var a = 0; a < word.length; a++){
	// 	if(word[a] = "-"){
	// 		newWord[a] = "_";
	// 		newWord+=newWord[a];
	// 	}
	// 	else{
	// 		newWord[a] = word[a];
	// 		newWord+=newWord[a];
	// 	}

	// }
	// console.log(newWord);
}

kebabToSanke("dash-dog");
kebabToSanke("doggie");


