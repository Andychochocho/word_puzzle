function wordPuzzle(word) {
  for (var i = 0; i < word.length; i++) {
    var firstPart = word.slice(0,i);
    var secondPart = word.slice((i+1),word.length);
    var replacement = replaceVowel(word[i]);
    word = firstPart + replacement + secondPart;
  } return word;
}

function isVowel(letter) {
  var vowel = ['a','e','i','o','u'];
  for (var i = 0; i < vowel.length; i++) {
    if (letter === vowel[i]) {
      return true;
    }
  }
  return false;
}

function replaceVowel(letter) {
  if (isVowel(letter)) {
    return "-";
  }
  return letter;
}
