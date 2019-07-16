var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
     var townData = {
          "towns": [
               {
                    "name": "Franklin",
                    "motto": "Where you will grow!",
                    "yearFounded": 1788,
                    "currentPopulation": 30458,
                    "averageRainfall": 21,
                    "events": [
                         "March 4: March to the Drum of Donuts",
                         "September 5 - 11: Founder Days",
                         "December 1 - 26: Christmas in the Heart"
                    ]
               },
               {
                    "name": "Fish Haven",
                    "motto": "This is Fish Heaven.",
                    "yearFounded": 1864,
                    "currentPopulation": 501,
                    "averageRainfall": 14.20,
                    "events": [
                         "April 1: How Big Was That Fish Day",
                         "May 15-30: Rush the Creek Days",
                         "July 24: Bear Lake Blunder Run",
                         "December 12: Light the Tree"
                    ]
               },
               {
                    "name": "Greenville",
                    "motto": "Green is our way of life.",
                    "yearFounded": 1805,
                    "currentPopulation": 33458,
                    "averageRainfall": 25,
                    "events": [
                         "February 10-12: Greenbration",
                         "May 8 - 18: Greenville Founder Days",
                         "June 20: Verde and Valiant Day",
                         "November 15-16: Greensome Gathering"
                    ]
               },
               {
                    "name": "Placerton",
                    "motto": "Positive Placement in Placerton.",
                    "yearFounded": 1946,
                    "currentPopulation": 512,
                    "averageRainfall": 39,
                    "events": [
                         "July 4: A Blaze of Glory",
                         "October 20: Fall through Fall"
                    ]
               },
               {
                    "name": "Preston",
                    "motto": "Home of Napoleon Dynamite",
                    "yearFounded": 1866,
                    "currentPopulation": 5204,
                    "averageRainfall": 16.65,
                    "events": [
                         "March 29: Work Creek Revival",
                         "July 8-12: Napoleon Dynamite Festival",
                         "November 2-4: Freedom Days"
                    ]
               },
               {
                    "name": "Soda Springs",
                    "motto": "Historic Oregon Trail Oasis. The Soda is on Us",
                    "yearFounded": 1858,
                    "currentPopulation": 2985,
                    "averageRainfall": 15.75,
                    "events": [
                         "February 29: Geyser Song Day",
                         "May 1-6: Days of May Celebration",
                         "October 15-16: Octoberfest"
                    ]
               },
               {
                    "name": "Springfield",
                    "motto": "Where everyone is lifted.",
                    "yearFounded": 1826,
                    "currentPopulation": 17852,
                    "averageRainfall": 17,
                    "events": [
                         "January 8: Spring into Winter",
                         "April 10-20: Celebration of Life",
                         "July 31-Aug 15: Dog Days of Summer Festival"
                    ]
               }
          ]
     }
     // Town 1
     document.getElementById("town1Name").innerHTML = townData.towns[4].name;
     document.getElementById("town1Motto").innerHTML = townData.towns[4].motto;
     document.getElementById("town1YearFounded").innerHTML = "Year Founded: " + townData.towns[4].yearFounded;
     document.getElementById("town1Population").innerHTML = "Population: " + townData.towns[4].currentPopulation;
     document.getElementById("town1AnnualRainFall").innerHTML = "Average Rain Fall: " + townData.towns[4].averageRainfall;

     // Town 2
     document.getElementById("town2Name").innerHTML = townData.towns[5].name;
     document.getElementById("town2Motto").innerHTML = townData.towns[5].motto;
     document.getElementById("town2YearFounded").innerHTML = "Year Founded: " + townData.towns[5].yearFounded;
     document.getElementById("town2Population").innerHTML = "Population: " + townData.towns[5].currentPopulation;
     document.getElementById("town2AnnualRainFall").innerHTML = "Average Rain Fall: " + townData.towns[5].averageRainfall;

     // Town 3
     document.getElementById("town3Name").innerHTML = townData.towns[1].name;
     document.getElementById("town3Motto").innerHTML = townData.towns[1].motto;
     document.getElementById("town3YearFounded").innerHTML = "Year Founded: " + townData.towns[1].yearFounded;
     document.getElementById("town3Population").innerHTML = "Population: " + townData.towns[1].currentPopulation;
     document.getElementById("town3AnnualRainFall").innerHTML = "Average Rain Fall: " + townData.towns[1].averageRainfall;

};
