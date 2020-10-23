/**
 * Create By admins on 2020/10/23.
 */
//concat 数组重组、新加数组元素
var a=[1,2,3];
var x=a.concat(4,5,6);
var y=a.concat(4,[5,6]);
var z=a.concat(4,[5,[6,7]]);

console.log(x);
console.log(y);
console.log(z);