function groß(){
    console.log("groß");
};
$(document).ready(function(){
    $(".groß").click(groß);
    $(".mittel").click(mittel);
    $(".klein").click(klein)
    $("button").click(button)
});
function mittel(){
    console.log("mittel");
}
function klein(){
    console.log("klein");
}
function button(){
    console.log("button")
}

