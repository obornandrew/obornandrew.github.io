/********** PRESTON CURRENT WEATHER**********/
var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=2e107688d57075d314ca40a4c101e340&units=imperial';

var weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', apiURLstring, true);
weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function () {
     var weatherData = weatherRequest.response;
     console.log(weatherData)
     document.getElementById("preston-current-temp").innerHTML = weatherData.main.temp + "&deg F";
}

/********** SAN TAN VALLEY CURRENT WEATHER**********/
var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?lat=33.19&lon=-111.53&APPID=2e107688d57075d314ca40a4c101e340&units=imperial';

var sanTanValleyWeatherCurrentRequest = new XMLHttpRequest();

sanTanValleyWeatherCurrentRequest.open('GET', apiURLstring, true);
sanTanValleyWeatherCurrentRequest.responseType = 'json';
sanTanValleyWeatherCurrentRequest.send();

sanTanValleyWeatherCurrentRequest.onload = function () {
     var sanTanValleyWeatherCurrentData = sanTanValleyWeatherCurrentRequest.response;

     document.getElementById("phoenix-current-weather").innerHTML = sanTanValleyWeatherCurrentData.main.temp + "&deg F";
}

/********** SAN TAN VALLEY FORECAST WEATHER**********/
var apiURLstring = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.19&lon=-111.53&APPID=2e107688d57075d314ca40a4c101e340&units=imperial';

var sanTanValleyWeatherForecastRequest = new XMLHttpRequest();

sanTanValleyWeatherForecastRequest.open('GET', apiURLstring, true);
sanTanValleyWeatherForecastRequest.responseType = 'json';
sanTanValleyWeatherForecastRequest.send();

sanTanValleyWeatherForecastRequest.onload = function () {
     var sanTanValleyWeatherForecastData = sanTanValleyWeatherForecastRequest.response;

     document.getElementById("temp1").innerHTML = sanTanValleyWeatherForecastData.list.main.temp;
}