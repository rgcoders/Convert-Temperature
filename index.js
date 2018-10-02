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

