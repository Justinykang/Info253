/* return the largest of the two numbers */
function getMaximum(num1, num2) {
	return Math.max(num1, num2);
}

/* return n!, which is for example 4! = 4 * 3 * 2 * 1 */
function getFactorial(n) {
	result = 1
	while (n > 0) {
		result *= n;
		n--;
	}
	return result;
}

/* which returns a student object with the properties: 
name (string), id (number), and grades (an array) */
function createStudent(name, id, grades) {
	var student = {name:name, id:id, grades:grades};
	return student;
}

/************************************************************************/

/* Check getMaximum */
var val1 = parseInt(prompt("Enter value 1"));
var val2 = parseInt(prompt("Enter value 2"));
alert("The maximum of " + val1 + " and " + val2 + " is " + getMaximum(val1, val2));

/* Check getFactorial */
var n = parseInt(prompt("Enter a number"));
alert("The factorial of " + n + " is " + getFactorial(n))

/* Check createStudent */
var name = prompt("Enter student name");
var id = parseInt(prompt("Enter student id"));
var grades = [];
var answer = ""
while(answer != "STOP") {
	answer = prompt("Enter a grade (enter STOP to stop)");
	grades.push(answer);
}
student = createStudent(name, id, grades);
alert("Student created! " + JSON.stringify(student, null, 4));