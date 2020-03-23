const {weapon, room} = {"name":"Rusty",
"room":"kitchen", 
"weapon":"candlestick"}


//Omit certain values
var [a, , b] = [1, 2, 3];
console.log(a, b);
//=> 1 3

//Combine with spread/rest operator (accumulates the rest of the values)
var [a, ...b] = [1, 2, 3];
console.log(a, b);
//=> 1 [2, 3]

//Swap variables easily without temp
var a=1, b=2;
[b, a] = [a, b];
console.log(a, b);
//=> 2 1

//Advance deep arrays
var [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]];
console.log("a:", a, "b:", b, "c:", c, "d:", d);
// => a:1 b:2 c: [[3, 4], 5] d:6