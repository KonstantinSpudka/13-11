// 0 -------------------------------
// Створити числовий масив та проініціалізувати його (*випадковими числами).

const numberArray = [1, 2, 3, 4, 5];
console.log("object :>> ", numberArray);

// 1 ---------------------------------
// Видалити останній і початковий елемент з масиву, додати елемент до початку і кінця.
console.log("object :>> ", numberArray.pop());
console.log("object :>> ", numberArray.shift());
console.log("object :>> ", numberArray.unshift(0));
console.log("object :>> ", numberArray.push(6));

// 2 ---------------------------------
//Вивести розмір масиву.
console.log("object :>> ", numberArray.length);

// 3 ---------------------------------
//Зробити копію масиву.
const numberArray1 = [...numberArray];
console.log("object :>> ", numberArray1);

// 4 --------------------------------
