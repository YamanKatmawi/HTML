// ["smarter", "kinder", "sweeter", "smaller", "clearer"];
let textArr = ["smart", "kind", "sweet", "small", "clear"];
function wordConverter(arr) {
  const resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    resultArr.push(arr[i] + "er");
  }
  return resultArr;
}
console.log(wordConverter(textArr));
///////////

// const words = ["smart", "kind", "sweet", "small", "clear"];

// const wordConverter = (array) => {
//   return array.map((word) => word + "er");
// };
///
//Create a function called "createGrid", which returns a grid of a 2D array by accepting two arguments: `size` (which determines the number of nested arrays and the number of elements in each nested array) and `char`
//(which determines the characters in each nested array). Print your solution to the console.

const createGrid = (size, item) => {
  array = [];

  for (let i = 0; i < size; i++) {
    array[i] = [];
    console.log("i", i);

    for (let j = 0; j < size; j++) {
      array[i].push(item);
      console.log("j", j);
    }
  }
  return array;
};
console.log(createGrid(6, "#"));
/////
