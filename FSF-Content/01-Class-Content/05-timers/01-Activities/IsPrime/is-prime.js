$(document).ready(function() {
	const MIN_PRIME_NUM = 2;
	var numberToCheck = prompt("Enter a number to see if it is prime...");
	// if(Number.isInteger(numberToCheck)) {
		if(isPrime(numberToCheck)) {
			alert(numberToCheck + " IS PRIME!!!");
		} else {
			alert(numberToCheck + " IS NOT!");
		}
	// } else {
	// 	alert("Please enter an integer to see if it is prime...");
	// }

	function isPrime(number) {
		var isPrime = true;
		var sqrtOfNum = Math.sqrt(number);
		var maxToCheck = Math.floor(sqrtOfNum);
		for (var i = MIN_PRIME_NUM; i <= maxToCheck; i++) {
			if(number % i === 0) {
				isPrime = false;
				break;
			}
		}
		return isPrime;
	};
});
