let arr = [12, 25, 46, 36, 89, 78, 45, 96, 62, 34, 31, 52, 19, 80];

// for (let i = 0; i < arr.length; i++) {
//   console.log(`Array ${i} is ${arr[i]} `);
// }

// let x = 10;
// console.log(arr[x]);

const getElement = () => {
  let element = document.getElementById("element").value;
  if (
    element < arr.length &&
    typeof Number(element) === "number" &&
    element > -1
  ) {
    alert(arr[element]);
  } else {
    alert("Please Enter Valid Input");
  }
};
