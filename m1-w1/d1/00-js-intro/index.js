console.log("Hello ironhackers");

// Single line comment

/* 
    Mulit line comment
    spans many lines

*/

// Objects
var myObject = {};
var myArray = [];

// Primitives
var mySTring = "abc";
var myNumber = 123;
var myBoolean = true; // false
var myNull = null;
var myUndefined = undefined;

var mySymbol = Symbol();
var myBigInt = 234234234n;

var user; // VAriable declaration
var email, password, address;

console.log(user);

user = "bob"; // Variable initialization

var age = 30; // Declare and initialize

// Naming a variable
var a;
var color;
var _private;
var $button;
var getTop10; // camelCase
var a_large_name; // kebab-case
var thisWayIsCalledCamelCase;
var π;

var color = "Red";

// console.log(Color);

// Dynamically typed

var favoriteFood;

favoriteFood = "Steak";
console.log(favoriteFood);

favoriteFood = 10;
console.log(favoriteFood);

console.log("typeof myObject", typeof myObject);
console.log("typeof myArray", typeof myArray);

// Primitives
console.log("typeof mySTring", typeof mySTring);
console.log("typeof myNumber", typeof myNumber);
console.log("typeof myBoolean", typeof myBoolean);
console.log("typeof myNull", typeof myNull);
console.log("typeof myUndefined", typeof myUndefined);

// let const
const user1 = "Sarah";

// This won't work, we can't assign new values to const variables
//user1 = "Bob";

let user2 = "MAria";
user2 = "Bob";
