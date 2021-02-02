import React, { useState } from "react";
import reactDOM from "react-dom";
import css from  "./index.css" 

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
    var date =  new Date().toLocaleTimeString()
    if(todoText === ""){
      alert("some text ")
    }

    setData((previouseVlaue) => {
      return previouseVlaue.concat(todoText+" "+" "+" "+" "+" "+" "+date)
      
    })
  
  }

  const remove = (index) => {
    let todo = [...Data]
    todo.splice(index, 1)
    setData(todo)
  };





  return (
    <div  className="todoList">
      <form onSubmit={TodoApp} className="form">
      <h1>ToDo App</h1>
        <input type="text" id="TodoText" placeholder="Type......." /><button > Add </button>
      </form>

      {Data.map((value, index) => {

        
        return (
          <div className="flex" key={index} >
            <p className="listText">{value}</p><i className="fas fa-trash-alt button" onClick={()=> remove(index)}></i>
            
          </div>
        )
      })}

    </div>
  )
}





reactDOM.render(<App />, document.getElementById('root'))