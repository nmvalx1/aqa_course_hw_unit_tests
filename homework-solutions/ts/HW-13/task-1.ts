// 1. Объявите переменные для каждого из следующих типов данных с явным указанием типа после символв "двоеточие":
//     - Число: переменная num1, значение 42.
//     - Строка: переменная str, значение "Hello, TypeScript!".
//     - Булево: переменная isComplete, значение true.
//     - Массив чисел: переменная numbers, значения [1, 2, 3, 4, 5].
//     - Массив строк: переменная cities, значения ["Minsk", "Warsaw", "London"].
//     - Объект: переменная person, объект с полями name: "Alice", age: 30, city: "Minsk".

// 2. Создайте псевдонимы типов:
//     - Тип User, который содержит поля name (строка), age (число), и опциональное поле email (строка).
//     - Тип Grade, который может принимать одно из значений: 'junior' | 'middle' | 'senior'.

// 3. Создайте интерфейс для объекта Car, который должен содержать поля:
//     - brand (строка),
//     - model (строка),
//     - опциональное поле year (число).

// 4. Создайте интерфейсы для:
//     - Интерфейса Address с полями street (строка), city (строка), и zipCode (число).
//     - Интерфейса FullAddress, который наследует интерфейс Address и добавляет поле country (строка).

// 5. Создайте объединение типов:
//     - Тип Product с полями id (число), name (строка), и price (число).
//     - Тип DiscountedProduct, который объединяет Product и добавляет поле discount (число).

// 6. Создайте функцию calculateDiscount, которая принимает объект типа DiscountedProduct и возвращает итоговую цену с учетом скидки.
//    Затипизировать явно и входные и выходные данные. Используйте следующие данные:

//    const product: DiscountedProduct = {
//     id: 1,
//     name: "Laptop",
//     price: 1000,
//     discount: 10
//   };

//   console.log(calculateDiscount(product));
//   // Ожидается: 900

//1 :
const num1: number = 42;

const str: string = 'Hello,TypeScript!';

const isComplete: boolean = true;

const numbers: number[] = [1, 2, 3, 4, 5];

//const cities:  string[] = ['Minsk', 'Warsaw', 'London'];
const cities: readonly string[] = ['Minsk', 'Warsaw', 'London'];

const person: { name: string; age: number; city: string } = {
  name: 'Alice',
  age: 30,
  city: 'Minsk',
};

//2 :
type User = {
name: string,
age:number,
email?:string,
};
type Grade = 'junior' | 'middle' | 'senior';

//
enum HTTP_STATUS_ERROR {
BAD_REQUEST = 400,
UNAUTORIZADE = 401,
NOT_FOUND = 404,
SERVER_ERROR = 500,   
}
let a: HTTP_STATUS_ERROR = HTTP_STATUS_ERROR.BAD_REQUEST
//

 
//3 :
interface ICar {
    brand:string,
    model:string,
    year?:number,
};


//4 : 
interface IAddress {
    street:string,
    city:string,
    zipCode:number,    
    };


interface IFullAddress extends IAddress {
country:string,   
};

//5:
type Product ={
    id:number,
    name:string,
    price:number,
}
type DiscountedProduct = Product & {discount:number}; 


//6 :
   const product: DiscountedProduct = {
    id: 1,
    name: "Laptop",
    price: 1000,
    discount: 10
  };


function calculateDicount(product: DiscountedProduct): number {
  let finalPrice: number = product.price - product.price * (product.discount / 100);
  return finalPrice;
}

console.log(calculateDicount(product));




