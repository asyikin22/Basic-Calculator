# Basic Calculator

**HTML File**
* Create a div with 'id:calculator'
* Within the  div, put an input with 'id:display' to enable user to key in the number into the calculator
* Create a div with 'id:keys'
* Nest 20 buttons elements within key div.
* 'onclick' attributes specifies a javascript function. When the button is clicked, a specific function will be executed

**CSS File**
* You can style the calculator however you like in this file. Go crazy.

**JavaScript File**
* 'const display = document.getElementById("display");' is used to retrieve HTML element. It searches for an element with that specified Id attribute within HTML
* 'appendToDisplay(input)' attaches the input value to the existing value of the display element.
* 'toDelete()' is used to remove the last character from the display, akin to 'delete' or 'backspace' function
* 'clearDisplay()' is used to clear the display by setting its value to an empty string.
* 'calculate() is used to evaluate the expression inputted in the display and display the result.
* 'try...catch' is used to handle potential errors during evaluation. Error message will be displayed accordingly if an error occurs.

  
