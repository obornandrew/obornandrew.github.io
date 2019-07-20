/********** BOUNTIFUL UTAH TEMPLE CURRENT WEATHER**********/
var bAPIurlString = 'https://api.openweathermap.org/data/2.5/weather?q=bountiful,usa&APPID=2e107688d57075d314ca40a4c101e340&units=imperial';

var bWeatherRequest = new XMLHttpRequest();

bWeatherRequest.open('GET', bAPIurlString, true);
bWeatherRequest.responseType = 'json';
bWeatherRequest.send();

bWeatherRequest.onload = function () {
     var weatherData = bWeatherRequest.response;
     document.getElementById("bountiful-utah-current-temp").innerHTML = weatherData.main.temp.toFixed(1) + "&#8457";
}


/********** GILBERT ARIZONA CURRENT WEATHER**********/
var gApiURLstring = 'https://api.openweathermap.org/data/2.5/weather?zip=85297&APPID=2e107688d57075d314ca40a4c101e340&units=imperial';

var gWeatherRequest = new XMLHttpRequest();

gWeatherRequest.open('GET', gApiURLstring, true);
gWeatherRequest.responseType = 'json';
gWeatherRequest.send();

gWeatherRequest.onload = function () {
     var weatherData = gWeatherRequest.response;
     document.getElementById("gilbert-arizona-current-temp").innerHTML = weatherData.main.temp.toFixed(1) + "&#8457";
}


/********** PARIS CURRENT WEATHER**********/
var pApiURLstring = 'https://api.openweathermap.org/data/2.5/weather?lat=48.817&lon=2.123&APPID=2e107688d57075d314ca40a4c101e340&units=imperial';

var pWeatherRequest = new XMLHttpRequest();

pWeatherRequest.open('GET', pApiURLstring, true);
pWeatherRequest.responseType = 'json';
pWeatherRequest.send();

pWeatherRequest.onload = function () {
     var weatherData = pWeatherRequest.response;
     document.getElementById("paris-france-current-temp").innerHTML = weatherData.main.temp.toFixed(1) + "&#8457";
}


/********** PRESTON ENGLAND CURRENT WEATHER**********/
var peApiURLstring = 'https://api.openweathermap.org/data/2.5/weather?lat=53.672&lon=-2.631&APPID=2e107688d57075d314ca40a4c101e340&units=imperial';

var peWeatherRequest = new XMLHttpRequest();

peWeatherRequest.open('GET', peApiURLstring, true);
peWeatherRequest.responseType = 'json';
peWeatherRequest.send();

peWeatherRequest.onload = function () {
     var weatherData = peWeatherRequest.response;
     document.getElementById("preston-england-current-temp").innerHTML = weatherData.main.temp.toFixed(1) + "&#8457";
}