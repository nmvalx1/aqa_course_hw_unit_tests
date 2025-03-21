/*
  У вас есть массив чисел. 
  Напиши функцию countOccurrences, которая принимает массив чисел и
  возвращает объект с подсчётом каждого числа.
  const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
  
  Ожидается: { 1: 1, 2: 2, 3: 1, 4: 3, 5: 1 }
*/

function countOccurrences(arr) {
  
const resultObj = {};

function Count(el) {
 if (resultObj[el] === undefined) {
 resultObj[el] = 1; 
 } 
 else resultObj[el]++ 
}
arr.forEach(el => Count(el));

return resultObj;
}
// const numbers = [1, 2, 2, 3, 4, 4, 4, 5]
// const a = countOccurrences(numbers)
// console.log(a)

export { countOccurrences };
