let sum = (...args) => args.reduce((acc, elem) => acc + elem)
console.log(sum(1,3,5))




let isNumber = () => {
    // if(typeof a ==="number"){
    //     return 'a number'
    // }
    // else{
    //     return 'not a number'
    // }

    return typeof a === 'number' ? 'this is a number' : 'this is not a number'
}

console.log(isNumber(10))

// condition ? result1 : result1

// typeof a ? 'number' : 'not a number'\




// let mult = (a,b) => a*b
// console.log(mult(4,5));




let obj = {
    x: 5,
    y: 20,
    z: 3
}

let mult = (o) => {
    let {x,y,z} = o;
    return x*y*z;
}

console.log(mult(obj));




let a,b,c,d,arr;

a = [1,2]
b = [4,5]
c = [8,9,10]
d = 11

arr = [0, ...a, 3, ...b, 6, 7, ...c, d]

console.log(arr);




var a = 'first'
var b = 'second'

[b,a] = [a,b];

console.log(b,a);