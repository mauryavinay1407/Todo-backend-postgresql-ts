import {pool} from "../db";

interface todo{
    title:String;
    description:String;
}

class Todo{
    static async createTodo(todo:todo){
        const values=[todo.title,todo.description];
        const query=`INSERT INTO todos (title,description) VALUES($1 ,$2) RETURNING *`
        const {rows}=await pool.query(query,values);
        return rows[0];
    }
    static async findAllTodos(){
        const {rows}=await pool.query(`SELECT * FROM todos`)
        if(rows.length)
        return rows;
    }
    static async updateTodo(todoId:String,todo:todo){
       const values=[todo.title,todo.description,todoId];
       const query=`UPDATE todos SET title=$1,description=$2 WHERE id=$3 RETURNING *`
       const {rows}=await pool.query(query,values);
       return rows[0];
    }
    static async deleteTodo(todoId:String){
        await pool.query(`
            DELETE FROM todos WHERE id=$1;
          `,[todoId])
    } 
    static async findById(todoId:String){
        const {rows}=await pool.query(`
        SELECT * FROM todos WHERE id=$1;
        `,[todoId])
        return rows[0];
    }
}

export default Todo;