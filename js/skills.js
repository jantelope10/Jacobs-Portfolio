/*Uses jQuery, all functions within this function can be performed on document load.*/
/*Includes the initialization and function of each command.*/
$(document).ready(function() {
    /*Used for when back arrow in browser is pressed, refreshes if this is the page the user navigates back to.*/
    window.addEventListener("pageshow", function(event){
        if (event.persisted) {
            this.window.location.reload();
        }
    });
    /*For first skill box (languages) in skills section, opens languages box modal on click.*/
    $("#skills1").click(function(){
        $('#languagesModal').modal("show");
    });
    /*For close button inside languages box modal, closes languages box modal on click.*/
    $("#languagesModalButton").click(function(){
        $('#languagesModal').modal("hide");
    });
    /*For second skill box (technical) in skills section, opens technical box modal on click.*/
    $("#skills2").click(function(){
        $('#technicalModal').modal("show");
    });
    /*For close button inside technical box modal, closes technical box modal on click.*/
    $("#technicalModalButton").click(function(){
        $('#technicalModal').modal("hide");
    });
    /*For third skill box (general) in skills section, opens general box modal on click.*/
    $("#skills3").click(function(){
        $('#generalModal').modal("show");
    });
    /*For close button inside general box modal, closes general box modal on click.*/
    $("#generalModalButton").click(function(){
        $('#generalModal').modal("hide");
    });
    /*Shows spinner and blurs background when logo is clicked, loads home page after a timeout.*/
    $("#logo").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        const all = document.querySelector(".all");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "index.html";
        }, 500);
        setTimeout(() => {
            elem.style.display = "none";
            all.style.filter = "none";
        }, 700);
    });
    /*Shows spinner and blurs background when home link in navbar is clicked, loads home page after a timeout.*/
    $("#indexnav").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        const all = document.querySelector(".all");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "index.html";
        }, 500);
        setTimeout(() => {
            elem.style.display = "none";
            all.style.filter = "none";
        }, 700);
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
    /*Shows spinner and blurs background when more box 1 (portfolio) is clicked, loads portfolio page after a timeout.*/
    $("#moreBox1").click(function(){
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
    /*Shows spinner and blurs background when more box 2 (experience) is clicked, loads experience page after a timeout.*/
    $("#moreBox2").click(function(){
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
    /*Shows spinner and blurs background when more box 3 (my life) is clicked, loads my life page after a timeout.*/
    $("#moreBox3").click(function(){
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
    });
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
