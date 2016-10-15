/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $("#main").append("Purvi Bansal");

// var awesomeThoughts="I am Purvi and I am awesome!!!"
// console.log(awesomeThoughts);

// var funThoughts= awesomeThoughts.replace("awesome","fun");
// console.log(funThoughts);

// $("#main").append(funThoughts);
// var name="Purvi Bansal";


// var role="Front-End Web Developer"
// var formattedRole= HTMLheaderRole.replace("%data%",role);

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);



// $("#main").append(bio.name);
// $("#main").append(bio.role);
// $("#main").append(bio.contacts.mobile);
// $("#main").append(bio.contacts.email);
// $("#main").append(bio.contacts.github);
// $("#main").append(bio.contacts.location);
// $("#main").append(bio.bioPic);
// $("#main").append(bio.welcomeMessage);
// $("#main").append(bio.skills);

// bio["work"]= {
// 	"position" : "Trainee",
// 	"employer" : "Google",
// 	"years" : "1",
// 	"city" : "San Francisco"
// }


var skills= ["Programming","Content Writing","Reading"]

var bio = {
	"name" : "Purvi Bansal",
	"role" : "Front-End Web Developer",
	"welcomeMessage" : "Lets Work Together..... And learn and grow together..",
	"bioPic" : "images/fry.jpg",
	"contacts" : {
		"mobile" : "123-456-7890",
		"email" : "purvi194@gmail.com",
		"github" : "purvi194",
		"location" : "India"
		},
	"object": "I want to succeed in a stimulating and challenging environment where I can use "
				+"my skills and knowledge for organizational as well as personal growth.",	
	"skills" :  skills
};

var formattedName= HTMLheaderName.replace("%data%",bio.name);
var formattedRole= HTMLheaderRole.replace("%data%",bio.role);
var formattedMobile= HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedMEmail= HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub= HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation= HTMLlocation.replace("%data%",bio.contacts.location);

var formattedBiopic= HTMLbioPic.replace("%data%",bio.bioPic);
var formattedWelcomeMsg= HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);




$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedMEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);

$("#header").append(formattedBiopic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0)
{
	$("#header").append(HTMLskillsStart);

	var formattedSkills= HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkills);

	formattedSkills= HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkills);

	formattedSkills= HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkills);
}

var work= {
		"jobs":	[
		 {
				"employer" : "SVVIMUN",
				"title" : "Web Designer",
				"location" : "Indore, India",
				"dates" : "August 2016-October 2016",
				"description" : "Designing the front end for the website for the registration"
			},
			{
				"employer" : "Technomech Engineers",
				"title" : "DBA",
				"location" : "Indore, India",
				"dates" : "August 2014-August 2016",
				"description" : "Maintanance and updation of the database"
			}
		]
		}

function displayWork()
{
work.jobs.forEach(function(job) {

	$("#workExperience").append(HTMLworkStart);

	var formattedWorkemployer= HTMLworkEmployer.replace("%data%",job.employer);
	var formattedWorktitle=HTMLworkTitle.replace("%data%",job.title);
	var wrkconcat=formattedWorkemployer+formattedWorktitle;
	$(".work-entry:last").append(wrkconcat);

	var formattedDates = HTMLworkDates.replace("%data%",job.dates);
	$(".work-entry:last").append(formattedDates);

	var formattedworkLocation = HTMLworkLocation.replace("%data%",job.location);
	$(".work-entry:last").append(formattedworkLocation);

	var formattedDescription= HTMLworkDescription.replace("%data%",job.description);
	$(".work-entry:last").append(formattedDescription);
});
}

displayWork();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

  logClicks(x,y);
});

// INTERNATIONALIZE NAME 
/*
$("#main").append(internationalizeButton);

function inName(name)
{
	name=name.trim();
	console.log(name);
	var nameArray= name.split(" ");
	iName= nameArray[0].slice(0,1).toUpperCase()+nameArray[0].slice(1).toLowerCase()+" "+nameArray[1].toUpperCase();
	return iName;
}*/



// var education= {
// 	"school": {
// 		[
// 			{
// 				"Name" : "Queens College",
// 				"location" : "Indore, Madhya Pradesh, India",
// 				"degree dates" : "2001-12",
// 				"major": "NA"
				
// 			},
// 			{
// 				"name": "Poornima Institute of Engineering and Technology",		
// 				"location": "Jaipur, Rajasthan, India",
// 				"degree dates": "2012-16",
// 				"major": "Computer Science"
// 			}
// 			]
// 		},
			
// 	"online courses": { 
// 		[
// 			{
// 				"title": "Front-End Web Developer",
// 				"school": "Udacity",
// 				"dates": "2016",
// 				"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?v=fe3"
// 			}
// 		]
// 		}
// };

var projects={

	"projects" : [
		{
			"title": "College ERP",
			"dates": "2015-16",
			"description": "An ERP for college which enables management of all the departments easier and central."
		},
		{
			"title": "Droid Control",
			"dates": "2016",
			"description": "An android application which enables control of a pick and place robot using bluetooth connection."
		},
		{
			"title": "Call Blocker",
			"dates": "2015",
			"description": "An android application which is helpful in blocking unwanted or unknown calls,"
		},
		{
			"title": "Lecture Distribution System",
			"dates": "2014",
			"description": "A .net based project which is used to distribute the notes provided by the professors."
		}		
	]
}

projects.display= function() {

	for(list in projects.projects) {

			$("#projects").append(HTMLprojectStart);

			var formattedprojectTitle= HTMLprojectTitle.replace("%data%",projects.projects[list].title);
			var formattedprojectDates= HTMLprojectDates.replace("%data%",projects.projects[list].dates);
			var formattedprojectDesc= HTMLprojectDescription.replace("%data%",projects.projects[list].description);

			$(".project-entry:last").append(formattedprojectTitle);
			$(".project-entry:last").append(formattedprojectDates);
			$(".project-entry:last").append(formattedprojectDesc);

		}
}

projects.display();

