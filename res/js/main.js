/*
***********  RANDOM PASSWORD GENERATOR  ***********
HOW TO USE:-
USE "RandomPassword()" FUNCTION TO GENERATE RANDOM PASSWORD.
THE FUNCTION WILL RETURN RANDOM STRING AND IT CAN BE USE TO SHOW OR IMPLEMENT IN CODE.
IT HAVE 5 PARAMETER "length, uppercase, lowercase, number, symbol"
DATATYPES OF THE PARAMETERS:-
========================================
||Parameters ||Datatype ||Example     ||
||-----------||---------||------------||
|| length    || int     || 1,3,7,9    ||
|| uppercase || boolean || true/false ||
|| lowercase || boolean || true/false ||
|| number    || boolean || true/false ||
|| symbol    || boolean || true/false ||
========================================
FIRST PARAMETER (length) DEFINE THE RANDOM PASSWORD LENGTH. IF PARAMETER NOT SET, DEFAULT LENGTH WILL BE 10.
OTHER PARAMETER (uppercase, lowercase, number, symbol) DEFINE THE RANDOM PASSWORD ELEMENTS. IF GIVEN "true", THEY WILL ADD INTO RANDOM PASSWORD IF FALSE OR NOT SET THEY WILL NOT ADD INTO PASSWORD. BUT THEY WILL ADD INTO THE PASSWORD IF NO ONE IS DEFINED.
EXAMPLE:
RandomPassword(10, true, false, true, true);

*/
function generate() {
  let length = document.getElementById("length").value;
  let uppercase = document.getElementById("uppercase").checked;
  let lowercase = document.getElementById("lowercase").checked;
  let number = document.getElementById("number").checked;
  let symbol = document.getElementById("symbol").checked;
  let randomPass = RandomPassword(length, uppercase, lowercase, number, symbol);
  document.getElementById("password").innerHTML=randomPass.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");;
  document.getElementById("hidden").value=randomPass;
}
generate();
document.getElementById("regen").addEventListener("click", function(){
  generate();
});
document.getElementById("copy").addEventListener("click", function(){
  let hidden = document.getElementById("hidden");
  hidden.select();
  hidden.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");
  alert("Password Copied!");
});