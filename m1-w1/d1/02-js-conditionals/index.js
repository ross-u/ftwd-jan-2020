// var i = 0;

// while (i <= 20) {
//   i++;
//   console.log(i);
// }

// do {
//   i++;
//   console.log(i);
// } while (i <= 20);

// for ( initialization;  condition; increment) {

// }

var str = "Bananarama";

for (var i = 0; i <= str.length - 1; i++) {
  console.log(str[i]);
}

for (var i = str.length - 1; i >= 0; i--) {
  console.log(str[i]);
}

for (var x = 0; x <= 20; x++) {
  if (x % 2 === 1) {
    continue;
  } else if (x === 14) {
    break;
  } else {
    console.log(x);
  }
}
