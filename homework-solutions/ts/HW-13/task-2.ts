// Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true,
// если пароль соответствует следующим правилам:
//   - Пароль должен содержать хотя бы одну заглавную букву.
//   - Пароль должен содержать хотя бы одну букву в нижнем регистре.
//   - Пароль должен содержать хотя бы одну цифру.
//   - Пароль должен быть не менее 8 символов.
//   - Пароль не должен состоять из одних пробелов
// Функция должна возвращать false, если хотя бы одно из условий не выполнено.

enum LETTERS_AND_NUMBERS_OF_PASS {
  LOWER= 'abcdefghijklmnopqrstuvwxyz',
  UPPER= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  NUMBER= '1234567890',
}

// function validatePassword(pass:string): boolean {
//   let result: boolean;
//   // pass.trim();
//   const splittedpass: string[] = pass.split('');
//   if (!(splittedpass.length > 8)) {
//     return result = false;
//   }
//   if (!splittedpass.some((el) => LETTERS_AND_NUMBERS_OF_PASS.upper.split('').includes(el))) {
//     return result = false;
//   }
//   if (!splittedpass.some((el) => LETTERS_AND_NUMBERS_OF_PASS.lower.split('').includes(el))) {
//     return result = false;
//   }
//   if (!splittedpass.some((el) => LETTERS_AND_NUMBERS_OF_PASS.number.split('').includes(el))) {
//     return result = false;
//   }
//   if (splittedpass.some((el) => ' '.includes(el))) {
//     return result = false;
//   }
//   return result = true;
// }

// console.log(validatePassword('AlekseyNaumov1'));
function validatePassword(pass:string): boolean {
  const trimmed = pass.trim();
  if (trimmed.length <= 8) return false;
  return [LETTERS_AND_NUMBERS_OF_PASS.UPPER, LETTERS_AND_NUMBERS_OF_PASS.LOWER, LETTERS_AND_NUMBERS_OF_PASS.NUMBER].every((pattern) =>
      [...trimmed].some((char) => pattern.includes(char))
  );
}
console.log(validatePassword('AlekseyNaumov'));