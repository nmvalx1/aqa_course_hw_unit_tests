/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];
function countOfVowels (word){
  let vowels = 'aeiouyAEIOUY';
  let counter = 0;
  for(let el of word){
  if(vowels.includes(el)){
    counter++
  }
};
return counter
};

function sortedByVowels(wordsArr=[]) {
countOfVowels;
wordsArr.sort((a,b)=>{
  return  countOfVowels(a) - countOfVowels(b) 
})
return wordsArr;
}
let a = sortedByVowels(words)
 console.log(a)
export { sortedByVowels };
