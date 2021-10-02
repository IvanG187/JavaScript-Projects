// count to 10
function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}
// Instrument printing
var Instruments = ["Guitar","Drums","Piano","Bass","Violin","Trumpet","Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// my Function picture array
function e30_pics() {
    var e30s = [];
    e30s [0] = "drifting";
    e30s [1] = "speeding";
    e30s [2] = "standing still";
    e30s [3] = "cornering";
    document.getElementById("BMW").innerHTML = "In this picture, the E30 is " +
    e30s[0] + ".";
}

// Function Scope
function myFunction() {
    var carName = "BMW";
    document.getElementById("Example").innerHTML = carName;
}

// Const Keyword
function constant_function(){
    const Musical_Instrument = {type:"guitar",brand:"Fender",color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The Cost of the " +
    Musical_Instrument.type + " was " + Musical_Instrument.price;
}

// LET
var X = 82;
document.write(X);
{
    let X = 33
    document.write("<br>" + X);
}
document.write("<br>" + X);
document.write("<br>")
document.write("<br>")
var X = 82;
document.write(X);
{
    var X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);