/**
 * Create By admins on 2020/10/23.
 */

//     与pop、push相反
//     在数组头部插入元素和删除
//     unshift 将一个元素或多个元素添加到数组头部
//     shift 删除第一个元素并返回删除的值
var a=[];
var x=a.unshift(1);
console.log(a);
console.log(x);

var y = a.unshift(22);//添加元素到首位并返回长度
console.log(a);
console.log(y);

var z = a.shift();//删除第一个元素并输出删除的值
console.log(a);
console.log(z);

var xx = a.unshift(3,[4,5]);
console.log(a);
console.log(xx);

