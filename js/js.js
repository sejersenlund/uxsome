// JavaScript Document

function  displayNextImage() {
var x;

if (x<imageArray.length) {
	x=x+1;
	document.getElementById("imagediv").style.backgroundImage=images[x];
} 
else if (x<imageArray.length) {
	x=0;
	document.getElementById("imagediv").style.backgroundImage=images[x];
}

else if (x<imageArray.length) {
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
findPlayer[4] = document.getElementById("sliderfour").value;

if (findPlayer[1] === 1) {
	return "Aleksandar Jovanovic"
} else if (findPlayer[2] === 2) {
	return "Niklas Backman"
} else if (findPlayer[3] === 3) {
	return "Mustapha Bundu"
}
	
function hentData(url, callback_Funktion) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            callback_Funktion(this);
        }
    };

}

function visData(jsonData) {
    var jsonElementer = JSON.parse(jsonData.responseText);
    var divIndhold = "";

    divIndhold += '<p>På stadion er der ' +
        + jsonElementer.main.temp + ' og det blæser ' +
        jsonElementer.wind.speed +
        '</p>';

    document.getElementById("indhold").innerHTML = divIndhold;

}

hentData("http://api.openweathermap.org/data/2.5/weather?q=Aarhus,dk&APPID=2fb0a6717d1db32dc445454559a4f371&units=metric", visData);
