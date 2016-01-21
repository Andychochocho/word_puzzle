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
});
