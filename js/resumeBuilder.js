/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    name: 'Karen',
    role: 'Web Developer',
    contacts: {
        mobile: '093211111111',
        email: '7777@gmail.com',
        github: '7777@github',
        twitter: '7777',
        blog: 'yahoo.com.tw',
        location: 'Taipei'
    },
    welcomeMessage: 'hello',
    skills: ['javascript ', 'C ', 'Python '],
    biopic: 'images/fry.jpg',
    display: function() {
        var htmlStr = '';
        htmlStr += HTMLheaderName.replace("%data%", bio.name);
        htmlStr += HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(htmlStr);

        htmlStr = '';
        htmlStr += HTMLmobile.replace("%data%", bio.contacts.mobile);
        htmlStr += HTMLemail.replace("%data%", bio.contacts.email);
        htmlStr += HTMLgithub.replace("%data%", bio.contacts.github);
        htmlStr += HTMLtwitter.replace("%data%", bio.contacts.twitter);
        htmlStr += HTMLblog.replace("%data%", bio.contacts.blog);
        htmlStr += HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(htmlStr);

        htmlStr = '';
        htmlStr += HTMLbioPic.replace("%data%", bio.biopic);
        htmlStr += HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header:last").append(htmlStr);

        htmlStr = HTMLskillsStart;
        $("#header:last").append(htmlStr);
        htmlStr = '';
        for (var i = 0; i < bio.skills.length; i++) {
            htmlStr += HTMLskills.replace("%data%", bio.skills[i]);
        }

        $("#skills").append(htmlStr);

    }
};

var education = {
    schools: [{
            name: 'Texas A&M',
            location: 'Texas, USA',
            degree: 'MA',
            majors: ['digital marketing', 'Russian'],
            dates: '2010-2013',
            url: 'www.TXA&M.edu'
        },
        {
            name: 'Leeds University',
            location: 'Leeds, UK',
            degree: 'MSA',
            majors: ['digital marketing'],
            dates: '2014-2016',
            url: 'www.leeds.edu'
        }
    ],

    onlineCourses: [{
        title: 'photoshops',
        school: 'Leeds',
        dates: '2010-2011',
        url: 'www.leeds/onlineschool.edu'
    }],
    display: function() {
        var htmlStr = '';
        $('#education').append(HTMLschoolStart);

        for (var i = 0; i < education.schools.length; i++) {
            htmlStr += HTMLschoolName.replace("#", education.schools[i].url).replace("%data%", education.schools[i].name);
            htmlStr += HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            htmlStr += HTMLschoolDates.replace("%data%", education.schools[i].dates);
            htmlStr += HTMLschoolLocation.replace("%data%", education.schools[i].location);
            for (var j = 0; j < education.schools[i].majors.length; j++) {
                htmlStr += HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
            }


        }
        $(".education-entry").append(htmlStr);

        htmlStr = HTMLonlineClasses;
        htmlStr += HTMLschoolStart;
        $("#education:last").append(htmlStr);
        //htmlStr += HTMLschoolStart;

        htmlStr = '';
        for (i = 0; i < education.onlineCourses.length; i++) {
            htmlStr += HTMLonlineTitle.replace("#", education.onlineCourses[i].url).replace("%data%", education.onlineCourses[i].title);
            htmlStr += HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            htmlStr += HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            htmlStr += HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        }
        $('.education-entry:last').append(htmlStr);
    }

};

var work = {
    jobs: [{
        employer: 'Sky TV',
        title: 'digital marketing assitant',
        location: 'London, UK',
        dates: '2016-current',
        description: 'works with variety of customers to bring more audience to the company'
    }],
    display: function() {
        var htmlStr = '';
        $("#workExperience:last").append(HTMLworkStart);

        for (var i = 0; i < work.jobs.length; i++) {
            htmlStr += HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            htmlStr += HTMLworkTitle.replace("%data%", work.jobs[i].title);
            htmlStr += HTMLworkDates.replace("%data%", work.jobs[i].dates);
            htmlStr += HTMLworkLocation.replace("%data%", work.jobs[i].location);
            htmlStr += HTMLworkDescription.replace("%data%", work.jobs[i].description);
        }

        $(".work-entry").append(htmlStr);
    }
};

var project = {
    projects: [{
        title: 'facebook ads',
        dates: '2016-2017',
        description: 'effectly use Facebook ads to draw more customers',
        images: ['images/197x148.gif', 'images/197x148.gif', 'images/197x148.gif']
    }],
    display: function() {
        var htmlStr = '';
        $("#projects:last").append(HTMLprojectStart);

        for (var i = 0; i < project.projects.length; i++) {
            htmlStr += HTMLprojectTitle.replace("%data%", project.projects[i].title);
            htmlStr += HTMLprojectDates.replace("%data%", project.projects[i].dates);
            htmlStr += HTMLprojectDescription.replace("%data%", project.projects[i].description);
            for (var j = 0; j < project.projects[i].images.length; j++) {
                htmlStr += HTMLprojectImage.replace("%data%", project.projects[i].images[j]) + " ";
            }
        }

        $(".project-entry").append(htmlStr);
    }
};

var controller = {
    init: function() {
        bio.display()
        work.display();
        project.display();
        education.display();
        mapView.init();
    }
};

var mapView = {
    init: function() {
        this.render();
    },

    render: function() {
        var htmlStr = '';
        htmlStr = googleMap;
        $("#mapDiv").append(htmlStr);

        //htmlStr = internationalizeButton;
        //$("#mapDiv").append(htmlStr);

        htmlStr = '';
        htmlStr += HTMLmobile.replace("%data%", bio.contacts.mobile);
        htmlStr += HTMLemail.replace("%data%", bio.contacts.email);
        htmlStr += HTMLgithub.replace("%data%", bio.contacts.github);
        htmlStr += HTMLtwitter.replace("%data%", bio.contacts.twitter);
        htmlStr += HTMLblog.replace("%data%", bio.contacts.blog);
        htmlStr += HTMLlocation.replace("%data%", bio.contacts.location);
        $("#footerContacts").append(htmlStr);

    }
};

controller.init();