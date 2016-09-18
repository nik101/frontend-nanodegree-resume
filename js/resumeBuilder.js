/*
This is empty on purpose! Your code to build the resume will go here.
 */
//#$("#main").append("Nikesh");

//var firstName = "Nikesh";
//var age = 22;
//var role = "Consultant";
//var skills = ["JS","Git"];
var bio ={
	"name": "Nikesh M",
	"role": "Consultant",
	"welcomeMessage": "Welcome to my resume",
	"biopic": "images/fry.jpg",
	"contacts":{
		"mobile": "02546868",
		"email" : "me@me.me",
		"github": "blah",
		"twitter": "@blah",
		"location": "London"
	},
	"skills" : ["Git","JS","Html"]
};

var work = {
	"jobs":[

	{	
		"employer" : "Tesco",
		"title" : "shelf stacker",
		"location" : "London"

	},
	{
		"employer" : "Asda",
		"title" : "till",
		"location" : "London"
	}

	]}



var education = {
	"schools":[
		{
			"name" : "Woodlands",
			"location" : "Birmingham",
			"degree dates" : "2011-2015",
			"url" : "google.com",
			"majors" : ["Math","CS", "Economics"]
		},
		{
			"name" : "Loughborough uni",
			"location" : "Leicester",
			"degree dates" : "2008-2010",
			"url" : "bbc.com",
			"majors" : ["Bio","CS", "Economics"]
		}
	]	
}

var projects = {
	"projects":[
		{
			"title" : "project baked beans",
			"dates" : "2015-2016",
			"description":"stacking baked beans",
			"images":""
 
		},
		{
			"title" : "project potato",
			"dates" : "2015-2017",
			"description":"sorting potatos",
			"images":""
 
		}

	]
}

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedName,formattedRole);


var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
$("#topContacts").append(formattedMobile,formattedEmail,formattedTwitter,formattedGithub,formattedLocation);

var formattedbioPic = HTMLbioPic.replace("%data%",bio.biopic);
$("#header").append(formattedbioPic);


var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage)
$("#header").append(formattedwelcomeMsg);

if(bio.skills.length>0){
$("#header").append(HTMLskillsStart);
var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);
var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);
var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);

}

work.jobs.forEach(function(job){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
	$(".work-entry:last").append(formattedEmployer + formattedTitle);
	
});

//for(jobs in work){
//console.log(work[jobs].employer);
//$("#workExperience").append(HTMLworkStart)
//
//}

//$("#main").append(work.Position);
//$("#main").append (education["School"]);
