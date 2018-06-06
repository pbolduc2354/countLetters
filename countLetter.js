function countLetters(string) {
  var lettre = string.split('');
  // return lettre
  var compilation = {};

  for (var i = 0; i < lettre.length; i++) {
    compilation[lettre[i]] = lettre[i];

  }return compilation
}



console.log(countLetters("lighthouse"));