// Positive Numbers
// Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.
// function func1(){
//     var arr = [-3,-2,-1,0,1,2,3];
    
//     var newarr = arr.filter(function(element){
//         return element > 0;
//     });

//     console.log(newarr);
// }
// return func1();



// Even Numbers
// Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.
// function func2(){
//     var arr = [-3,-2,-1,0,1,2,3];
    
//     var newarr = arr.filter(function(element){
//         return element % 2 == 0;
//     });

//     console.log(newarr);
// }
// return func2();




// Square the Numbers
// Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].
// function func3(){
//     var arr = [0,1,2,3];
    
//     arr.forEach(function(element){
//         console.log(element * element)
//     })
// }
// return func3();




// Cities 1
// Write a function which takes an array of city objects like such:

// var cities = [ 
// { name: 'Los Angeles', temperature: 60.0}, 
// { name: 'Atlanta', temperature: 52.0 }, 
// { name: 'Detroit', temperature: 48.0 }, 
// { name: 'New York', temperature: 80.0 } ];
// as input and returns a new array containing the cities whose temperature is cooler than 70 degrees.
// function func4(){
//     var cities = [ 
//     { name: 'Los Angeles', temperature: 60.0}, 
//     { name: 'Atlanta', temperature: 52.0 }, 
//     { name: 'Detroit', temperature: 48.0 }, 
//     { name: 'New York', temperature: 80.0 } ];

//     var hot = cities.filter(function(high){
//         return high.temperature > 70;
//     })
//     console.log(hot);
// };
// return func4();




// Cities 2
// Write a function which takes an array of city objects like the above problem as input and returns an array of the cities names.
// function func5(){
//         var cities = [ 
//     { name: 'Los Angeles', temperature: 60.0}, 
//     { name: 'Atlanta', temperature: 52.0 }, 
//     { name: 'Detroit', temperature: 48.0 }, 
//     { name: 'New York', temperature: 80.0 } ];

//     var names = cities.map(function(element){
//         return element.name;
//     })
//     console.log(names);
// }
// return func5();




// Good Job!
// Given an array of people's names:
// Print out 'Good Job, {{name}}!' for each person's name, one on a line
// var people = ['Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben'];

// function func6(){
//     var grats = people.map(function(element){
//         return ("Good job, " + element + "!")
//     })
//     console.log(grats);
// }
// return func6();




// Sort an array
// Given an array of strings such the array of names given in the previous problem, sort them by alphabetically order.
// var people = ['Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben'];

// function func7(){
//     console.log(people.sort());
// }
// return func7();




// Sort an array, 2
// Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.
// var people = ['Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben'];

// function func8(){
//     people.sort(function(a, b){
//         return a.length - b.length;
//     })
//     console.log(people);
// }
// return func8();




// Sort an array, 3
// Given an array of array of numbers like:
// Sort the array by the sum of each inner array. For the above example, the respective sums for each inner array is 8, 20, and 9. Therefore, the solution should be:
// [ [1, 3, 4], 
// [3, 6], 
// [2, 4, 6, 8] ]

// var arr = [ 
// [1, 3, 4], 
// [2, 4, 6, 8], 
// [3, 6] ];

// function func9(){

// }
// return func9();




// 3 times
// Given this function:


// Use the call3Times function to print "Hello, world!" 3 times.
// function fun(){
//     console.log("Hello, world!");
// }

// function call3Times(){
//     fun(); 
//     fun(); 
//     fun(); 
// }
// return call3Times();




// n times
// You will write a function callNTimes that takes two arguments: times as a number, and fun as a function. It will call that function for that many times. Example:

// > callNTimes(5, hello) 
// Hello, world! 
// Hello, world! 
// Hello, world! 
// Hello, world! 
// Hello, world!
// You are allowed to use a loop in the implementation of callNTimes.
// function fun(){
//     console.log("Hello, world!");
// }

// function fiveTimes(num, fun){
//     for (var i = 0; i < num; i++){
//         fun();
//     }

// }
// fiveTimes(5, fun);





// Sum an array
// Write a function sum that takes an array of numbers as argument and returns the sum of those numbers. Use the reduce method to do this.

// > sum([1, 2, 3]) 
// 6
// function sum(arr){
//     return arr.reduce((x, y) => x + y);
// }
// console.log(sum([1,2,3]));



// Acronym
// Write a function acronym that takes an array of words as argument and returns the acronym of the words. Use the reduce method to do this.

// > acronym(['very', 'important', 'person']) 
// 'VIP' > acronym(['national', 'aeronautics', 'space', 'administration']) 'NASA'
function acronym(arr){
    return arr.reduce(((x,y) => x + y.slice(0,1)), '').toUpperCase();
}

console.log(acronym(['very', 'cool', 'dude']));