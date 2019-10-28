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