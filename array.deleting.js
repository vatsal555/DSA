let arr = [43, 67, 89, 31, 40, 91, 51, 83];
let position = 3;

for (let i = position; i < arr.length - 1; i++) {
  //   console.log(arr[i]);
  arr[i] = arr[i + 1];
  //   console.log(arr[i]);
}
arr.length = arr.length - 1;

console.log(arr);

// function removeArrayElement() {
//   let arr = [43, 67, 89, 31, 40, 91, 51, 83];
//   let position = Number(document.getElementById("position").value);
//   for (let i = position; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr.length = arr.length - 1;
//   console.log(arr);
// }
