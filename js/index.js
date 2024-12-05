$(document).ready(function() {
    /*Shows modal when tutorial button is clicked*/
    $("#buttonTutorial").click(function(){
        $('#myModal').modal("show");
    });
    
    /*Allows logo click to bring user to top of page*/
    $("#logo").click(function(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    $("#aboutmenav").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "aboutme.html";
        }, 500);
    });

    $("#portfolionav").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "portfolio.html";
        }, 500);
    });

    $("#skillsnav").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "skills.html";
        }, 500);
    });

    $("#experiencenav").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "experience.html";
        }, 500);
    });

    $("#mylifenav").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "mylife.html";
        }, 500);
    });

    $("#contactnav").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "contact.html";
        }, 500);
    });

    $("#profileButton").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "aboutme.html";
        }, 500);
    });

    $("#aboutMe").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "aboutme.html";
        }, 500); 
    });

    $("#portfolioButton").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "portfolio.html";
        }, 500); 
    });

    $("#skillBox1").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "skills.html";
        }, 500); 
    });

    $("#skillBox2").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "skills.html";
        }, 500); 
    });

    $("#skillBox3").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "skills.html";
        }, 500);
    });

    $("#experienceButton").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "experience.html";
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

    $("#myLifeButton").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "mylife.html";
        }, 500);
    });

    $("#discord").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "https://discordapp.com/users/1271304170753888327";
        }, 500);
    });

    $("#linkedin").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "https://www.linkedin.com/in/jacob-sanchez-b823b432a/";
        }, 500);
    });

    $("#github").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "https://github.com/jantelope10";
        }, 500);
    });
});
