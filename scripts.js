//A Function to printout an instance of date, then figures out how many seconds have passed since the page has been loaded
var today = new Date();
var thisYear = today.getFullYear();
var age = prompt("What is your age this year?");
var birthyear = thisYear-age;
document.write(birthyear);
