import React, { useState, useEffect, useRef }  from 'react';
import ReactDOM from 'react-dom/client';
import './to_do_list.css'

const ToDoList = () => {
    let [task, setTask] = useState('')
    let [editedTask, setEditedTask] = useState('')
    let [taskArray, setTaskArray] = useState([])
    let [editing, setEditing] = useState(-1)
    let inputRef = useRef('')
    let notificationRef = useRef('')


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
        console.log(taskArray.length)
        }

    
    let handleEdit = (index) => {
        setEditing(index)
        console.log(taskArray)
        notificationRef.current.style.color = "black";
    }

    let handleConfirm = (index) => {
        if (editedTask !== '') {
        notificationRef.current.style.color = "black"
        setTaskArray(taskArray.splice(index, 1, editedTask))
        }
        setTaskArray([...taskArray])
        setEditing(-2)
        setEditedTask('')
    }
    
    let cancelEdit = () => {
        setEditing(-2)
    }
    
    return (
        <form className = "forBox" onSubmit = { handleSubmit }>
            <div className = "header"><h2>Darbų sąrašas</h2></div>
            <label className = "label" htmlFor="enterTask" style = {{color: "black"}} ref ={notificationRef}>Įveskite užduotį:</label>
            <input name="enterTask" className="taskEnter" type = "text" id="submition" ref = {inputRef} onChange={(event, value) => {setTask(event.target.value)}}></input>
            <button className="submitButton" type = "submit" name="submit">ĮVESTI</button>
            <div>{ taskArray.map((value, index) => <div className = "listItem" key = {index}> 
                                                        { editing === index ?  <div><input className="editField" onChange={(ev) => {setEditedTask(ev.target.value)}}></input><button className="cancelEdit" onClick={() => {cancelEdit()}} style = {{display: editing === index ? "inline" : "none"}}>X</button></div> : <div>{ value }</div>}
                                                        <div><button className="removeButton" onClick={ () => {handleDelete(index)} }>PAŠALINTI</button>
                                                            <button className="editButton" onClick={() => {handleEdit(index)}} style = {{display: editing !== index ? "inline" : "none"}}>TAISYTI</button>
                                                            <button className="editButton" onClick={() => {handleConfirm(index)}} style = {{display: editing === index ? "inline" : "none"}}>PATVIRTINTI</button>
                                                        </div>
                                                    </div>) }
            </div>
        </form>
    );
};

export default ToDoList;