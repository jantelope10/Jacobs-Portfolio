/*Uses jQuery, all functions within this function can be performed on document load.*/
/*Includes the initialization and function of each command.*/
$(document).ready(function() {
    
    /*Shows modal when tutorial button is clicked*/
    $("#buttonTutorial").click(function(){
        $('#myModal').modal("show");
    });
    $("#myModalButton").click(function(){
        $('#myModal').modal("hide");
    });
    $("#personButton").click(function(){
        const elem = document.getElementById("personButton");
        elem.style.backgroundColor = "#e3bbff";
        $('#personModal').modal("show");
    });
    $("#personModalButton").click(function(){
        $('#personModal').modal("hide");
    });
    $("#hobbiesButton").click(function(){
        const elem = document.getElementById("hobbiesButton");
        elem.style.backgroundColor = "#e3bbff";
        $('#hobbiesModal').modal("show");
    });
    $("#hobbiesModalButton").click(function(){
        $('#hobbiesModal').modal("hide");
    });
    $("#schoolButton").click(function(){
        const elem = document.getElementById("schoolButton");
        elem.style.backgroundColor = "#e3bbff";
        $('#schoolModal').modal("show");
    });
    $("#schoolModalButton").click(function(){
        $('#schoolModal').modal("hide");
    });
    /*Shows spinner and blurs background when logo is clicked, loads home page after a timeout.*/
    $("#logo").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            $(".all").css("filter", "");
            $("#spinner").css("display", "none");
        }, 500);
        setTimeout(() => {
            window.location.href = "index.html";
        }, 500);
    });
    /*Shows spinner and blurs background when home link in navbar is clicked, loads home page after a timeout.*/
    $("#indexnav").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "index.html";
        }, 500);
    });
    /*Shows spinner and blurs background when portfolio link in navbar is clicked, loads portfolio page after a timeout.*/
    $("#portfolionav").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "portfolio.html";
        }, 500);
    });
    /*Shows spinner and blurs background when skills link in navbar is clicked, loads skills page after a timeout.*/
    $("#skillsnav").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "skills.html";
        }, 500);
    });
    /*Shows spinner and blurs background when experience link in navbar is clicked, loads experience page after a timeout.*/
    $("#experiencenav").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "experience.html";
        }, 500);
    });
    /*Shows spinner and blurs background when my life link in navbar is clicked, loads my life page after a timeout.*/
    $("#mylifenav").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "mylife.html";
        }, 500);
    });
    /*Shows spinner and blurs background when contact link in navbar is clicked, loads contact page after a timeout.*/
    $("#contactnav").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "contact.html";
        }, 500);
    });
    
    $("#moreBox1").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "portfolio.html";
        }, 500);
    });
    $("#moreBox2").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "skills.html";
        }, 500);
    });
    $("#moreBox3").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "mylife.html";
        }, 500);
    });
    $("#contact").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "contact.html";
        }, 500);
    });
    /*Shows spinner and blurs background when the Discord button is clicked, my Discord profile after a timeout.*/
    $("#discord").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "https://discordapp.com/users/1271304170753888327";
        }, 500);
    });
    /*Shows spinner and blurs background when the LinkedIn button is clicked, loads my LinkedIn profile page after a timeout.*/
    $("#linkedin").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "https://www.linkedin.com/in/jacob-sanchez-b823b432a/";
        }, 500);
    });
    /*Shows spinner and blurs background when the GitHub button is clicked, loads my GitHub profile page after a timeout.*/
    $("#github").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "https://github.com/jantelope10";
        }, 500);
    });
});