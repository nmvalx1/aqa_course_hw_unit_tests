/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

let resultUnique=[];
let resultNull;


const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];


for(let i=0;i<myPizzasT1.length;i++){
  if(!competitorPizzas.includes(myPizzasT1[i])){
    resultUnique.push(myPizzasT1[i])
  } 
};

let resultUnique2=[]
for(let j=0;j<myPizzasT2.length;j++){
  if(!competitorPizzas.includes(myPizzasT2[j])){
    resultUnique2.push(myPizzasT2[j])
  } 
};

  if(resultUnique2.length === 0){
resultNull = null
  } else {
    resultNull = resultUnique2
  }

export {resultNull,resultUnique}