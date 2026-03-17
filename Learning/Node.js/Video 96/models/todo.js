import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    name:String,
    position:String,
    salary:Number,
    alive:Boolean
})

export const Todo = mongoose.model('Todo',todoSchema)
