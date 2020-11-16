# Random-Password-Generator
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
