const arith = function(a, b, c) {
	return a + b - c;
};




const a = function() {
	return 'Hello';
};




const b = function(a, b, c) {
	console.log(a + b + c);
};




const fullName = function(FName, LName) {
	return FName + " " + LName;
};




const word = function(string1, string2, string3) {
	if (string1.length > string2.length && string1.length > string3.length)
		return string1; 
	
	if (string2.length > string1.length && string2.length > string3.length)
		return string2;
	
	if (string3.length > string1.length && string3.length > string2.length)
		return string3;
};





const numbers = function(num1, num2) {
	if (num1 === num2) {
		return	0;
	}
	
	if (num1 > num2) {
		return 1;
	}
	
	else {
		return -1;
	}
};




const isTruethy = function(arg1, arg2, arg3) {
	if (arg1) {
		return arg1;
	}
	if (arg2) {
		return arg2;
	}
	if (arg3) {
		return arg3;
	}
};


