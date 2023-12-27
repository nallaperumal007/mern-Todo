import React , {useState,useEffect} from 'react'
import axios from 'axios';
import './index.css'
import Addtask from './Components/Addtask';

export default function App() {
  const [todolist,setTodolist]=useState([])
  useEffect(()=>{
   axios.get('http://localhost:8000/').then(res=>{
    setTodolist(res.data)
   }).catch(err => console.log(err))
  },[])
  const addTask= newTask =>{
    setTodolist([...todolist,newTask])
  }
  return (
   <Addtask addTask={addTask} />
  )
}
