import Todo from '../models/todo.model'
import { Request,Response } from 'express'

export const addTodo=async(req:Request,res:Response)=>{
    const todo=await Todo.createTodo(req.body)
    res.json({
        message:"Todo Added successfully",
        todo
    })
}

export const getTodos=async(req:Request,res:Response)=>{
    const todos=await Todo.findAllTodos();
    console.log(todos);
    res.json(todos);
}
export const changeTodo=async(req:Request,res:Response)=>{
    const {title,description}=req.body;

    const updatedTodo=await Todo.updateTodo(req.body.todoId,{
        title,
        description
    })
    res.json({
        message:"Todo updated successfully",
        updatedTodo
    })
}

export const removeTodo=async(req:Request,res:Response)=>{
    await Todo.deleteTodo(req.body.todoId);
    res.json({
        message:"Todo deleted"
    })
}
export const getTodo=async(req:Request,res:Response)=>{
            const todo=await Todo.findById(req.body.todoId);
            console.log(todo);
            res.json(todo);
}