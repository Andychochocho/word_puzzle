describe('isVowel', function() {
  it("will return true if the given letter is a vowel",function(){
    expect(isVowel('a')).to.eql(true);
  });
  it("will return false if the given letter is not a vowel",function(){
    expect(isVowel('b')).to.eql(false);
  });
});

describe('replaceVowel',function() {
  it("will return a dash in replacement of a vowel",function(){
    expect(replaceVowel('e')).to.eql('-');
  });
  it("will not return a dash in replacement of a consonant", function(){
    expect(replaceVowel('f')).to.eql('f');
  })
});

describe('wordPuzzle',function(){
  it("will return phrase with all the vowels replaced with -",function(){
    expect(wordPuzzle('George Washington')).to.eql('G--rg- W-sh-ngt-n');
  })
})
