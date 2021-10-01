
function my_Function() {
    document.getElementById("Test").innerHTML = isNaN('007');
}

//document.write(2E310);
//document.write(-2E310);

//document.write(10 > 2);     True
//document.write(10 < 2);     false

console.log(2 + 2);

document.write(10 == 10); // True
document.write(3 == 11);  // false
document.write(5 > 2 && 10 > 4); // true
document.write(5 > 10 && 10 > 4); // false
document.write(5 > 10 || 10 > 4); // true
document.write(5 > 10 || 10 > 20); // false

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}

function not1_Function() {
    document.getElementById("Not1").innerHTML = !(5 > 10);
}