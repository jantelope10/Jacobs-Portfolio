/*Uses jQuery, all functions within this function can be performed on document load.*/
/*Includes the initialization and function of each command.*/
$(document).ready(function() {
    window.addEventListener("pageshow", function(event){
        if (event.persisted) {
            this.window.location.reload();
        }
    });
    /*Shows modal when welcome button is clicked*/
    $("#buttonWelcome").click(function(){
        $('#myModal').modal("show");
    });
    $("#myModalButton").click(function(){
        $('#myModal').modal("hide");
    });
    /*Navigates user to top of the home page when the logo is clicked.*/
    $("#logo").click(function(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    /*Shows spinner and blurs background when about me link in navbar is clicked, loads about me page after a timeout.*/
    $("#aboutmenav").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        const all = document.querySelector(".all");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "aboutme.html";
        }, 500);
        setTimeout(() => {
            elem.style.display = "none";
            all.style.filter = "none";
        }, 700);
    });
    /*Shows spinner and blurs background when portfolio link in navbar is clicked, loads portfolio page after a timeout.*/
    $("#portfolionav").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        const all = document.querySelector(".all");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "portfolio.html";
        }, 500);
        setTimeout(() => {
            elem.style.display = "none";
            all.style.filter = "none";
        }, 700);
    });
    /*Shows spinner and blurs background when skills link in navbar is clicked, loads skills page after a timeout.*/
    $("#skillsnav").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        const all = document.querySelector(".all");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "skills.html";
        }, 500);
        setTimeout(() => {
            elem.style.display = "none";
            all.style.filter = "none";
        }, 700);
    });
    /*Shows spinner and blurs background when experience link in navbar is clicked, loads experience page after a timeout.*/
    $("#experiencenav").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        const all = document.querySelector(".all");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "experience.html";
        }, 500);
        setTimeout(() => {
            elem.style.display = "none";
            all.style.filter = "none";
        }, 700);
    });
    /*Shows spinner and blurs background when my life link in navbar is clicked, loads my life page after a timeout.*/
    $("#mylifenav").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        const all = document.querySelector(".all");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "mylife.html";
        }, 500);
        setTimeout(() => {
            elem.style.display = "none";
            all.style.filter = "none";
        }, 700);
    });
    /*Shows spinner and blurs background when contact link in navbar is clicked, loads contact page after a timeout.*/
    $("#contactnav").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        const all = document.querySelector(".all");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "contact.html";
        }, 500);
        setTimeout(() => {
            elem.style.display = "none";
            all.style.filter = "none";
        }, 700);
    });
    /*Shows spinner and blurs background when profile button is clicked, loads about me page after a timeout.*/
    $("#profileButton").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        const all = document.querySelector(".all");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "aboutme.html";
        }, 500);
        setTimeout(() => {
            elem.style.display = "none";
            all.style.filter = "none";
        }, 700);
    });
    /*Shows spinner and blurs background when about me button is clicked, loads about me page after a timeout.*/
    $("#aboutMe").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        const all = document.querySelector(".all");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "aboutme.html";
        }, 500);
        setTimeout(() => {
            elem.style.display = "none";
            all.style.filter = "none";
        }, 700);
    });
    /*Shows spinner and blurs background when portfolio button is clicked, loads portfolio page after a timeout.*/
    $("#portfolioButton").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        const all = document.querySelector(".all");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "portfolio.html";
        }, 500);
        setTimeout(() => {
            elem.style.display = "none";
            all.style.filter = "none";
        }, 700);
    });
    /*Shows spinner and blurs background when the first skill box button is clicked, loads the languages section of skills page after a timeout.*/
    $("#skillButton").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        const all = document.querySelector(".all");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "skills.html";
        }, 500);
        setTimeout(() => {
            elem.style.display = "none";
            all.style.filter = "none";
        }, 700);
    });
    /*Shows spinner and blurs background when the experience button is clicked, loads experience page after a timeout.*/
    $("#experienceButton").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        const all = document.querySelector(".all");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "experience.html";
        }, 500);
        setTimeout(() => {
            elem.style.display = "none";
            all.style.filter = "none";
        }, 700);
    });
    /*Shows spinner and blurs background when the contact button is clicked, loads contact page after a timeout.*/
    $("#contactBox").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        const all = document.querySelector(".all");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "contact.html";
        }, 500);
        setTimeout(() => {
            elem.style.display = "none";
            all.style.filter = "none";
        }, 700);
    });
    /*Shows spinner and blurs background when the my life button is clicked, loads my life page after a timeout.*/
    $("#myLifeButton").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        const all = document.querySelector(".all");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "mylife.html";
        }, 500);
        setTimeout(() => {
            elem.style.display = "none";
            all.style.filter = "none";
        }, 700);
    });
    $("#resume").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        const all = document.querySelector(".all");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "resume.html";
        }, 500);
        setTimeout(() => {
            elem.style.display = "none";
            all.style.filter = "none";
        }, 700);
    });
    $("#contact").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        const all = document.querySelector(".all");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "contact.html";
        }, 500);
        setTimeout(() => {
            elem.style.display = "none";
            all.style.filter = "none";
        }, 700);
    });
    /*Shows spinner and blurs background when the Discord button is clicked, my Discord profile after a timeout.*/
    $("#discord").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        const all = document.querySelector(".all");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "https://discordapp.com/users/1271304170753888327";
        }, 500);
        setTimeout(() => {
            elem.style.display = "none";
            all.style.filter = "none";
        }, 700);
    });
    /*Shows spinner and blurs background when the LinkedIn button is clicked, loads my LinkedIn profile page after a timeout.*/
    $("#linkedin").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        const all = document.querySelector(".all");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "https://www.linkedin.com/in/jacob-sanchez-b823b432a/";
        }, 500);
        setTimeout(() => {
            elem.style.display = "none";
            all.style.filter = "none";
        }, 700);
    });
    /*Shows spinner and blurs background when the GitHub button is clicked, loads my GitHub profile page after a timeout.*/
    $("#github").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        const all = document.querySelector(".all");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "https://github.com/jantelope10";
        }, 500);
        setTimeout(() => {
            elem.style.display = "none";
            all.style.filter = "none";
        }, 700);
    });
});
