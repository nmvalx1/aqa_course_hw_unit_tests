// TO DO :
// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1.
// Обработайте промис методом .then и выведите результат его резолва в консоль
// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed".
//   Обработайте промис методом .catch и выведите результат его реджекта в консоль
// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then
// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат каждого промиса через .then
// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

//1 :
function delayTwoSeconds(callback) {
setTimeout(callback, 2000);
}

delayTwoSeconds(() => console.log(`Hello world after 2 sec`));

//2 :
const promWithResponse = new Promise((resolve, reject) => {
  resolve(1);
});
promWithResponse.then((resolveResult) => console.log(resolveResult));

//3 :
const promWithReject = new Promise((resolve, reject) => reject('Promise failed.'));
promWithReject.catch((rejectResult) => console.log(rejectResult));

//4 :
function promiseNumber(number) {
  return new Promise((resolve, reject) => resolve(number));
}

//5 :

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
.then((result) =>
  result.forEach((result) => console.log(result))
)
.catch(err => console.log('Some error',err))

//6 :

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((result) =>
  result.forEach((result) => console.log(`Status = ${result.status}, Value = ${result.value}`)));

// 7:

try {
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
.then((result) =>
  result.forEach((result) => console.log(result))
)
} catch (error) {
  console.error('Some erorr', error.error);
};
//
try {
    Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((result) =>
        result.forEach((result) => console.log(`Status = ${result.status}, Value = ${result.value}`)));
    } catch (error) {
      console.error('Some erorr', error.error);
    };

