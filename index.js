// Global Variables
var farenheit = document.querySelector('#farenheit');
var celcius = document.querySelector('#celcius');


// Convert temp
var convert = function (temp, toFarenheit) {
	if (toFarenheit) {
		return Math.round((parseInt(temp, 10) * 9 / 5) + 32);
	} else {
		return Math.round((parseInt(temp, 10) - 32) * 5 / 9);
	}
};

// Listen for input changes
document.addEventListener('input', function (event) {
	if (event.target.value.length < 1) return;
	if (event.target.id === 'farenheit') {
		celcius.value = convert(event.target.value);
	} else {
		farenheit.value = convert(event.target.value, true);
	}
}, false);

