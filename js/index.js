/*Uses jQuery, all functions within this function can be performed on document load.*/
/*Includes the initialization and function of each command.*/
$(document).ready(function() {
    /*Used for when back arrow in browser is pressed, refreshes if this is the page the user navigates back to.*/
    window.addEventListener("pageshow", function(event){
        if (event.persisted) {
            this.window.location.reload();
        }
    });
    /*For welcome button at the top of the page, opens welcome modal on click.*/
    $("#buttonWelcome").click(function(){
        $('#myModal').modal("show");
    });
    /*For close button inside welcome modal, closes welcome modal on click.*/
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
    /*Shows spinner and blurs background when about me box is clicked, loads about me page after a timeout.*/
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
    /*Shows spinner and blurs background when view button in portfolio box is clicked, loads portfolio page after a timeout.*/
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
    /*Shows spinner and blurs background when the view button in skills box is clicked, loads skills page after a timeout.*/
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
    /*Shows spinner and blurs background when the view button in experience box is clicked, loads experience page after a timeout.*/
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
    /*Shows spinner and blurs background when the contact box is clicked, loads contact page after a timeout.*/
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
    /*Shows spinner and blurs background when the view button in my life box is clicked, loads my life page after a timeout.*/
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
    /*Shows spinner and blurs background when resume button in footer is clicked, loads resume page after a timeout.*/
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
    })
    /*Shows spinner and blurs background when contact button in footer is clicked, loads contact page after a timeout.*/
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
