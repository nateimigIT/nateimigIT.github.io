var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


// set css styles real good
function setGredient(){
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value
	+ ")";
};

//do not call the functoin with the (), simply name the function
//to call when event is triggered
color1.addEventListener("input", setGredient);
color2.addEventListener("input", setGredient);

