import React from "react";
import Title from "./components/Title"
import TodoList from "./components/TodoList";
import faker from 'faker'

function App() {

  const todoList = []

  for (let index = 0; index < 40; index++) {
    todoList.push(
      {
        todo: faker.lorem.sentence(),
        done: false
      }
    )    
  }

  return (
    <div className="app">
      <Title texto="Mi primera React App" />
      <TodoList lista = {todoList}></TodoList>
    </div>
  )
}

export default App;

// TitleCase
// camelCase
// kebap-case 
// snake_case
