//8.Array Destructing
let numbers = [1, 2, 3, 4, 5, 6];
let [first, second, ...rest] = numbers;
console.log(first, second,  rest) 



//12.Check array element
let num = [1, 2, 3, 4, 5, 6];
let check = num.includes(2);
console.log(check)


//11.Flattering array
let num1 = [1, 2, 3, 4, 5, 6];
let num2 = [7, 8, 9, 10, 11];
let num3 = [...num1, ...num2];
console.log(num3);


//13.Array of object sorting
let obj = {};
obj.name = "Rahul";
obj.id = 2;
obj.age = 20;
obj = {...obj, ...obj, ...obj}
console.log(obj)



//14.Merging the array
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arr3 = [...arr1, ...arr2];
console.log(arr3);



//15.Finding the index of the first occurance
let arr = [1, 2, 3, 4, 5, 6];
let index = arr.indexOf(2);
console.log(index);



//18.Finding intersection of 2 arrays
let array = [1, 2, 3, 4, 5];
let array2 = [4, 5, 6, 7, 8];
let intersection = array.filter(x => array2.includes(x));
console.log(intersection);



//19.Finding the difference betwween 2 arrays
let array3 = [1, 2, 3, 4, 5];
let array4 = [4, 5, 6, 7, 8];
let difference = array3.filter(x => !array4.includes(x));
console.log(difference);