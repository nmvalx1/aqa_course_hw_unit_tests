/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/
const minAge = 18;
const maxAge = 60;
  
  let age = '61';
  const typeOfAge = Number(age);

if (age < minAge ) 
  { 
    if (typeof typeOfAge !== typeof age) 
  {
    +age
  }
  console.log("You don't have access cause your age is " + age + " It's less then 18")
}
  else if (age >= minAge && age < maxAge) 
{
  if (typeof typeOfAge !== typeof age) 
  {
    +age
  }
  console.log("Welcome !")
}
else if (age >= maxAge) 
{
   if (typeof typeOfAge !== typeof age) 
  {
    +age
   }
   console.log("Keep calm and look Culture channel")
} 
else
{
  if (typeof typeOfAge !== typeof age) 
  {
    console.log('Incorrect data type')
  }
  console.log("Technical work")
};