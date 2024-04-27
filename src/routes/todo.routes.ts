import { Router } from "express";
import { addTodo, changeTodo, getTodo, getTodos, removeTodo } from "../controllers/todo.controller";

const router=Router();

router.post("/addtodo",addTodo)
router.get("/alltodos",getTodos)
router.put("/updatetodo",changeTodo)
router.delete("/deletetodo",removeTodo)
router.get("/gettodo",getTodo)

export default router;