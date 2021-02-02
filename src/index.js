import React, { useState } from "react";
import reactDOM from "react-dom";
import css from "./index.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function App() {

  const [Data, setData] = useState([])
  React.useEffect(() => {
    const userData = localStorage.getItem('Data') //yae smjh nh ara k set kaha karaya ha 
    if (userData) {
      setData(JSON.parse(userData))
    }
  }, [])

  React.useEffect(() => { //useEffect kya ha
    localStorage.setItem('Data', JSON.stringify(Data))
  })
  function TodoApp(e) {
    e.preventDefault() //.prevent deffault kya ha

    var todoText = document.getElementById('TodoText').value;
    var date = new Date().toLocaleTimeString()
    if (todoText === "") {
      alert("Put Some Text  ")
    }

    setData((previouseVlaue) => {
      return previouseVlaue.concat(todoText + " " + " " + " " + " " + " " + " " + date)

    })
    
    document.getElementById('TodoText').value = " "
  }

  const remove = (index) => {
    let todo = [...Data]
    todo.splice(index, 1)
    setData(todo)
  };





  return (
    <div className="todoList">
      <form onSubmit={TodoApp} className="form">
        <h1>To-Do App</h1>
        <input type="text" id="TodoText" placeholder="Type....." /><button > Add </button>
      </form>

      {Data.map((value, index) => {


        return (
          <div className="flex" key={index} >
            <p className="listText">{value}</p><Button variant="outline-danger" onClick={() => remove(index)}>Delete</Button >

          </div>
        )
      })}

    </div>
  )
}





reactDOM.render(<App />, document.getElementById('root'))