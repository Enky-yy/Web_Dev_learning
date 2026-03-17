console.log("This is tut 55");

var a = 1;
var b = 2;
var _a = "Shubham";
// var 55a = "harsh" // not possible  , name should start with _ , $  or letter not number

console.log(a + b);
console.log(typeof a, typeof b);

const a1 = 6;
// a1 = a1+6;
{
  let a = 66; // let is same as var but variable generation is not universal , available in closed function only
  console.log(a);
}
console.log(a);

//all primitve data types
let x = "Harsh";
let y = 22;
let z = 22.2; // it is number not decimal
let p = true;
let q = null;
let k = undefined;

console.log(x, y, z, p, q, k);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof k); // null is objects

let o = {
  name: "Harsh",
  job_code: "11_ab",
  Salary: 11000,
};

console.log(o);

o.Salary = 120000;

console.log(o);

{
  let e = {
    name: "Harsh",
    job_code: "11_ab",
    Salary: 11000,
  };

  console.log(e);
}

// e.Salary=111111; here e is  not defined
// console.log(e)
