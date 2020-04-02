// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    contaVogais = 0;
    arrVogais = ['a', 'e', 'i', 'o', 'u'];
    strLower = str.toLowerCase();
    for (let i = 0; i < strLower.length; i += 1){
        if (arrVogais.indexOf(strLower[i]) != -1) {
            contaVogais++;
        }
    }
    return contaVogais;
}
module.exports = vowels;
