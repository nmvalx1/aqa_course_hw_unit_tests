/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  const {name,age} = character
if(typeof name === 'string' && typeof age === 'number') {
  return characters.push(character)
}
else throw new Error (`Type of values is not a 'string' for ${name} or not 'number' for ${age}`)
};


function getCharacter(name) {
  // Ваш код

 const search = characters.find((value) => value.name === name);
  return search;
};


function getCharactersByAge(minAge) {
  if(typeof minAge !== 'number') throw new Error ('Type of argument is not a number')
 const age = characters.filter((value) => value.age >= minAge)
 return age
};


function updateCharacter(name,newCharacter) {
  if(typeof name !== 'string') throw new Error (`Type of argument ${name} is not a string`);
  if(typeof newCharacter !== 'object') throw new Error (`Type of argument ${newCharacter} is not object`);
  const foundCharacter = getCharacter(name);
 Object.assign(foundCharacter,newCharacter)
};


function removeCharacter(name) {
  if(!name) throw new Error (`Аргумент функции не может быть пустым`)

const result = characters.findIndex((value) => value.name === name)

if(result === -1) {
throw new Error (`${name} is not found !`)
}

characters.splice(result,1)

};
// console.log(removeCharacter('Fred'))
// console.log(characters)

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
