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

console.log(countIndex(numberArray));

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

// 8 ------------------------------------
//Вивести числа від 2 до 16 парні

for (let i = 0; i <= 16; i += 2) {
  console.log(i);
}
