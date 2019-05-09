
// (function (){
//     console.log("hi")
// })()


// var name = function (name){
//     console.log("my name is " + name)
// }

// name('Me')


// var adamsFunction = function(name){
//     return "yo, " + name 
// }

// var result = adamsFunction('Ollie')


// ADD
var add = function(num1, num2){
    return num1 + num2
}

console.log(add(3, 4))


// SUBTRACT
var subtract = function(num1, num2){
    return num1 - num2
}

console.log(subtract(6, 4))


// CUSTOM EQUATION
var calc = function(num1, num2, operation){
    return operation(num1, num2)
}

var result = calc(4,5,add)
console.log(result)


// MULTIPLY MULT NUMBERS
var myArray = [5,6,3,3,6,4,4]
var someVale = 10

myArray.forEach(function(element){
    var mult = someVale * element
    console.log(element + '*' + someVale + '=' + mult)
})


// MULTIPLY AN ARRAY TO A NUMBER AND REWRITE EACH ONE WITH NEW VALUE
var myArray1 = [5,6,3,3,6,4,4]
var newArray1 = myArray1.map(function(element){
    return element * 10 
})

console.log(newArray1)


// FILTER AN ARRAY TO A CERTAIN VALUE
var myArray2 = [5,6,3,3,6,4,4]
var newArray2 = myArray2.filter(function(element){
    return element < 5
})

console.log(newArray2)


// FILTER AN ARRAY TO A CERTAIN WORD
var daysofWeek = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun']

var filteredWeek = daysofWeek.filter(function(days){
    return days != 'mon'
})

console.log(filteredWeek)


// IDK LOL
var arr = [0,1,2,3,4,5,6]

var test = arr.some(function(element){
    return element < 2;
})
console.log(test)



function Greeting(name){
    console.log('Hey ' + name)
}





// SOME WEIRD CALL THING
var a = 5;

console.log('orig value: ' + a)

if(true){
    var a = 34;
    console.log("inside if statement: " + a)
}

console.log('outside if statement: ' + a)



const pi = 3.14

pi = 2