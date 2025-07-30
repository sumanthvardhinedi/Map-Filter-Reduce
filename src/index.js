// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.

// const nums = numbers.map(function (x) {
//   return x * 2;
// });
// //Filter - Create a new array by keeping the items that return true.
// const arr = numbers.filter(function (x) {
//   return x > 12;
// });
// // console.log(arr);
// // var newnumber = [];
// // newnumber.forEach(function (x) {
// //   if (x > 12) {
// //     newnumber.push(x);
// //   }
// // });
// //Reduce - Accumulate a value by doing something to each item in an array.
// numbers.reduce(function (Accumulator, x) {
//   //Accumulator means intialsing like newnum=0;
//   return Accumulator + x;
// });
// // var newnum = 0;
// // numbers.forEach(function (x) {
// //   newnum += x; //finding sum.
// // });

// //Find - find the first item that matches from an array.
// const num = numbers.find(function (x) {
//   return x > 10; //breaks immediatley when find the x>10;i this case returns 56
// });
// console.log(num);
// //FindIndex - find the index of the first item that matches.
// const y = numbers.findIndex(function (x) {
//   return x > 10; //breaks immediatley when find the x>10  and returns index ;in this case returns 1
// });
// console.log(y);
import Emojipedia from "./emojipedia";

const emoj = Emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(emoj);
