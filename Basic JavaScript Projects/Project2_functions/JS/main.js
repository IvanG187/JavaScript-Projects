window.alert("Dont Forget to click OK!");

document.write("YOU HAVE TO CLICK THE BUTTON!!!!");

function My_First_Function () { // Defining a function and naming it
    var str = "This text is green!"; //Defining a variable and giving it a sring value
    var result = str.fontcolor("green"); //using the fontcolor method on str variable
    document.getElementById("Green_Text", "p").innerHTML = result; // putting the value of the result into html element with Green_Text id
}

function myFunction() {
    var sentence = "I am Learning";
    sentence += " a lot from this!";
    document.getElementById("Concatencate").innerHTML = sentence;
}