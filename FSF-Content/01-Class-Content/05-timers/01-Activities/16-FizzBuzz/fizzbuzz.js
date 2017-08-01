$(document).ready(function() {
	for (var i = 1; i <= 100; i++) {
		debugger;
		if(i % 3 == 0) {
			if(i % 5 == 0) {
				addOutputToList("FizzBuzz");
			} else {
				addOutputToList("Fizz");
			}
		} else if(i % 5 == 0) {
			addOutputToList("Buzz");
		} else {
			addOutputToList(i);
		}
	}
	function addOutputToList(output) {
		var $listAddition = $("<li>");
		$listAddition.text(output);
		$("#fizzbuzz-list").append($listAddition);
	}
}
);