import React from 'react';
import { BsCheckLg, BsTrashFill } from "react-icons/bs";

 const Todo = ({text, todo, todos, setTodos}) => {
     //events
     const deleteHandler = () => {
         setTodos(todos.filter((ele) => ele.id !== todo.id));
     };
     const completeHandler = () => {
     setTodos(todos.map((item) => {
         if(item.id === todo.id){
             return{
                 ...item, completed: !item.completed
             };
         }
         return item;
         }))
     };
     
     return(
       <div className="todo">
           <li className={`todo-item ${todo.completed ? "completed": ""}`}>{text}</li>
           <button onClick={completeHandler} className="complete-btn">
               <BsCheckLg/>
           </button>
           <button onClick={deleteHandler} className="trash-btn">
               <BsTrashFill/>
           </button>
       </div>
     );
 }

 export default Todo;