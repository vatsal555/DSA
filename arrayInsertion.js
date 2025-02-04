let arr = [60, 30, 45, 78, 92, 14, 36, 56];
let newArray = 70;
let position = 2;

// for (let i = arr.length - 1; i >= 0; i--) {
//   if (i >= position) {
//     arr[i + 1] = arr[i];
//     if (i == position) {
//       arr[i] = newArray;
//     }
//   }
// }

// console.log(arr);

const insertArray = () => {
  let arr = [60, 30, 45, 78, 92, 14, 36, 56];
  let newArray = parseInt(document.getElementById("element").value);
  let position = document.getElementById("position").value;

  console.log(arr);

  for (let i = arr.length - 1; i >= 0; i--) {
    if (i >= position) {
      arr[i + 1] = arr[i];
      if (i == position) {
        arr[i] = newArray;
      }
    }
  }

  console.log(arr);
};
