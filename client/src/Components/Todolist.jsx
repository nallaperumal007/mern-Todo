import React from 'react';
import './Todolist.css';

export default function Todolist(props) {
  const todolist=props.todolist.map((task,index) =>  {
    return <li key={index}>
           <div>

           </div>
           <div>

           </div>

          </li>
  })

  return (
    <div className='tasklist'>
      <ul>
        {todolist}
      </ul>
    </div>
  )
}
