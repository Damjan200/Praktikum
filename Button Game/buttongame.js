$(document).ready(function(){
    var  printName = (element) => {
        //var  blue  = $(".1blue");
        console.log($(element.target).text());
    };

    $("button").click(printName);
});