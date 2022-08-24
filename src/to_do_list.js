import React, { useState, useEffect, useRef }  from 'react';
import ReactDOM from 'react-dom/client';
import './to_do_list.css'

const ToDoList = () => {
    let [task, setTask] = useState('')
    let [taskArray, setTaskArray] = useState([])
    let inputRef = useRef('')

    let handleSubmit = (event) => {event.preventDefault();
                                        console.log(task)
                                        if (task !== '') {
                                        setTaskArray([...taskArray, task]);
                                        setTask('')
                                        inputRef.current.value = ''
                                            }
                                        }

    useEffect(() => {
        const retrievedItems = localStorage.getItem("tasks");
        if (!retrievedItems) localStorage.setItem("tasks", JSON.stringify(taskArray));
        setTaskArray(JSON.parse(retrievedItems));
        }, []);

    useEffect(() => {localStorage.setItem('tasks', JSON.stringify(taskArray))}, [taskArray])

    let handleDelete = (i) => {
        setTaskArray(taskArray.filter((el, index) => index !== i))
        }  

    return (
        <form className = "forBox" onSubmit = { handleSubmit }>
            <div className = "header"><h2>Darbų sąrašas</h2></div>
            <label className = "label" htmlFor="enterTask">Įveskite užduotį:</label>
            <input name="enterTask" className="taskEnter" type = "text" id="submition" ref = {inputRef} onChange={(event, value) => {setTask(event.target.value)}}></input>
            <button className="submitButton" type = "submit" name="submit">ĮVESTI</button>

            <div>{ taskArray.map((value, index) => <div className = "listItem" key = {index}> 
                                                        <div>{ value }</div> 
                                                        <button className="removeButton" onClick={ () => { handleDelete(index)} }>PAŠALINTI</button>
                                                    </div>) }
            </div>
        </form>
    );
};

export default ToDoList;