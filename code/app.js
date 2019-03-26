var entra=function() {
    console.log("Hai cliccato su accedi");
    var utente = $("#utente>input").val();
    console.log("utente: "+ utente);
    var password = $("#password>input").val();
    console.log("password: "+ password);
    var auth = btoa(utente+password);
    console.log("auth: "+auth,
    accediRisposta);

    $.get("http://10.3.0.205:3000/login?auth="+auth); //chiamata http
}    
 
var accediRisposta=function(data){
    console.log(data);
    alert(data);
}

var init=function(){
    console.log("Ciao");
    $("#utente>input")
    .attr("placeholder","e-mail");
    $("#password>input")
    .attr("placeholder", "password");

    $("#entra>button").on("click",entra);
    
}


$(document).ready(init);