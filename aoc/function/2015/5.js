const {
    getFiles
} = require('../commun');

function isNiceStringPart1(str) {
    const vowelsRegex = /[aeiou]/g;
    const consecutiveLettersRegex = /(.)\1/;
    const forbiddenStringsRegex = /(ab|cd|pq|xy)/;
  
    const hasThreeVowels = (str.match(vowelsRegex) || []).length >= 3;
    const hasConsecutiveLetters = consecutiveLettersRegex.test(str);
    const hasForbiddenStrings = forbiddenStringsRegex.test(str);
  
    return hasThreeVowels && hasConsecutiveLetters && !hasForbiddenStrings;
}

function isNiceStringPart2(str) {
    const pairOfLettersRegex = /(\w{2}).*\1/;
    const repeatedLetterWithOneBetweenRegex = /(\w).\1/;
  
    const hasPairOfLetters = pairOfLettersRegex.test(str);
    const hasRepeatedLetterWithOneBetween = repeatedLetterWithOneBetweenRegex.test(str);
  
    return hasPairOfLetters && hasRepeatedLetterWithOneBetween;
  }
  

function day5(year, day) {

    datas = getFiles(year, day).split('\n')

    goodPart1 = 0
    goodPart2 = 0

    datas.map(
        data => {
            if (isNiceStringPart1(data)) {
                goodPart1+=1
            }
            if (isNiceStringPart2(data)) {
                goodPart2+=1
            }
        }
    )

    return [goodPart1,goodPart2]

}


module.exports = {
    day5, 
};
  