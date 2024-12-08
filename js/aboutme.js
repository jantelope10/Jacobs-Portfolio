/*Uses jQuery, all functions within this function can be performed on document load.*/
/*Includes the initialization and function of each command.*/
$(document).ready(function() {
    /*Shows modal when tutorial button is clicked*/
    $("#buttonTutorial").click(function(){
        $('#myModal').modal("show");
    });
    /*Shows spinner and blurs background when logo is clicked, loads home page after a timeout.*/
    $("#logo").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
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
});