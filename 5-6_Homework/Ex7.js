
// Write a function that takes a number as an input.
// Have it create an empty array and then push a string into the array as many
// times as the input number
//
// Name the function "finalFunction"

function finalFunction(){
    var num = 5;
    var arr = [];

    while (num > 0){
        arr.push('hi') ;
        num -= 1;
    }
    console.log(arr);
}
return finalFunction();