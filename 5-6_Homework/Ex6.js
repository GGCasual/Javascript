
function lvl6exercise1 (num) {
    var num = 3;
    if (num == 1)
        console.log('hello');
    else if (num == 2)
        console.log('world');
    else
        console.log('bye');
}
return lvl6exercise1();


function lvl6exercise2 () {
// Push 10 'hello' strings into the array using a for loop, then return it
    var arr = [];
    var count;

    for (count = 0; count < 10; count++){
    arr += ('hello' + ' ');
    }
    
    console.log(arr);
}
return lvl6exercise2();


function lvl6exercise3 () {
// Empty this array using a while loop and return it
    var arr = ['hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello']


    while (arr > 0){
        delete arr[0];
        console.log(arr);
    }
}
return lvl6exercise3();