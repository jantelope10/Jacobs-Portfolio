$(document).ready(function() {
    /*Shows modal when tutorial button is clicked*/
    $("#buttonTutorial").click(function(){
        $('#myModal').modal("show");
    });
    
    /*Allows logo click to bring user to top of page*/
    $('.logo').click(function(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
    });
});