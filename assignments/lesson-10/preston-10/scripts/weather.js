/******************** PRESTON CURRENT WEATHER********************/
var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=2e107688d57075d314ca40a4c101e340&units=imperial';

var weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', apiURLstring, true);
weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function () {
     var weatherData = weatherRequest.response;

     var temp = weatherData.main.temp;
     var windSpeed = weatherData.wind.speed;
     var windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
     // console.log(weatherData)
     document.getElementById("prestonCurrentTemperature").innerHTML = weatherData.main.temp.toFixed(1) + "&#8457";
     document.getElementById("prestonCurrentHumidity").innerHTML = weatherData.main.humidity.toFixed(1) + "%";
     document.getElementById("prestonCurrentWindSpeed").innerHTML = weatherData.wind.speed.toFixed(1) + "mph";
     document.getElementById("prestonCurrentWindChill").innerHTML = windChill.toFixed(1) + "&#8457";
}

/******************** PRESTON FORECAST ********************/
var forecastRequestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=2e107688d57075d314ca40a4c101e340&units=imperial';
var forecastRequest = new XMLHttpRequest();
forecastRequest.open('GET', forecastRequestURL);
forecastRequest.responseType = 'json';
forecastRequest.send();

forecastRequest.onload = function () {
     var forecastData = forecastRequest.response;
     showForecast(forecastData);
}

function showCurrWeather(currWeatherData) {
     var weatherArticle = document.querySelector(".weather");
     var weatherH3 = document.createElement("h3");
     var weatherCurr = document.createElement("p");
     var weatherTemp = document.createElement("p");
     var weatherHumidity = document.createElement("p");
     var weatherWind = document.createElement("p");

     weatherH3.textContent = 'Weather Summary';
     weatherCurr.textContent = 'Currently: ' + currWeatherData.weather[0].main;
     weatherTemp.textContent = 'Temperature: ' + currWeatherData.main.temp.toFixed(1) + "&#8457";
     weatherHumidity.textContent = 'Humidity: ' + currWeatherData.main.humidity.toFixed(1) + "%";
     weatherWind.textContent = 'Wind: ' + currWeatherData.wind.speed.toFixed(1) + " mph";

     weatherArticle.appendChild(weatherH3);
     weatherArticle.appendChild(weatherCurr);
     weatherArticle.appendChild(weatherTemp);
     weatherArticle.appendChild(weatherHumidity);
     weatherArticle.appendChild(weatherWind);
}

function showForecast(forecastData) {
     var rgex = /[0-9 :]21:00:00/
     var i = -1;
     do {
          i++;
     }
     while (!rgex.test(forecastData.list[i].dt_txt));

     var fcstDaysArr = [];
     var fcstHighArr = [];
     for (var j = 0; j < 5; j++) {
          fcstDaysArr[j] = getFcstDay(j);
          fcstHighArr[j] = forecastData.list[i].main.temp;
          i += 8;
     }

     document.getElementById('day0').innerHTML = fcstDaysArr[0];
     document.getElementById('high0').innerHTML = fcstHighArr[0].toFixed(1) + "&#8457";
     document.getElementById('day1').innerHTML = fcstDaysArr[1];
     document.getElementById('high1').innerHTML = fcstHighArr[1].toFixed(1) + "&#8457";
     document.getElementById('day2').innerHTML = fcstDaysArr[2];
     document.getElementById('high2').innerHTML = fcstHighArr[2].toFixed(1) + "&#8457";
     document.getElementById('day3').innerHTML = fcstDaysArr[3];
     document.getElementById('high3').innerHTML = fcstHighArr[3].toFixed(1) + "&#8457";
     document.getElementById('day4').innerHTML = fcstDaysArr[4];
     document.getElementById('high4').innerHTML = fcstHighArr[4].toFixed(1) + "&#8457";

     function getFcstDay(day) {
          now = new Date();
          today = now.getUTCDay() + day;
          if (today >= 7) today = today - 7;
          if (today == 0) return "Sun";
          else if (today == 1) return "Mon";
          else if (today == 2) return "Tue";
          else if (today == 3) return "Wed";
          else if (today == 4) return "Thu";
          else if (today == 5) return "Fri";
          else return "Sat";
     }

}