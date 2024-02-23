//CALCULATION

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

//remove the last character for delete button.

function toDelete() {
    display.value = display.value.toString().slice(0,-1);
}

function clearDisplay() {
    display.value= " ";
}

//error handling

function calculate() {
    try{
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error! Try again, babe"
    }
    display.value = eval(display.value);
}

