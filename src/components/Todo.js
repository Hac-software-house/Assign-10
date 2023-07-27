import React from 'react'
export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
 
  return (
    <div className="Todo">
      <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
      <div>
      <button className='btn1' onClick={() => editTodo(task.id)}>Edit</button>
      <button className='btn2' onClick={() => deleteTodo(task.id)}>Delete</button>
      </div>
    
    </div>
    
  );
}