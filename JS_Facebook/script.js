//working as of Mon 3/19
//(mostly) ripped from: https://www.udemy.com/the-complete-web-developer-in-2018/learn/v4/t/lecture/8679894?start=0
//understood as of: 


var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
//selects all LIs
var listItem = document.querySelectorAll("li");
var deleteButton;


//Return Length of input
function inputLength(){
	return input.value.length;
};

//Create delete buttons and append it to their parents(li)
function createDeleteButton(parent){
	//Create element button
	var button = document.createElement("button");
	// Create and append text inside button
	button.appendChild(document.createTextNode("X"));
	// Give class=delete to buttons - Its's going to be used to select them in the future
	button.className = "delete";
	// append or insert the button to the parent element(li)
	parent.appendChild(button);
}

//Toggle class=done when you invoke the function - use "this" to toggle only the one you selected
function toggleDoneClass(){
	this.classList.toggle("done");
}

//Create the "li" with everything it needs inside of it(text ,button, class)
function createListElement(){
	//Create "li"
	var li = document.createElement("li");
		// Create text for the li according to what you put in the input
		li.appendChild(document.createTextNode(input.value));
		// Append or insert the new li to the ul
		ul.appendChild(li);
		//Create the delete button calling the funtion with the new li
		createDeleteButton(li);
		//Updates the selector to the new number of buttons with class=delete
		deleteButton = document.querySelectorAll(".delete");
		//Applies the functionality to remove the li
		updateDeleteButtons();
		//add the click listener to toggle class=done
		li.addEventListener("click", toggleDoneClass);
		//Makes the input go back to blank when this function is done
		input.value = "";
};

function addListAfterClick(){
	if (inputLength() > 0){
		createListElement();
	}
};

function addListAfterKeypress(e){
	if (inputLength() > 0 && e.keyCode === 13){
		createListElement();
	}
};

function updateDeleteButtons(){
	for(var i = 0; i < deleteButton.length; i++){
		deleteButton[i].addEventListener("click", function(){
			this.parentNode.remove();
		});
	}
};

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//INIT
//Add the event listener and create the delete buttons to the initial LIs
for (var i = 0; i < listItem.length; i++){
	listItem[i].addEventListener("click", toggleDoneClass);
	createDeleteButton(listItem[i]);
};
//Selector of initial buttons with class=delete
deleteButton = document.querySelectorAll(".done");
//It gives the buttons with class the function to remove the li(todo)
updateDeleteButtons();


// var database = [
// 	{
// 		username: "Nate",
// 		password: "gransecreto"
// 	},
// 	{
// 		username: "Sally",
// 		password: "1234"
// 	},
// 	{
// 		username: "Johanna",
// 		password: "lesbo"
// 	},
// 	{
// 		username: "Prudence",
// 		password: "deerinheadlights"
// 	},
// ]

// var newsfeed = [
// 	{
// 		username: "Nate",
// 		timeline: "My fav color is green."
// 	},
// 	{
// 		username: "Jeff",
// 		timeline: "My fav color is blue bitch."
// 	},
// 	{
// 		username: "Scotty",
// 		timeline: "Bitches..."
// 	}
// ];

// function isUserValid(usr, pw){
// 	for (var i = 0; i < database.length; i++){
// 		if(database[i].username === usr && 
// 			database[i].password === pw){
// 			return true;
// 		}
// 	}
// 	return false;
// };

// function signIn(usr, pw)
// {
	
// 	if (isUserValid(usr,pw)){
// 		console.log(newsfeed);
// 	}
// 	else
// 	{
// 		alert("Sorry, wrong username and password!");
// 	}
// };

// //begin execution on page load
// var userNamePrompt = prompt("What is your username?");
// var passwordPrompt = prompt("What is your password?"); 
// signIn(userNamePrompt, passwordPrompt);