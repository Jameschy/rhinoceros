/**
 * Create By admins on 2020/10/23.
 */

var a= [33,4,1111,222];
var b=['g','j','d','t','a'];
var sort_1=a.sort();
var sort_11=b.sort();
console.log(sort_1);
console.log(sort_11);
//取反
var sort_2=a.sort(function (a,b) {
    return a-b;
});

console.log(sort_2);

var c='smallcase';
console.log(c.toLocaleUpperCase());