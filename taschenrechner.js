var add  = () => {
  var eingabe1 =  document.getElementById("eingabe1");  
  var eingabe2 = document.getElementById("eingabe2");
  var e = parseInt(eingabe1.value) + parseInt(eingabe2.value);
  var ergebnis = document.getElementById("ergebnis");
  var message = document.getElementById("message");
  message.innerText = "";
  ergebnis.value = e;
};
var sub = () => {
  var eingabe1 =  document.getElementById("eingabe1");  
  var eingabe2 = document.getElementById("eingabe2");
  var e = parseInt(eingabe1.value) - parseInt(eingabe2.value);
  var ergebnis = document.getElementById("ergebnis");
  var message = document.getElementById("message"); 
  message.innerText = ""; 
  ergebnis.value = e;
}
var multiply = () => {
  var eingabe1 =  document.getElementById("eingabe1");  
  var eingabe2 = document.getElementById("eingabe2");
  var e = parseInt(eingabe1.value) * parseInt(eingabe2.value);
  var ergebnis = document.getElementById("ergebnis");
  var message = document.getElementById("message");
  message.innerText = "";
  ergebnis.value = e;
}
var divide = () => {
  var eingabe1 =  document.getElementById("eingabe1");  
  var eingabe2 = document.getElementById("eingabe2");
  var message = document.getElementById("message");
  if (eingabe2.value== "0"){
    message.innerText = "Division durch null nicht erlaubt";
  }
  var e = parseInt(eingabe1.value) / parseInt(eingabe2.value);
  var ergebnis = document.getElementById("ergebnis");
  ergebnis.value = e;
}