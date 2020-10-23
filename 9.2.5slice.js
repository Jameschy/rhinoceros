/**
 * Create By admins on 2020/10/23.
 */
    //1.含左不含右
    //2. slice 数组截取
var a = [1,2,3,4,5];
var b = ['z','x','c','v','b','n','m'];
var π= a.slice(0,3);//第0到3之间
var x= a.slice(3);//第3开始往后
var y=a.slice(1,-1);//从第1到倒数第1之间
var z=a.slice(-3,-2);
var yy=b.slice(1,-2);
var zz=b.slice(-4,-2);

console.log(π);
console.log(x);
console.log(y);
console.log(z);
console.log(yy);
console.log(zz);