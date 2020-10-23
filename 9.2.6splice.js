/**
 * Create By admins on 2020/10/23.
 */
//1.含左不含右
//2. splice 数组删除或插入
var a = [1,2,3,4,5,6,7,8,9];
var b = ['aa','bb','cc','dd','ee','ff','gg','hh']

var x=a.splice(4);//删除从第0到第4之间的
var y=a.splice(1,2);//截取从第1往后2个元素
var z=a.splice(1,1);//截取从第1往后2个元素
var zx=b.splice(2,1,'add');//截取从第1往后2个元素


console.log(x);
console.log(y);
console.log(z);
console.log(zx);
