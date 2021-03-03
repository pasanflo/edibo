import React from "react";
import Title from "./components/Title"
import TodoList from "./components/TodoList";
import faker, { image } from 'faker'
import CommentsList from "./components/CommentsList";

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

  const comments = []

  for (let index = 0; index < 40; index++) {
    comments.push(
      {
        avatar: image.people(),
        name: faker.name.firstName(),
        date: faker.date.past(),
        comment: faker.lorem.sentence()
      }
    )    
  }

  return (
    <div className="app">
      <Title texto="Mi primera React App" />
      {/* <TodoList lista = {todoList}></TodoList> */}
      <CommentsList comments={comments}></CommentsList>
    </div>
  )
}

export default App;

// TitleCase
// camelCase
// kebap-case 
// snake_case
