import React, { useState }  from 'react';
import ReactDOM from 'react-dom/client';

const ToDoList = () => {
    let [task, setTask] = useState('')
    let [taskArray, setTaskArray] = useState([])
    let handleSubmit = (event) => {event.preventDefault();
                                        setTaskArray(current => [...current, task]);
                                        }
    localStorage.setItem('tasks', taskArray)
    
    console.log(taskArray)

    return (
        <form className = "forBox" onSubmit = { handleSubmit }>
            <h2>TO-DO list</h2>
            <label className = "label" htmlFor="enterTask">Įveskite užduotį:</label>
            <input name="enterTask" type = "text" id="submition" placeholder="Įveskite užduodį" onChange={(event, value) => {setTask(event.target.value)}}></input>
            <button type = "submit" name="submit">ĮVESTI</button>
            <h2 className = "taskList">Užduočių sąrašas</h2>


            <div>{ taskArray.map((value, index) => <li key = {index}> {value} </li>)}</div>
        </form>
    );
};

export default ToDoList;