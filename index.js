"use strict";
// 1
// const button = document.querySelector("#button");
// const clickButton = () => {
//   alert("Hello World!");
// };
// button.addEventListener("click", clickButton);
//2
// const number = parseInt(Math.random() * (100 - 1) + 1);
// const input = document.querySelector("#guessField");
// const text = document.querySelector("#guessResult");
// const button = document.querySelector("#button");
// const checkGuess = () => {
//   if (input.value === toString(number)) {
//     text.textContent = "Вірно";
//   } else {
//     text.textContent = "не вірно";
//   }
// };
// button.addEventListener("click", checkGuess);
//3
// const text = document.querySelector("#text");
// let click = 0;
// const clicker = () => {
//   click += 1;
//   text.textContent = click;
// };
// document.body.addEventListener("click", clicker);
// console.log(click);
//4
// const newArr = [];
// const applyCallbackToEachElement = (arr, callback) => {
//   for (const element of arr) {
//     newArr.push(callback(element));
//   }
//   return newArr;
// };
// const arr = [1, 2, 3, 4, 5];
// const squareCallback = (element) => {
//   element = element ** 2;
//   return element;
// };
// const result = applyCallbackToEachElement(arr, squareCallback);
// console.log(result);
//5
const calculateDiscountedPrice = (price, discount, callback) => {
  return callback(price, discount);
};
const showDiscountPrice = (price, discount) => {
  const discountPrice = (price / 100) * discount;
  return price - discountPrice;
};
console.log(calculateDiscountedPrice(100, 10, showDiscountPrice));
