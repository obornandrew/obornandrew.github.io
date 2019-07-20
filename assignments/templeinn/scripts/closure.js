var apiTemples = 'scripts/json/temples.json';
var templeRequest = new XMLHttpRequest();

templeRequest.open('GET', apiTemples, true);
templeRequest.responseType = 'json';
templeRequest.send();


templeRequest.onload = function () {
     var templeData = templeRequest.response;

     /******************* BOUNTIFUL *******************/
     document.getElementById("bountifulAddress").innerHTML = templeData[0].address;
     document.getElementById("bountifulCity").innerHTML = templeData[0].city + ',';
     document.getElementById("bountifulState").innerHTML = templeData[0].state;
     document.getElementById("bountifulZip").innerHTML = templeData[0].zip;
     document.getElementById("bountifulCountry").innerHTML = templeData[0].country;
     document.getElementById("bountifulPhone").innerHTML = 'Phone: ' + templeData[0].phone;
     document.getElementById("bountifulEmail").innerHTML = 'Email: ' + templeData[0].email;
     document.getElementById("bountifulAnnounced").innerHTML = 'Announced: ' + templeData[0].announced;
     document.getElementById("bountifulGroundbreaking").innerHTML = 'Ground breaking: ' + templeData[0].groundbreaking;
     document.getElementById("bountifulOrdSchedule").innerHTML = templeData[0].ordinanceSchedule;

     for (i = 0; i < templeData[0].services.length; i++) {
          var div = document.createElement('div');
          div.textContent = templeData[0].services[i].service;
          document.getElementById("bountifulServices0").appendChild(div);
     };

     for (i = 0; i < templeData[0].closures.length; i++) {
          var div = document.createElement('div');
          div.textContent = 'Closed: ' + templeData[0].closures[i].start;
          document.getElementById("bountifulClosureStart").appendChild(div);
     };

     /******************* GILBERT *******************/
     document.getElementById("gilbertAddress").innerHTML = templeData[1].address;
     document.getElementById("gilbertCity").innerHTML = templeData[1].city + ',';
     document.getElementById("gilbertState").innerHTML = templeData[1].state;
     document.getElementById("gilbertZip").innerHTML = templeData[1].zip;
     document.getElementById("gilbertCountry").innerHTML = templeData[1].country;
     document.getElementById("gilbertPhone").innerHTML = 'Phone: ' + templeData[1].phone;
     document.getElementById("gilbertEmail").innerHTML = 'Email: ' + templeData[1].email;
     document.getElementById("gilbertAnnounced").innerHTML = 'Announced: ' + templeData[1].announced;
     document.getElementById("gilbertGroundbreaking").innerHTML = 'Ground breaking: ' + templeData[1].groundbreaking;
     document.getElementById("gilbertOrdSchedule").innerHTML = templeData[1].ordinanceSchedule;

     for (i = 0; i < templeData[1].services.length; i++) {
          var div = document.createElement('div');
          div.textContent = templeData[1].services[i].service;
          document.getElementById("gilbertServices0").appendChild(div);
     };

     for (i = 0; i < templeData[1].closures.length; i++) {
          var div = document.createElement('div');
          div.textContent = 'Closed: ' + templeData[1].closures[i].start;
          document.getElementById("gilbertClosureStart").appendChild(div);
     };

     /******************* PARIS *******************/
     document.getElementById("parisAddress1").innerHTML = templeData[2].address1;
     document.getElementById("parisAddress2").innerHTML = templeData[2].address2;
     document.getElementById("parisCity").innerHTML = templeData[2].city;
     document.getElementById("parisCountry").innerHTML = templeData[2].country;
     document.getElementById("parisPhone").innerHTML = 'Phone: ' + templeData[2].phone;
     document.getElementById("parisEmail").innerHTML = 'Email: ' + templeData[2].email;
     document.getElementById("parisAnnounced").innerHTML = 'Announced: ' + templeData[2].announced;
     document.getElementById("parisGroundbreaking").innerHTML = 'Ground breaking: ' + templeData[2].groundbreaking;
     document.getElementById("parisOrdSchedule").innerHTML = templeData[2].ordinanceSchedule;

     for (i = 0; i < templeData[2].services.length; i++) {
          var div = document.createElement('div');
          div.textContent = templeData[2].services[i].service;
          document.getElementById("parisServices0").appendChild(div);
     };

     for (i = 0; i < templeData[2].closures.length; i++) {
          var div = document.createElement('div');
          div.textContent = 'Closed: ' + templeData[2].closures[i].start;
          document.getElementById("parisClosureStart").appendChild(div);
     };

     /******************* PRESTON *******************/
     document.getElementById("prestonAddress").innerHTML = templeData[3].address;
     document.getElementById("prestonCity").innerHTML = templeData[3].city;
     document.getElementById("prestonCountry").innerHTML = templeData[3].country;
     document.getElementById("prestonPhone").innerHTML = 'Phone: ' + templeData[3].phone;
     document.getElementById("prestonEmail").innerHTML = 'Email: ' + templeData[3].email;
     document.getElementById("prestonAnnounced").innerHTML = 'Announced: ' + templeData[3].announced;
     document.getElementById("prestonGroundbreaking").innerHTML = 'Ground breaking: ' + templeData[3].groundbreaking;
     document.getElementById("prestonOrdSchedule").innerHTML = templeData[3].ordinanceSchedule;

     for (i = 0; i < templeData[3].services.length; i++) {
          var div = document.createElement('div');
          div.textContent = templeData[3].services[i].service;
          document.getElementById("prestonServices0").appendChild(div);
     };

     for (i = 0; i < templeData[3].closures.length; i++) {
          var div = document.createElement('div');
          div.textContent = 'Closed: ' + templeData[3].closures[i].start;
          document.getElementById("prestonClosureStart").appendChild(div);
     };


}