
function Ride_Function() {
    var Age, Can_vote;
    Height = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are to young to vote":"Congratz you are old enough to vote!";
    document.getElementById("Vote").innerHTML = Can_vote + ".";
}

function Vehicle(Make,Model,Year,Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle ("Dodge","Viper", 2020, "Red");
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019,"White and Black");
var Erik = new Vehicle ("Ford","Pinto",1971,"Mustard")
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik Drives a " +Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year
}
var X = 10;
var Y = "Charlie";

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}