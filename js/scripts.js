function wordPuzzle(word) {

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
