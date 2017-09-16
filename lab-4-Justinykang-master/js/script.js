/* Calculates a mathematical expression, like 5 * 4 - 3 
Returns the result */ 
function calculateExpression(expression) {
	var result = eval('(' + expression + ')');
	console.log(expression + " = " + result);
	return result;
}

var f = document.getElementById("calculatorForm");
f.addEventListener("submit", function(event) {
	var e = f.elements.namedItem("expression").value;
	var r = document.getElementById("calculatorResult");
	var result = calculateExpression(e);

	r.classList.remove("greaterThan10000", "greaterThan1000", "greaterThan100");
	if (result > 10000) {
		r.classList.add("greaterThan10000");
	} else if (result > 1000) {
		r.classList.add("greaterThan1000");
	} else if (result > 100) {
		r.classList.add("greaterThan100");
	}
	r.innerHTML = result;
	event.preventDefault();
});

// document.getElementById("calculatorForm").onsubmit = function() {calculateExpression(expression)};

