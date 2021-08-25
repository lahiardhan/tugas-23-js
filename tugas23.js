const numbers = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
let filterNum = numbers.filter(nums => {
   return nums > 15
});
console.log(filterNum);