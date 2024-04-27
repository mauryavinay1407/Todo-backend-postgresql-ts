import {app} from './app'
import { connectDB } from './db';
require('dotenv').config();

connectDB()
.then(()=>{
    app.listen(process.env.PORT||3000,()=>console.log("Server is running at http://localhost:3000"))
    console.log("Database conneceted successfully!!!")
})
.catch((err:any)=>{
    console.log("Error occured while database connection inside model",err);
})

