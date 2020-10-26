/**
 * Create By admins on 2020/10/26.
 */
//
// function oddsums(n){
//     let total = 0,result=[];
//     for (let x=1;x<=n;x++){
//         let odd = 2*x-1;;
//         total+=odd;
//         result.push(total);
//     }
//     return result;
// }
//
// console.log(oddsums(5));
//
// o={x:1,y:2};
// for (let p in o) console.log(p);
//
//
// let [x,y]=[1,3];
//
// [x,y] = [x+1,y+1];
// [x,y] = [y,x];
// console.log([x,y]);

function polar(x,y) {
    return [Math.sqrt(x*x+y*y),Math.atan2(y,x)];
}

function cartesian(r,theta) {
    return [r*Math.cos(theta),r*Math.sin(theta)];
}

let [r,theta] = polar(1.0,1.0);
let [x,y] = cartesian(r,theta);

console.log([r,theta]);
console.log([x,y]);


let first,second,all;
all=[first,second]=[1,2,3,4];
console.log(first);//1
console.log(second);//2
console.log(all);

let trasparent ={r:0.0,g:0.0,b:0.0,a:1.0};

let {r:red,g:green,b:blue}= trasparent;
console.log(trasparent);

