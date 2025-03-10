/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
 */

function isPalindrom(word) {
  if(typeof word !== 'string'){
    return false;
  }
  
let isWordApalindrom;

let reverseWord = word.split('').reverse().join('');

if(reverseWord.toLowerCase() === word.toLowerCase()){
  isWordApalindrom = true;
} else {
  isWordApalindrom = false
}
return isWordApalindrom;
}
//console.log(isPalindrom(шалаш))

/*
 2. findLongestWords() 
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
if (typeof sentence !== 'string') return sentence=[];
if (sentence === '') return sentence=[];

const sentenceSplit = sentence.split(" ");
let longestWord = [];
let maxWordLength = 0; 


for(let i=0;i<sentenceSplit.length;i++){
const wordCurrent = sentenceSplit[i];
const wordCurrentLength = wordCurrent.length;

if (wordCurrentLength > maxWordLength){
maxWordLength = wordCurrentLength;
longestWord = [wordCurrent];
 } else if (wordCurrentLength === maxWordLength){
  longestWord.push(wordCurrent)
 }
}

return longestWord;
}

//console.log(findLongestWords("  Я изучаю JavaScript и TypeScript "));

export { isPalindrom, findLongestWords };
