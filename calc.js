let numField1 = document.getElementById("numField1");
let numField2 = document.getElementById("numField2");
let resultField = document.getElementById("resultField");
let form = document.getElementById("xIsWhatPercentOfY");

form.addEventListener("submit", function (event) {
	if (!numField1.value || !numField2.value) {
		alert("Please enter values in the fields");
	} else {
		var x = parseFloat(numField1.value);
		var y = parseFloat(numField2.value);

		var result = (x / y) * 100;

		resultField.innerText = "Answer: " + result + "%";
		event.preventDefault();
	}
});
