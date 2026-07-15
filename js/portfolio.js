/*Uses jQuery, all functions within this function can be performed on document load.*/
/*Includes the initialization and function of each command.*/
$(document).ready(function() {
    /*Used for when back arrow in browser is pressed, refreshes if this is the page the user navigates back to.*/
    window.addEventListener("pageshow", function(event){
        if (event.persisted) {
            this.window.location.reload();
        }
    });

    /*Navbar functionality that hides dark blue banner portion when open, shows when closed.*/
    let clickCount = 0;
    $("#navicon").click(function(){
        clickCount++;
        if (clickCount % 2 !== 0) {
            $(".navbar").css("background", "linear-gradient(to right, #0e0b1f, #1f1b48)");
            $(".navbar").css("position", "sticky");

        } else {
            $(".navbar").css("background", "#ffffff");
            $(".navbar").css("background-color", "rgb(12, 0, 44)");
            setTimeout(function() {
                $(".navbar").css("position", "fixed");
            }, 150);
        }
    });
    /*For more button inside first project box (Jacob's Portfolio), opens project 1 modal on click.*/
    $("#project1More").click(function(){
        $('#project1Modal').modal("show");
    });
    /*For close button inside project 1 modal, closes project 1 modal on click.*/
    $("#moreModalButton").click(function(){
        $('#project1Modal').modal("hide");
    });
    /*Shows spinner and blurs background when clicked, loads experience page after a timeout.*/
    $("#internLink").click(function(){
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
    /*For github button inside third project box (Chef Claude), links to github repo on click.*/
    $("#project3More").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        const all = document.querySelector(".all");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "https://github.com/jantelope10/Chef-Claude";
        }, 500);
        setTimeout(() => {
            elem.style.display = "none";
            all.style.filter = "none";
        }, 700);
    });
    /*For github button inside fourth project box (Emergency Room Simulator), links to github repo on click.*/
    $("#project4More").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        const all = document.querySelector(".all");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "https://github.com/jantelope10/EmergencyRoom---Priority-Queue";
        }, 500);
        setTimeout(() => {
            elem.style.display = "none";
            all.style.filter = "none";
        }, 700);
    });
    /*For github button inside fifth project box (Tic Tac Toe), links to github repo on click.*/
    $("#project5More").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        const all = document.querySelector(".all");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "https://github.com/jantelope10/TicTacToe-SingleandMultiplayer";
        }, 500);
        setTimeout(() => {
            elem.style.display = "none";
            all.style.filter = "none";
        }, 700);
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
    /*For projects button below title header, scrolls screen down to projects section on click.*/
    $("#projectButton").click(function(){
        const projectTarget = $("#projects-section").offset().top;
        window.scrollTo({ top: projectTarget, behavior: 'smooth' });
    });
    /*For achievements button below title header, scrolls screen down to achievements section on click.*/
    $("#achievementButton").click(function(){
        const achievementTarget = $("#achievements-section").offset().top;
        window.scrollTo({ top: achievementTarget, behavior: 'smooth' });
    });
    /*For more button below title header, scrolls screen down to more section on click.*/
    $("#moreButton").click(function(){
        const moreTarget = $("#more-section").offset().top;
        window.scrollTo({ top: moreTarget, behavior: 'smooth' });
    });
    /*For AWS certification button between achievement box 1 and 2, loads my AWS certification proof page on click.*/
    $("#certificationButton").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        const all = document.querySelector(".all");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "https://www.credly.com/badges/38ef228e-bc81-4ea7-885c-185f5fe7a411/public_url";
        }, 500);
        setTimeout(() => {
            elem.style.display = "none";
            all.style.filter = "none";
        }, 700);
    });
    /*Shows spinner and blurs background when more box 1 (about me) is clicked, loads about me page after a timeout.*/
    $("#more1").click(function(){
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
    /*Shows spinner and blurs background when more box 2 (skills) is clicked, loads skills page after a timeout.*/
    $("#more2").click(function(){
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
    /*Shows spinner and blurs background when more box 3 (experience) is clicked, loads experience page after a timeout.*/
    $("#more3").click(function(){
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