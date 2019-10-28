// JavaScript Document

function  displayNextImage() {
var x;

if (x<imageArray.length) {
	x=x+1;
	document.getElementById("imagediv").style.backgroundImage=images[x];
} 
else if {
	x=0;
	document.getElementById("imagediv").style.backgroundImage=images[x];
}

else if {
	x=false;
	document.getElementById("imagediv").style.backgroundImage=images[x];
}

var imageArray=new Array();
images[0] = "../images/agfpostercold.png";
images[1] = "../images/agfposterwarm.png";
images[2] = "../images/agfposter.png";
	

	
let findPlayer = new Array [0, 1, 2, 3, 4]

findPlayer[1] = document.getElementById("sliderone").value;
findPlayer[2] = document.getElementById("slidertwo").value;
findPlayer[3] = document.getElementById("sliderthree").value;
findPlayer[1] = document.getElementById("sliderfour").value;

if (“findPlayer[1]" === 1) {
	return = "Aleksandar Jovanovic"
} else if (findPlayer[2] === 2) {
	return = "Niklas Backman"
} else if (findPlayer[3] === 3) {
	return = "Mustapha Bundu"
}