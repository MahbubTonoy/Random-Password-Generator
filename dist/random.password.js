function RandomPassword(length, uppercase, lowercase, number, symbol) {
  let characters = "";
  if(uppercase == undefined && lowercase == undefined && number == undefined && symbol == undefined) {
    characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_-+=/?.,<>;'";
  }
  if(uppercase==true){
    characters+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if(lowercase==true){
    characters+="abcdefghijklmnopqrstuvwxyz";
  }
  if(number==true){
    characters+="1234567890";
  }
  if(symbol==true){
    characters+="!@#$%^&*()_-+=/?.,<>;'";
  }
  const charLength = characters.length;
  let randomCharacter = "";
  if(length == undefined || length == "") {
    length = 10;
  }
  for(i=0; i<length; i++) {
    randomCharacter += characters.charAt(Math.round(Math.random()*charLength));
  }
  return randomCharacter;
}