
function massivYigindisi(arr) {
  let yigindi = 0;
  for (let i = 0; i < arr.length; i++) {
    yigindi += arr[i];
  }
  return yigindi;
}
console.log(massivYigindisi([3, 8, -2, 10])); 
console.log(massivYigindisi([])); 
console.log(massivYigindisi([1, 2, 3, 4, 5])); 
console.log(massivYigindisi([-4, -6])); 
console.log(massivYigindisi([7])); 
