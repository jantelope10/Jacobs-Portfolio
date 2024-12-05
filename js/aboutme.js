$(document).ready(function() {
    $("#logo").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "index.html";
        }, 500);
    });

    $("#indexnav").click(function(){
        $(".all").css("filter", "blur(10px)");
        const elem = document.getElementById("spinner");
        elem.style.display = "inline";
        setTimeout(() => {
            window.location.href = "index.html";
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
});