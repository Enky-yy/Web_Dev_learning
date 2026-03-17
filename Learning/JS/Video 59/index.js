/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

function add(x, y) {
  console.log(x + y);
}
function sub(x, y) {
  console.log(x - y);
}
function mul(x, y) {
  console.log(x * y);
}
function divide(x, y) {
  if (y != 0) {
    console.log(x / y);
  } else {
    console.log("Cannot Divide since Divisor is zero");
  }
}

function Faulty_Calci(x, y, name) {
  name = name.toLowerCase();
  let a = Math.random();
//   console.log(a)
  if (a < 0.1) {
    if ((name == "add")) {
      sub(x, y);
    } else if ((name == "sub")) {
      divide(x, y);
    } else if ((name == "mul")) {
      add(x, y);
    } else if ((name == "divide")) {
      mul(x, y);
    } else {
      console.log("I dont know");
    }
  } else {
    if ((name == "add")) {
      add(x, y);
    } else if ((name == "sub")) {
      sub(x, y);
    } else if ((name == "mul")) {
      mul(x, y);
    } else if ((name == "divide")) {
      divide(x, y);
    } else {
      console.log("I dont know");
    }
  }
}

k = 0;
for (let i = 0; i < 10; i++) {
  Faulty_Calci(1, 0, "sub");
}

// divide(0,0)
