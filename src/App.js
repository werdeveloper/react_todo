import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) { // While data not found on local storage
    initTodo = [];
  }
  else {  // While data found on local storage
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  let onDeleteFun = (todo) => {
    // debugger;
    console.log("On Delete is called", todo); // Current Element Clicked
    setTodos(todos.filter((e)=>{
      // console.log(e!==setTodos);
      return e!==todo;  // Remove the Current Element data
    }));
  };

  const addTodo = (title, desc)=>{
    // console.log("I am adding the ", title, desc);
    let sno = (todos.length) + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    console.log(myTodo);
    setTodos([...todos, myTodo]);

  };

  const [todos, setTodos] = useState(initTodo); // Load the Initial Values
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
      {/* <Router>
        <Header title="My Todos List" searchBar={false} /> 
        <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDeleteFun} /> 
            </>)
            }}> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
        </Switch> 
        <Footer />
    </Router> */}

    <Router>
      <Header title="My todos list" searchBar={false} />
      <Routes>
        {/* <Route path="/" 
        render = { () =>
          <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDeleteFun} /> 
          </>
        } 
        /> */}
        <Route path="/" exact element={<AddTodo addTodo={addTodo} />} />
        <Route path="/list" exact element={<Todos todos={todos} onDelete={onDeleteFun} /> } />

        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<About />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
