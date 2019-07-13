var temp = 7500;
var windSpeed = 100;
var windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);

document.getElementById('windChill').innerHTML = windChill.toFixed(1);
document.getElementById('currentWindSpeed').innerHTML = windSpeed.toFixed(1);
document.getElementById('getTemp').innerHTML = temp.toFixed(1);