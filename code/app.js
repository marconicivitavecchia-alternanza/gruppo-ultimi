var init=function() {
    console.log("ciao sono Luigi con jquery");
    $("#utente>input")
    .attr("placeholder","@gmail.com");
    $("#password>input")
    .attr("placeholder","my password");
    
}


$(document).ready(init);