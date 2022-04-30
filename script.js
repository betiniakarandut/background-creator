var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2"); 
var css = document.querySelector("h3");
var body = document.getElementById("gradient");


function backgroundcolor(){
	body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
	css.textContent = body.style.background; 
}
color1.addEventListener("input", backgroundcolor);
color2.addEventListener("input", backgroundcolor);

// var number = prompt("enter a number from 1 to 10");

// function boardgame(){
// 	 return number == 3 ? alert("correct") : alert("wrong you noob");

// }

// boardgame();	

// alert("treasure hunt")
// alert("type in valid directions")
// alert("directions are forward, back, left and right")


// var treasurehunt =[
// 	{
// 		input_1: "right"
// 	},
// 	{
// 		input_2: "left"
// 	},
// 	{
// 		input_3: "forward"
// 	},
// 	{
// 		input_4: "back"
// 	}
// ]
// function game(){
// 	var user_input = prompt("enter a direction");
// 	for (var i=0; i < treasurehunt.length; i++){ 
// 		switch(user_input){
// 			case user_input === treasurehunt[i].input_1 :
// 				alert("you encountered a monster, try again");
// 			break;

// 			case user_input === treasurehunt[i].input_2 :
// 				alert("Wasted!!!, you were killed by a bear, try again");
// 			break;
// 			case user_input === treasurehunt[i].input_3 :
// 				alert("you fell off a cliff, try again");
// 			break;
// 			case user_input === treasurehunt[i].input_4 :
// 				alert("congratulations you found the treasure")
// 			break;
// 			default:
// 				alert("please enter a valid direction")
// 			break;
// 		}
// 	}return user_input; 
// }
// game();
