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
// Вивести елементи з парними індексами.

function countIndex(arr) {
  for (let i = 0; i < arr.lenght; i++) {
    if (i % 2 === 0) {
      console.log(`arr[${i}] = ${arr[i]}`);
    }
  }
}

console.log(countIndex(numberArray1));

// 5 ---------------------------------
// Вивести лише парні елементи (парні числа діляться на 2 без залишку).

function countNumber(arr) {
  for (let i = 0; i < arr.lenght; i++) {
    if (arr[i] % 2 === 0 && arr[i] !== 0) {
      console.log(`arr[${i}] = ${arr[i]}`);
    }
  }
}
console.log(countNumber(numberArray));

// 6 ----------------------------------
//Вивести індекси нульових елементів (елемент дорівнює нулю).

function countNumberZerro(arr) {
  for (let i = 0; i < arr.lenght; i++) {
    if (arr[i] === 0) {
      console.log(`arr[${i}] = ${arr[i]}`);
    }
  }
}
console.log(countNumberZerro(numberArray));

// 7 ----------------------------------
// Підрахувати кількість нульових елементів.

function countNumberZerro1(arr) {
  for (let i = 0; i < arr.lenght; i++) {
    let zerro = 0;
    if (arr[i] === 0) {
      zerro++;
      console.log(`${zerro}`);
    }
  }
}
console.log(countNumberZerro1(numberArray));

// Методи перебору масивів (forEach, filter, map, findIndex, *some, *every).
// 8 ------------------------------------
//Отримати новий масив із заданого,
//який міститиме лише ненульові числа (-1, 5, 0, 9, -10 => -1, 5, 9, -10).

const arr = [-1, 5, 0, 9, -10];
console.log("arr :>> ", arr);

function isNoZerro(noZerro) {
  return noZerro !== 0;
}

const arrResult = arr.filter(isNoZerro);
console.log("arrResult :>> ", arrResult);

// 9 Отримати новий масив із заданого,
// який міститиме всі елементи вихідного,
// поділені на 100 (99, 5, 0, 9, 30 => 0.99, 0.05, 0, 0.09, 0.3).

const arr2 = [99, 5, 0, 9, 30];
console.log("arr2 :>> ", arr2);

function arrDivide(num) {
  return num / 100;
}

const arrResultDivide = arr.map(arrDivide);
console.log("object :>> ", arrResultDivide);

// 10 Вивести елементи масиву, зведені у куб.

const arr3 = [99, 5, 10, 9, 30];
function cub(num) {
  console.log("num ** 3 :>> ", num ** 3);
}

arr2.forEach(cub);

// 11 Визначити індекс елемента, квадрат якого дорівнює 100,
// і видалити його, або видати діагностичне повідомлення, якщо такого елементу не існує.

function square(num) {
  return num ** 2 === 100;
}

const squareNum = arr3.findIndex(square);
if (squareNum === -1) {
  console.log("Такого єлементу не існує");
} else {
  console.log("Індекс елемента :>> ", +arr3.splice(squareNum, 1), "Видалено");
}
console.log("arr2 :>> ", arr3);
