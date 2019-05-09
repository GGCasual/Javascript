function lvl4exercise1 () {
// Return the boolean value "true"
    var bool1 = (1 > 0);
    console.log(bool1);
}
return lvl4exercise1();

function lvl4exercise2 () {
// Return the boolean value "false"
    var bool1 = (1 < 0);
    console.log(bool1);
}
return lvl4exercise2();

function lvl4exercise3 (bool) {
// Return the opposite of the input boolean value
    var bool1 = !(1 < 0);
    console.log(bool1);
}
return lvl4exercise3();

function lvl4exercise4 (bool1, bool2) {
// Return the logical "and" of the input boolean values
    var bool1 = (5 > 0);
    var bool2 = (6 > 5);
    var res = bool1 && bool2;
    console.log(res);
}
return lvl4exercise4();

function lvl4exercise5 (bool1, bool2) {
// Return the logical "or" of the input boolean values
    var bool1 = (5 > 0);
    var bool2 = (6 > 5);
    var res = bool1 || bool2;
    console.log(res);
}
return lvl4exercise5();

function lvl4exercise6 (bool1, bool2) {
// Return the logical "equivalence" of the input boolean values
    var bool1 = (5 > 0);
    var bool2 = (6 > 5);
    var res = bool1 == bool2;
    console.log(res);
}
return lvl4exercise6();