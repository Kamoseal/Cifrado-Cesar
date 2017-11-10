function ciper(str){
  var sentence = "";
  for (var i=0; i< str.length; i++){
    var j= str[i];

    if ((j.charCodeAt(0)>= 65) && (j.charCodeAt(0)<=90)){
      var k= j.charCodeAt(0)-65;
      sentence += String.fromCharCode(((k + 33)%26)+65);
    }
    else if ((j.charCodeAt(0) >= 97) && (j.charCodeAt(0)<=122)){
      var l= j.charCodeAt(0)-65;
      sentence += String.fromCharCode(((l + 33)%26)+65);
    }
    else if (j.charCodeAt(0)===32){
      var m = j.charCodeAt(0);
      sentence += String.fromCharCode(m);
    }
    else {
      alert ("Ingresa una opcion valida");
    }
 }
    alert (sentence);
    console.log(sentence)
 }
ciper(prompt ("Ingresa frase:"))
