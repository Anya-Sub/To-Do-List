import React from "react";

import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

function App() {


  const [array, setArray] = React.useState([]);
  const [input, setInput] =  React.useState('');
 
 
  function addToDo(){
    if (input.replace(/ /g, '') === '') return
    const newArray = [...array, {text:input, isDone:false }]
    setArray(newArray)
    localStorage.setItem('toDoListReactJS', JSON.stringify(newArray) )
    
   
    setInput('')
  }

  React.useEffect(() => {
    setArray(JSON.parse(localStorage.getItem('toDoListReactJS')))
  }, [])


  function clearArray(){
    setArray([])
    localStorage.setItem('toDoListReactJS', JSON.stringify([]) )
  }

  
  function clearEl(idx){
    const newArr = [...array];
    newArr.splice(idx, 1)
    setArray(newArr)

    localStorage.setItem('toDoListReactJS', JSON.stringify(newArr) )
  }

  function changeColor(idx){
    const newArr = [...array];
    
    newArr[idx].isDone === false ? newArr[idx].isDone = true : newArr[idx].isDone = false
    setArray(newArr)
    localStorage.setItem('toDoListReactJS', JSON.stringify(newArr) )


  }

  return (
    <div className="App">
      <ToDoForm value={input} setInput={setInput} addToDo ={addToDo} clearArray={clearArray} />
     <ToDoList changeColor={changeColor } clearEl={clearEl} array={array}/>

    </div>
  );
}

export default App;
