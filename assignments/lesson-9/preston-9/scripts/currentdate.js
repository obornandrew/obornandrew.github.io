// Current Date
var today = new Date();
// console.log(today);

// Full Year
var fullYear = today.getFullYear();
// console.log(fullYear);

// Get Month
var monthNames = new Array(12);
monthNames[0] = 'January';
monthNames[1] = 'February';
monthNames[2] = 'March';
monthNames[3] = 'April';
monthNames[4] = 'May';
monthNames[5] = 'June'; 
monthNames[6] = 'July';
monthNames[7] = 'August';
monthNames[8] = 'September';
monthNames[9] = 'October';
monthNames[10] = 'November'; 
monthNames[11] = 'December';
var month = monthNames[today.getMonth()];
// console.log(monthNames);
// console.log(month);

// Get Weekday
var dayNames = new Array(7);
dayNames[0] = 'Sunday';
dayNames[1] = 'Monday';
dayNames[2] = 'Tuesday';
dayNames[3] = 'Wednesday';
dayNames[4] = 'Thursday';
dayNames[5] = 'Friday';
dayNames[6] = 'Saturday';
var dayOfWeek = dayNames[today.getDay()];
// console.log(dayOfWeek);

// Get Day of Month
var dayNumber = today.getDate();
// console.log(dayNumber);

//  Full Date
var fullDate = dayOfWeek + ", " + dayNumber + " " + month + " " + fullYear;
// console.log(fullDate);

// Send to HTML
document.getElementById("displayCurrentDate").innerHTML = fullDate;
document.getElementById("theCopyright-year").innerHTML = fullYear;