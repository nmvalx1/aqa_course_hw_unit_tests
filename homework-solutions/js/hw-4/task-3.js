/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/
const minAge = 18;
const maxAge = 60;
  
let age = '18'

if (age && isNaN(age))  {
  console.log('Incorrect data type')
}
else { age = Number(age);
  if(age<minAge) {
  console.log("You don't have access cause your age is " + age + " It's less then ")
} else if (age >= minAge && age < maxAge) {
  console.log('Welcome !');
} else if (age >= maxAge) {
  console.log('Keep calm and look Culture channel');
} else {
  console.log('Technical work');
}
}

console.log(typeof age)
