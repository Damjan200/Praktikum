$(document).ready(function(){
  $("#add").click(add);
});
var add  = () => {
  var eingabe1 = $("#eingabe1").val()
  var eingabe2 = $("#eingabe2").val()
  var e = parseInt(eingabe1) + parseInt(eingabe2);
   $("#ergebnis").val(e)
  //var message = document.getElementById("message");
  //message.innerText = "";
};
$(document).ready(function(){
  $("#sub").click(sub);
});
var sub = () => {
  var eingabe1 = $("#eingabe1").val();  
  var eingabe2 = $("#eingabe2").val();
  var e = parseInt(eingabe1) - parseInt(eingabe2);
  $("#ergebnis").val(e)
 // var message = document.getElementById("message"); 
 // message.innerText = ""; 
 // ergebnis.value = e;
}
$(document).ready(function(){
  $("#multiply").click(multiply);
});
var multiply = () => {
  var eingabe1 = $("#eingabe1").val();  
  var eingabe2 = $("#eingabe2").val();
  var e = parseInt(eingabe1) * parseInt(eingabe2);
  $("#ergebnis").val(e)
  //var message = document.getElementById("message");
//  message.innerText = "";
  //ergebnis.value = e;
}
$(document).ready(function(){
  $("#divide").click(divide);
});
var divide = () => {
  var eingabe1 = $("#eingabe1").val();
  var eingabe2 = $("#eingabe2").val();
  var message = document.getElementById("message");
 // if (eingabe2.value== "0"){
  //  message.innerText = "Division durch null nicht erlaubt";
  //}
  var e = parseInt(eingabe1) / parseInt(eingabe2);
  var ergebnis = $("#ergebnis").val(e);
}