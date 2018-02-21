$(document).ready(function(){
    $("#calc1").click(calc1);
    $("#calc2").click(calc2);
    $("#calc3").click(calc3);
    $("#calc4").click(calc4);
    var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] 
    //var Farben = ["blau", "grün", "rot","gelb","orange"]
   // for (Farben=0;Farben<6;Farben=Farben+1)
    //console.log(Farben)
    for (i=0;i<21;i=i+1){
    console.log(numbers[i])
}
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