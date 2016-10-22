// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.
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
// var formattedRole= HTMLheaderRole.replace(data,role);
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
var data = '%data%';
var skills = ["Programming", "Content Writing", "Reading"];

var bio = {
    "name": "Purvi Bansal",
    "role": "Front-End Web Developer",
    "welcomeMessage": "Lets work together..... Learn and grow together..",
    "biopic": "images/fry.jpg",
    "contacts": {
        "mobile": "123-456-7890",
        "email": "purvi194@gmail.com",
        "github": "purvi194",
        "location": "Indore, Madhya Pradesh, India"
    },
    "skills": skills
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedMEmail = HTMLemail.replace(data, bio.contacts.email);
    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    var formattedBiopic = HTMLbioPic.replace(data, bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);

    $("#header").prepend(formattedBiopic);
    $("#header").prepend(formattedWelcomeMsg);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    $("#topContacts, #footerContacts").append(formattedMobile);
    $("#topContacts, #footerContacts").append(formattedMEmail);
    $("#topContacts, #footerContacts").append(formattedGithub);
    $("#topContacts, #footerContacts").append(formattedLocation);

    if (bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {

            var formattedSkills = HTMLskills.replace(data, skill);
            $("#skills").append(formattedSkills);


        });

    }

};

bio.display();


var work = {
    "jobs": [{
        "employer": "SVVIMUN",
        "title": "Web Designer",
        "location": "Indore, India",
        "dates": "August 2016-October 2016",
        "description": "Designing the front end for the website for the registration"
    }, {
        "employer": "Technomech Engineers",
        "title": "DBA",
        "location": "Indore, India",
        "dates": "August 2014-August 2016",
        "description": "Maintanance and updation of the database"
    }]
};

work.display = function() {
    work.jobs.forEach(function(job) {

        $("#workExperience").append(HTMLworkStart);

        var formattedWorkemployer = HTMLworkEmployer.replace(data, job.employer);
        var formattedWorktitle = HTMLworkTitle.replace(data, job.title);
        var wrkconcat = formattedWorkemployer + formattedWorktitle;
        $(".work-entry:last").append(wrkconcat);

        var formattedDates = HTMLworkDates.replace(data, job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedworkLocation = HTMLworkLocation.replace(data, job.location);
        $(".work-entry:last").append(formattedworkLocation);

        var formattedDescription = HTMLworkDescription.replace(data, job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};

work.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

// INTERNATIONALIZE NAME 

$("#main").append(internationalizeButton);

function inName(name) {
    name = name.trim();
    console.log(name);
    var nameArray = name.split(" ");
    iName = nameArray[0].slice(0, 1).toUpperCase() + nameArray[0].slice(1).toLowerCase() + " " + nameArray[1].toUpperCase();
    return iName;
}



var education = {
    "schools": [{
        "name": "Queens College",
        "location": "Indore, Madhya Pradesh, India",
        "dates": "2001-12",
        "majors": ["NA"],
        "degree": "Matriculate",
        "url": "http://www.queenscollegeindore.org"

    }, {
        "name": "Poornima Institute of Engineering and Technology",
        "location": "Jaipur, Rajasthan, India",
        "dates": "2012-16",
        "majors": "Computer Science",
        "degree": ["Bachelors in Technology(Computer Science)"],
        "url": "http://www.poornima.org"
    }],

    "onlineCourses": [{
        "title": "Front-End Web Developer",
        "school": "Udacity",
        "dates": "2016-present",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?v=fe3"
    }]
};

education.display = function() {

    education.schools.forEach(function(schools) {

        $("#education").append(HTMLschoolStart);

        formattedSchoolname = HTMLschoolName.replace(data, schools.name);
        formattedSchoolLoc = HTMLschoolLocation.replace(data, schools.location);
        formattedSchooldates = HTMLschoolDates.replace(data, schools.dates);
        formattedSchoolmajor = HTMLschoolMajor.replace(data, schools.majors);
        formattedSchooldegree = HTMLschoolDegree.replace(data, schools.degree);

        $(".education-entry:last").append(formattedSchoolname);
        $(".education-entry:last").append(formattedSchooldegree);
        $(".education-entry:last").append(formattedSchooldates);
        $(".education-entry:last").append(formattedSchoolLoc);
        $(".education-entry:last").append(formattedSchoolmajor);

    });

    $(".education-entry:last").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(courses) {

        formattedCoursetitle = HTMLonlineTitle.replace(data, courses.title);
        formattedCourseschool = HTMLonlineSchool.replace(data, courses.school);
        formattedCoursedates = HTMLonlineDates.replace(data, courses.dates);
        formattedCourseURL = HTMLonlineURL.replace(data, courses.url);

        $(".education-entry:last").append(formattedCoursetitle);
        $(".education-entry:last").append(formattedCourseschool);
        $(".education-entry:last").append(formattedCoursedates);
        $(".education-entry:last").append(formattedCourseURL);
    });

};

education.display();

var projects = {

    "projects": [{
        "title": "College ERP",
        "dates": "2015-16",
        "description": "An ERP for college which enables management of all the departments easier and central.",
        "images": ["images/erp.jpg", "images/erp2.jpg"]

    }, {
        "title": "Droid Control",
        "dates": "2016",
        "description": "An android application which enables control of a pick and place robot using bluetooth connection.",
        "images": ["images/droid.jpg", "images/droid2.jpg"]
    }, {
        "title": "Call Blocker",
        "dates": "2015",
        "description": "An android application which is helpful in blocking unwanted or unknown calls,",
        "images": ["images/blocker.jpg", "images/blocker2.jpg"]
    }, {
        "title": "Lecture Distribution System",
        "dates": "2014",
        "description": "A .net based project which is used to distribute the notes provided by the professors.",
        "images": ["images/lectures.jpg", "images/lectures2.jpg"]
    }]
};

projects.display = function() {

    projects.projects.forEach(function(list) {

        $("#projects").append(HTMLprojectStart);

        var formattedprojectTitle = HTMLprojectTitle.replace(data, list.title);
        var formattedprojectDates = HTMLprojectDates.replace(data, list.dates);
        var formattedprojectDesc = HTMLprojectDescription.replace(data, list.description);

        $(".project-entry:last").append(formattedprojectTitle);
        $(".project-entry:last").append(formattedprojectDates);
        $(".project-entry:last").append(formattedprojectDesc);

        list.images.forEach(function(imgs) {
            var formattedprojectImage = HTMLprojectImage.replace(data, imgs);
            $(".project-entry:last").append(formattedprojectImage);
        });
    });
};

projects.display();


$("#mapDiv").append(googleMap);