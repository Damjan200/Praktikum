$(document).ready(function(){
    var  printName = (element) => {
        var KastenNr = $("#KastenNr").first().val();
        if ( KastenNr > 9 || KastenNr < 1 ){
         $("#message").html("Nummer zu klein/ zu gross");
        }  
        if (isNaN(KastenNr)) { alert('Bitte nur zahlen eingeben!') }
        else {
        var button   = $("#button" + KastenNr);
        $(element.target).text(button.text());
        var buttonBackground = button.css("background");
        $(element.target).css("background", buttonBackground);
        var background = button.css();
    }};

    $("button").click(printName);
});