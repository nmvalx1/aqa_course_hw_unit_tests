/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/

function mergeArrays(...someArr) {
  const voidArr = [];
  const result = voidArr.concat(...someArr);
  return result;
 };
  //console.log(mergeArrays([1,2], [3,4], [5,6]));
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
    function devideBy(sentence) {
      const arrayOfWords = sentence.split(' ');
      let result = '';
      
      for(let i = 0; i < arrayOfWords.length; i++) {
          const word = arrayOfWords[i];

          if (word.length === 0) continue;

          if(i === 0) {
              result += word.toLowerCase() 
          } else {
              const firstCharacter = word[0];
              const restCharacters = word.slice(1,word.length)
              const newWord = firstCharacter.toUpperCase() + restCharacters.toLowerCase()
              result += newWord
          }
         if(i !== (arrayOfWords.length - 1)) {
          result += "_"
      }
      }
      return result
  }
  let str = 'Aleksey is super engineer'
  console.log(devideBy(str));

  
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
    [0,1,1,2,3,5,8,13,21]
  */
function fibonacci(n) {
if(n < 0) throw new Error('Invalid value');
if(n === 0) return 0;
if(n === 1) return 1;  
  const elements = [0,1];

  for(let i = 2; i <= n; i++) {
      elements.push(elements[i - 1] + elements[i - 2])
  }

  return elements[n]
}
console.log(fibonacci(8))

export { mergeArrays, fibonacci, devideBy };
