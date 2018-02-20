$(document).ready(function(){
    $("#calc1").click(calc1);
    $("#calc2").click(calc2);
    $("#calc3").click(calc3);
    $("#calc4").click(calc4);
})
function minus(a,b){
 var m = a-b;
 return m;
}
function multiply(a,b){
    var n = a*b;
    return n;
}
function add(a,b){
    var d = a+b;
    return d;
}
function divide(a,b){
    var k = a/b;
    return k;
}

    var calc1 = () => {
    let result = multiply(7,13);
    result = add(91,4);
    result = add(95,8);
    $("#ergebnis").val(result);
    };
    var calc2 = () => {
    let b = multiply(3,5);
    let result = minus(8,2);
    result = multiply(6,15);
    $("#ergebnis").val(result);
}
    var calc3 = () => {
    let result = 16/2;
    result =multiply(8,3);
    result = add(24,1);
    $("#ergebnis").val(result);
}
    var calc4 = () => {
    let result = add(3,3);
    result =multiply(6,1) ;
    result = divide(6,2);
    $("#ergebnis").val(result);
}