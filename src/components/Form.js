import React, {useState} from 'react';
import { BsPlusLg } from "react-icons/bs";

const Form= ({setInputText, todos, setTodos, inputText, setStatus})=>{
    //JS function 
    const itemHandler = (e)=>{
        setName(e.target.value);
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random()*1000}
        ]);
        setInputText("");
        setName(false);
    }
    const statusHandler = (e) =>{
        setStatus(e.target.value);
    };
    const [name, setName] = useState();
    return(
        <form>
          <div>
        <input onChange={itemHandler} value={inputText} type="text" className="todo-input" placeholder="e.g., Milk" title="text" required/></div>
        <div><button onClick={submitTodoHandler} className="todo-button" type="submit" title="submit"  disabled={!name}>
        <BsPlusLg/>
        </button></div>
        <div className="select">
          <select onChange={statusHandler} name="todos" title="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
};

export default Form;