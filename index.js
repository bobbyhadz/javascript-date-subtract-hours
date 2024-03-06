// EXAMPLE 1 - Subtract Hours from a Date in JavaScript

function subtractHours(date, hours) {
  date.setHours(date.getHours() - hours);

  return date;
}

// ✅ Subtract 1 hour from the current date
const result1 = subtractHours(new Date(), 1);
console.log(result1); // 👉️ 2023-07-27T15:48:05.075Z

// ✅ Subtract 2 hours from a different date
const date = new Date('2024-03-18T13:30:10.000Z');
const result2 = subtractHours(date, 2);
console.log(result2); // 👉️ 2024-03-18T11:30:10.000Z

// ------------------------------------------------------------------

// // EXAMPLE 2 - Subtract Hours from a Date without mutation

// function subtractHours(date, hours) {
//   const dateCopy = new Date(date);

//   dateCopy.setHours(dateCopy.getHours() - hours);

//   return dateCopy;
// }

// // ✅ Subtract 2 hours from a different date
// const date = new Date('2024-03-18T13:30:10.000Z');
// const result = subtractHours(date, 5);
// console.log(result); // 👉️ 2024-03-18T08:30:10.000Z

// console.log(date); // 👉️ 2024-03-18T13:30:10.000Z

// ------------------------------------------------------------------

// // EXAMPLE 3 - Subtract Hours from a Date using date-fns

// import {subHours} from 'date-fns';

// const date = new Date('2024-03-18T13:30:10.000Z');

// const result1 = subHours(date, 6);
// console.log(result1); // 👉️ 2024-03-18T07:30:10.000Z

// const result2 = subHours(date, 10);
// console.log(result2); // 👉️ 2024-03-18T03:30:10.000Z

// console.log(date); // 👉️ 2024-03-18T13:30:10.000Z

// ------------------------------------------------------------------

// // EXAMPLE 4 - Subtract Hours from a Date using moment.js

// import moment from 'moment';

// const date = new Date('2024-03-18T13:30:10.000Z');

// const result1 = moment(date).subtract(6, 'hours');
// console.log(result1); // 👉️ 2024-03-12T06:30:10.000Z

// const result2 = moment(date).subtract(10, 'hours');
// console.log(result2); // 👉️ 2024-03-08T06:30:10.000Z

// console.log(date); // 👉️ 2024-03-18T13:30:10.000Z
