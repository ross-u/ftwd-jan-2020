/*
var age = 30;
var price = 12.55;

// NaN
// Represents an incorrect mathematical operation
var user = "Sarah";

var whatIsThis = user / 2;

console.log(whatIsThis);

// Infinity

var lowest = -Infinity;
var highest = Infinity;

console.log(-1000000000000000 > lowest);
console.log(9999999999999 < Infinity);

// Exponentiation

var num = 10;
var exponent = 5;

console.log(num ** exponent);

// Modulo
// Represents a continuous division

var result = 11 % 2;
console.log(result);

var x = 10;
var y = 5;

var x = x + y;
//  var x += y;

var x = x - y;
// var -= y;

var x = x * y;
// var *= y;

var x = x / y;
// var /= y;

// PEMDAS
var i = 10 + ((8 - 3) * 2 ** 3) / 4 - 6;

// 10 + 5 * 2 ** 3 / 4 - 6

// 10 + 5 * 8 / 4 - 6

// 10 + 40 / 4 - 6

// 10 + 10 - 6

// 20 - 6

// Math
console.log(Math);

console.log(Math.round(4.7)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.round(4.5));

console.log(Math.ceil(4.01)); // 5
console.log(Math.floor(6.99)); // 6

console.log(Math.max(0, 111, 123, 1000));
console.log(Math.min(-50, 111, 123, 1000));

// Random number
console.log(Math.random()); // 0 - 0.9999999999 (1 is not included)

console.log(Math.ceil(Math.random() * 10));

// isNaN
isNaN(123); //false
isNaN(-1.23); //false
isNaN("123"); //false

isNaN(NaN); //true
isNaN("Hello"); //true
isNaN("NaN"); //true
isNaN(0 / 0); //true

isNaN(true); // false

var x = 10;
var y = 5;
var z = 5;
var str = "5";

// > < == === != !== >= <=

// ==   Checks the operands only by value
console.log(y == z); // true
console.log(y != z); // false

console.log(5 == "5"); // true

// ===  Checks the operands by type and value
console.log(y === z); // true
console.log(5 === "5"); // false

// !=
console.log(5 != "5"); // false

// !==
console.log(5 !== "5"); // true

console.log(5 > 1); // true

console.log(5 < 1); // false

console.log(5 >= 5); // true

console.log(10 <= 5); // false

*/

var string1 = "string one";
var string2 = "string two";
var string3 = `string three`; // String literal

var user = "Sarah";
var favoriteFood = `
    <div>
      <p>${user}</p>
    </div>
`;

console.log(string1 + "abcde");
console.log(string1 + 12345);
console.log(12345 + string1);

console.log("Hello " + user);
console.log(`Hello ${user}`);

// SPECIAL CHARACTERS

var favActor = "My favorite actor is \n \n T.Hanks";

console.log(favActor);

// var favShow = "My favorite show is \" Mr Robot\" ";

// length

console.log(favActor.length);

// str[i]  charAt(i)

var myString = "Bananarama!";
console.log(myString[0]);
console.log(myString[1]);

console.log(myString.charAt(0));

// indexOf

var message = "Don't be sad, be happy!";

console.log(message.indexOf("Don't"));
console.log(message.indexOf("be"));
console.log(message.indexOf("moo"));

console.log(message.lastIndexOf("be"));

console.log(myString.repeat(5));

console.log(message.includes("Don't", 8));
console.log(message.includes("moo"));

var substring = message.slice(0, 5);

console.log(substring);

console.log(message.slice(-5));

console.log();
