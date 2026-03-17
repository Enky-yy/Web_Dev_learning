use("CrudDb");

db.createCollection('Courses')

// db.Courses.insertOne({
//     name : "aryav",
//     salary: 200000,
//     position: "Jt"
// })

// let a = db.Courses.find({salary :20000})
// console.log(a)

// let a = db.Courses.findOne({salary :20000})
// console.log(a)


db.Courses.updateOne({salary:20000},{$set :{salary:2000000}})