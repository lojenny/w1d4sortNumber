var array = [10, 2, 5, 1, 9];
array.sort();
var numSort = function(a, b){
  return a - b;
};
console.log(array.sort(numSort));