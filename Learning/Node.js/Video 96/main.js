import mongoose from "mongoose";
import Express from "express"
import {Todo} from "./models/todo.js"

let connection = await mongoose.connect("mongodb://localhost:27017/todo")
const app = Express()
const port = 3000

app.get("/", (req , res )=>{
    res.send("Code is running!")
    const todo = new Todo({
        name:"Harsh",position:"pata_nhi", salary:20000,alive:true
    })
    todo.save()
})

app.get("/todo", async(req , res )=>{
    let todo = await Todo.find({})
    console.log(todo)
    res.json({name: todo.name, position: todo.position, salary: todo.salary, alive: todo.alive })
})



app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
})

