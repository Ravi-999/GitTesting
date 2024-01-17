// function throttle(f, time) {
//   let previousCall, currentCall;
//   return function (...args) {
//     currentCall = Date.now();
//     if (!previousCall || currentCall - previousCall > time) {
//       previousCall = currentCall;
//       f(...args);
//     }
//   };
// }
// const func = (x) => console.log("Im printing:- ", x);
// const funDef = throttle(func, 2000);

// let counter = 0;
// // setInterval(() => {
// //   funDef(counter);
// //   counter++;
// // }, 1000);

// function debounce(f, time) {
//   let timerID;
//   return function (...args) {
//     clearTimeout(timerID);
//     timerID = setTimeout(() => {
//       f(...args);
//     }, time);
//   };
// }

// const funDef2 = debounce(func, 2000);

// setInterval(() => {
//   funDef2(counter);
//   counter++;
// }, 3000);

// class EventEmitter {
//   constructor() {
//     this.eventMap = new Map();
//   }
//   on(eventName, callback) {
//     if (!this.eventMap[eventName]) {
//       this.eventMap[eventName] = [];
//     }
//     this.eventMap[eventName].push(callback);
//   }
//   remove(eventName, callback) {
//     if (!this.eventMap[eventName]) return;
//     const callbacks = this.eventMap[eventName].filter((cb) => cb != callback);
//     this.eventMap[eventName] = callbacks;
//   }
//   emit(eventName, ...data) {
//     this.eventMap[eventName].forEach((cb) => {
//       setTimeout(() => {
//         cb(...data);
//       }, 0);
//     });
//   }
// }

// const customFilter = (arr, cb) => {
//   let results = [];
//   arr.forEach((element) => {
//     if (cb(element)) results.push(element);
//   });
//   return results;
// };
// console.log(customFilter(arr, (item) => item % 2));
