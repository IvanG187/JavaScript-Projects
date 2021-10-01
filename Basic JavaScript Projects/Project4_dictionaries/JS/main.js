
function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;

    typeof str;
}

//Words and numbers // 
document.write(typeof "Word");
document.write(typeof  3);
document.write("10" + 5);