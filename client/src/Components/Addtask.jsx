import React, {useState} from 'react'
import './Addtask.css'
import axios from 'axios';

export default function Addtask(props) {
  const [task,Settask]=useState("")
  const addtask = () => {
    if(task.trim() === ''){
        return 
    } else {
        axios.post('https://todo-iea5.onrender.com/', {
            todo : task,
            isComplete : false
        }).then(res => {
            Settask("")
            props.addTask(res.data)
        }).catch(err => console.log(err))
    }
}

  return (
    <div className = 'addtask'>
            <input type='text' placeholder = 'Add Task . . .' value = {task} onChange = {event => Settask(event.target.value)}/>
            <button onClick = {() => addtask()}>Add Task</button>
   </div>
  )
}
