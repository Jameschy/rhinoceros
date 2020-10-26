/**
 * Create By admins on 2020/10/26.
 */

// for/each和for/in循环类似；
// for/each遍历的是属性的值，不是对象的属性

let o={one:1,two:2,three:3};
for (let p in o) console.log(p);

console.log("++++++++迭代器分页+++++++++");


//迭代器必须包含next方法每次调用都返回集合中的下一个值
function counter(start){
    let nextValue = Math.round(start);

    return {next:function () {
            return nextValue++;
        }}
}

let serialNumberGenerator = counter(1000);
let sn1 = serialNumberGenerator.next();
let sn2 = serialNumberGenerator.next();
console.log(sn1);
console.log(sn2);

console.log("++迭代器分页+++++");
// function rangeIter(first,last) {
//     let nextValue =Math.ceil(first);
//     return{
//         next:function () {
//             if (nextValue>last) throw StopIteration;
//             return nextValue++;
//         }
//     };
// }
//
// let r=rangeIter(1,5);
//
// while (true){
//     try {
//         console.log(r.next());
//     }catch (e) {
//         if (e==StopIteration) break;
//         else throw e;
//     }
// }


// 换用for/in迭代器

function range(min,max) {
    return {
        get min(){return min;},
        get max(){return max;},
        includes:function (x) {
            return min <= x && x <=max;
        },
        toString:function () {
            return "["+min+","+max+"]";
        },
        _iterator_:function () {
            let val = Math.ceil(min);
            return {
                next:function () {
                    if (val>max) throw  StopIteration;
                    return val++;
                }
            };
        }
    };
}
console.log('迭代器000000000000');
for (let i in range(1,10)) console.log(i);

