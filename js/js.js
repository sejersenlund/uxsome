// JavaScript Document

/*Weather API*/

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

    divIndhold += '<p>Det er' +
        + jsonElementer.main.temp + ' grader og det blæser ' +
        jsonElementer.wind.speed + 'm/sek';

    document.getElementById("indhold").innerHTML = divIndhold;

}

hentData("http://api.openweathermap.org/data/2.5/weather?q=Aarhus,dk&APPID=2fb0a6717d1db32dc445454559a4f371&units=metric", visData);
	
/*Dataanalyse*/
	
function showplayer() {

    let findPlayer = new Array(0, 1, 2, 3, 4);

    findPlayer[1] = parseInt(document.getElementById("sliderone").value);
    findPlayer[2] = parseInt(document.getElementById("slidertwo").value);
    findPlayer[3] = parseInt(document.getElementById("sliderthree").value);
    findPlayer[4] = parseInt(document.getElementById("sliderfour").value);

    if (findPlayer[1] === 1 && findPlayer[2] === 1 && findPlayer[3] === 3 && findPlayer[4] === 1) {
        return "jovanovic.html";
    } else if (findPlayer[1] === 1 && findPlayer[2] === 3 && findPlayer[3] === 3 && findPlayer[4] === 1) {
        return "backman.html";
    } else if (findPlayer[1] === 3 && findPlayer[2] === 3 && findPlayer[3] === 1 && findPlayer[4] === 3) {
        return "bundu.html";
    } else if (findPlayer[1] === 3 && findPlayer[2] === 3 && findPlayer[3] === 1 && findPlayer[4] === 1) {
        return "amini.html";
    } else {
        return "index.html"; //Fallback hvis ingen kombination passer
    }
}

	
/*WeatherAPI*/
	
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
        +jsonElementer.main.temp + ' grader og ' +
        jsonElementer.wind.speed +
        ' m/sek</p>';

    document.getElementById("indhold").innerHTML = divIndhold;

}

hentData("http://api.openweathermap.org/data/2.5/weather?q=Aarhus,dk&APPID=2fb0a6717d1db32dc445454559a4f371&units=metric", visData);



document.getElementById("tjekSpiller").addEventListener('click', function () {
    window.location.href = showplayer();
});

