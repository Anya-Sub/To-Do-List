import React from "react";



function App() {


  const [array, setArray] = React.useState([{text: 'hhhh', isDone: true},{text: 'ggggg', isDone: false},{text: 'ddddd', isDone: false}]);
  const [input, setInput] =  React.useState('');
 
  function addToDo(){
    const newArray = [...array, {text:input, isDone:false }]
    setArray(newArray)
   
    setInput('')
  }

  function clearArray(){
    setArray([])
  }

  
  function clearEl(idx){
    const newArr = [...array];
    newArr.splice(idx, 1)
    setArray(newArr)
  }

  function changeColor(idx){
    const newArr = [...array];
    
    newArr[idx].isDone === false ? newArr[idx].isDone = true : newArr[idx].isDone = false
    setArray(newArr)
  }

  return (
    <div className="App">
      <div className="input-wrapper">
        <h2>To Do List</h2>
        <p>White note</p>
        
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Enter something" required />
        <button onClick={addToDo} type="button" className="btn">
          Add note
        </button>
        <button onClick={clearArray} type="button" className="btn">
          Clear List
        </button>
      </div>
      <div className="result-wrapper">
        <h2>Your notes</h2>
        <ul>
          {
            array.map((elem, idx) => (
              <li key={idx}>
                <span onClick={() => changeColor(idx)} style={{color: elem.isDone === false ? 'red' : 'green'}}>
                  {elem.text}
                </span>
                <button onClick={() => clearEl(idx)}>
                  x
                </button>
              </li>
            ))
          }
        </ul>
      </div>

    </div>
  );
}

export default App;
