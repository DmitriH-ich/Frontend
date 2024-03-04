// Задание 1

let array1 = ["Семен", "Иван", "Петр", "Татьяна"];
let array2 = [18, 27, 74, 34];
let array3 = [];
for (let i = 0; i < array1.length; i++) {
  array3.push(`${array1[i]} ${array2[i]} лет/годов`);
}
console.log(array3);

//Задание 2

let reversedArray = array3.reverse();
console.log(reversedArray);


//       для cебя:

/* for (let i = array3.length; i >= 0; i--) {
  console.log(array3[i]);
} */