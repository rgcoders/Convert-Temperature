Key Concepts

*** Events ***

addEventListener()
attaches an event handler to the specified element.

element.addEventListener(event, function, useCapture)

Syntax
document.addEventListener (event, function() {
}, useCapture);


1) Event
Required. A String that specifies the name of the event.

Note: 
- Do not use the "on" prefix. 
- For example, use "click" instead of "onclick".
- For a list of all HTML DOM events, see:
https://www.w3schools.com/jsref/dom_obj_event.asp


2) function	
Required. Specifies the function to run when the event occurs.


3) useCapture
Optional. A Boolean value that specifies whether the event should be executed in the capturing or in the bubbling phase. 

Possible values:
true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase

HTML DOM Event
Input	
The input event occurs when an element gets user input

*** Event Values ***

event.target
A reference to the object that triggered the event.

event.target.value 
represents the event's current value.

event.target.id 
represents the event's #id


*** Math ***

Math.round()
Round a number to the nearest integer:

parseInt()
The parseInt() function parses a string and returns an integer.
