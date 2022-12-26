var number=prompt("Enter the date mm-dd-yyyy");
days= new Date();
cyear=days.getFullYear();
var day = new Date(number);
year = day.getFullYear();
var age=(cyear-year);
document.write(age);