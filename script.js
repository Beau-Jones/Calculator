/* To refactor: Loop through buttons to add event listeners,
loop through functions for corresponding button */

/* Maybe put functions in an array
and use array_of_function[i]() */




/* Adding event listeners to all the calculator buttons */

const clearbtn = document.getElementById("clear");
clearbtn.addEventListener("click", clearScreen);

const dividebtn = document.getElementById("divide");
dividebtn.addEventListener("click", divide);

const multiplybtn = document.getElementById("multiply");
multiplybtn.addEventListener("click", multiply);

const subtractbtn = document.getElementById("subtract");
subtractbtn.addEventListener("click", subtract);

const onebtn = document.getElementById("one");
onebtn.addEventListener("click", one);

const twobtn = document.getElementById("two");
twobtn.addEventListener("click", two);

const threebtn = document.getElementById("three");
threebtn.addEventListener("click", three);

const plusbtn = document.getElementById("plus");
plusbtn.addEventListener("click", plus);

const fourbtn = document.getElementById("four");
fourbtn.addEventListener("click", four);

const fivebtn = document.getElementById("five");
fivebtn.addEventListener("click", five);

const sixbtn = document.getElementById("six");
sixbtn.addEventListener("click", six);

const sevenbtn = document.getElementById("seven");
sevenbtn.addEventListener("click", seven);

const eightbtn = document.getElementById("eight");
eightbtn.addEventListener("click", eight);

const ninebtn = document.getElementById("nine");
ninebtn.addEventListener("click", nine);

const zerobtn = document.getElementById("zero");
zerobtn.addEventListener("click", zero);

const decimalbtn = document.getElementById("decimal");
decimalbtn.addEventListener("click", decimal);

const equalsbtn = document.getElementById("equals");
equalsbtn.addEventListener("click", equals);


/* Declaring functions for calculator buttons,
adding label to display for numbers and operators,
equal sign evaluating display and replacing display */


function clearScreen() {
    document.getElementById("display").innerHTML = "";
}

function divide() {
    document.getElementById("display").innerHTML += "/";
}

function multiply() {
    document.getElementById("display").innerHTML += "*";
}

function subtract() {
    document.getElementById("display").innerHTML += "-";
}

function one() {
    document.getElementById("display").innerHTML += "1";
}

function two() {
    document.getElementById("display").innerHTML += "2";
}

function three() {
    document.getElementById("display").innerHTML += "3";
}

function plus() {
    document.getElementById("display").innerHTML += "+";
}

function four() {
    document.getElementById("display").innerHTML += "4";
}

function five() {
    document.getElementById("display").innerHTML += "5";
}

function six() {
    document.getElementById("display").innerHTML += "6";
}

function seven() {
    document.getElementById("display").innerHTML += "7";
}

function eight() {
    document.getElementById("display").innerHTML += "8";
}

function nine() {
    document.getElementById("display").innerHTML += "9";
}

function zero() {
    document.getElementById("display").innerHTML += "0";
}

function decimal() {
    document.getElementById("display").innerHTML += ".";
}

function equals() {
    try {
        document.getElementById("display").innerHTML = eval(document.getElementById("display").innerHTML); 
    } catch (e) {
        if (e instanceof SyntaxError) {
            document.getElementById("display").innerHTML = "ERR";
        }
    }
}

