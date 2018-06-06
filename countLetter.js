function countLetters(string) {
  var lettre = string.split(" ").join("").split("");
  var compilation = {};


  for (var i = 0; i < lettre.length; i++) {
    if (compilation[lettre[i]] == undefined) {
       compilation[lettre[i]] = 1;
    } else {
      compilation[lettre[i]] = compilation[lettre[i]] + 1;
    }
  }return compilation
}



console.log(countLetters("lighthouse in the house"));