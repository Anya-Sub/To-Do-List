import React from 'react'

export default function ToDoForm({value,setInput,clearArray,addToDo}) {
  return (
    <div className="input-wrapper">
        <h2>To Do List</h2>
        <p>White note</p>
        
        <input value={value} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Enter something" required />
        <button onClick={addToDo} type="button" className="btn">
          Add note
        </button>
        <button onClick={clearArray} type="button" className="btn-vio">
          Clear List
        </button>
      </div>
  )
}
