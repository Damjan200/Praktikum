$(document).ready(function(){
    var  printName = (element) => {
        var KastenNr = $("#KastenNr").first().val();
        var button   = $("#button" + KastenNr);
        $(element.target).text(button.text());
        var buttonBackground = button.css("background");
        $(element.target).css("background", buttonBackground)
        var background = button.css();
    };

    $("button").click(printName);
});