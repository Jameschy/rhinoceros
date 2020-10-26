/**
 * Create By admins on 2020/10/26.
 */

// 数组推导

// let evensquares=[x*x for(x in range(0,10) if (x%2===0))];

// 等价于

let evensquares=[];
for (x in range(0,10)){
    if (x%2===0)
        evensquares.push(x*x);
};

console.log(evensquares);