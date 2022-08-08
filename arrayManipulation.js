let array = [1, 2, 3, [1, 2, 3,[1, 2, 3]]];

console.log(array.flat());
console.log(array.flat(2));


let arrays = [1, 2, 3,1, 2, 3, 1, 2, 3];

console.log(arrays.flatMap( value => [value,value * 2]));