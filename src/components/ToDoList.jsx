import React from 'react'

export default function ToDoList({clearEl,changeColor, array}) {
  return (
    <div className="result-wrapper">
        <h2>Your notes</h2> {
          array.length === 0 ? <p>You have no notes</p> : ''
        }
        
        <ul>
          {
            array.map((elem, idx) => (
              <li key={idx}>
                <span className="task-item" onClick={() => changeColor(idx)} style={{color: elem.isDone === false ? 'red' : 'green'}}>
                  {elem.text}
                </span>
            
                <button onClick={() => clearEl(idx)}>
                  X
                </button>
              </li>
            ))
          }
        </ul>
      </div>
  )
}
