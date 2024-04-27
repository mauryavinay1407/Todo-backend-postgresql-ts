import express from 'express'
import todoRouter from './routes/todo.routes'
const app=express();

app.use(express.json());

app.use("/api/v1/todo",todoRouter)

export {app};