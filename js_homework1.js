//#1 - result = number33
var test1 = 'number' + 3 + 3; //String 'number + 3 + 3;
console.log(test1)

//#2 - result = 3
var test2 = null + 3; // null(0) + 3;
console.log(test2)

//#3 - result = qwerty
var test3 = 5 && "qwerty"; // && mean AND; Both are not NULL or NaN, thats why we return the last operand => qwerty;
console.log(test3)

//#4 - result = 42hillel
var test4 = +'40' + +'2' + "hillel"; //+'40' => 40; +'2' => 2; 40 + 2 = 42; 42 + "hillel"(String);
console.log(test4)

//#5 - result = false
var test5 = '10' - 5 === 6; // '10' - String; 3 - number;
console.log(test5)

//#6 - result = 1
var test6 = true + false; // true = 1; false = 0; 1 + 0;
console.log(test6)

//#7 - result = NaN
var test7 = '4px' - 3; // '4px' - String with letters; 3 - number;
console.log(test7)

//#8 - result = 1
var test8 = '4' - 3; // String '4' => Number 4; 4 - 3; (Because String only contained numbers);
console.log(test8)

//#9 - result = 61
var test9 = '6' + 3 ** 0; // 3 ** 0 = 1; Moved to one String '6' + 1 (Because of addition with String);
console.log(test9)

//#10 - result = 2
var test10 = 12 / '6'; // String '6' => Number 6; 12 / 6 (Because String only contained numbers);
console.log(test10)

//#11 - result = 10false
var test11 = '10' + (5 === 6); // === - equal value and equal type => 5 === 6 => false; false => String; '10'(String) + false;
console.log(test11)

//#12 - result = false
var test12 = null == ''; // == - equal to; '' - contained 'nothing'; null == 'nothing' or ' ';
console.log(test12)

//#13 - result = 27
var test13 = 3 ** (9 / 3); // 9 / 3 = 3; 3 ** 3 => 3 * 3 * 3;
console.log(test13)

//#14 - result = true
var test14 = !!'false' == !!'true'; // == equal to; !!'false' => true; !!'true' => true; true == true; 
console.log(test14)

//#15 - result = 1
var test15 = 0 || '0' && 1; // || mean OR; && mean AND; 0 || 0 => 0; 0 && 1 => 1;
console.log(test15)

//#16 - result = false
var test16 = (+null == false) < 1; // +null = 0 or false; == equal to; false == false = true or 1; 1 < 1;
console.log(test16)

//#17 - result = true
var test17 = false && true || true; // false && true => false; || mean OR;
console.log(test17)

//#18 - result = false
var test18 = false && (false || true); // (false ||(meaning OR) true) => true; && mean AND; 
console.log(test18)

//#19 - result = false
var test19 = (+null == false) < 1 ** 5; // +null = 0 or false; == equal to; 1 ** 5 = 1; => (true = 1) = 1 < 1;
console.log(test19)
