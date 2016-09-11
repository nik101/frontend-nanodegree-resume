/*
This is empty on purpose! Your code to build the resume will go here.
 */
//#$("#main").append("Nikesh");

var firstName = "Nikesh";
var age = 22;
var role = "Consultant";


//var awesomeThoughts = "I am Nikesh and I am Awesome";
//console.log(awesomeThoughts);

//var funThoughts = awesomeThoughts.replace("Awesome","Fun")
//$("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%",firstName);
var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedName,formattedRole);
