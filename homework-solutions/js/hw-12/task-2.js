// Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
//    Внутри функции шлите POST запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
//    После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
//    Преобразуйте респонс из JSON в объект
//    Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
//    Функция должна возвращать полученный объект из респонса
//    Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена

const toDo = {
  userId: 66,
  id: 201,
  title: 'Hello World111',
  completed: false,
};

let url = 'https://jsonplaceholder.typicode.com/todos';

async function createTodo(body) {
  try {
    const request = await fetch(`${url}`, {
      method: 'post',
      headers: {},
      body: JSON.stringify(body),
    });
    if (request.status !== 201) {
      throw new Error(`Status response is not 201`);
    }

    const responseFromJsonInObject = await request.json();
    // for(const k in body){
    //   if(body[k] !== responseFromJsonInObject[k]){
    //     throw new Error('Если данные не равны в каком-то ключе - кинуть ошибку')
    //   }
    // }
    if(body.id !== responseFromJsonInObject.id ) {
      throw new Error('Если данные не равны в каком-то ключе - кинуть ошибку')
    }

   return console.log(responseFromJsonInObject)
    
  } catch (err) {
    console.error(err);
  } finally {
    console.log('Работа функции завершена');
  }
}

 createTodo(toDo)

