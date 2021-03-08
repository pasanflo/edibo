import React, { Component } from "react";
import axios from "axios";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import "./Todos.css"

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  addTodo = (todo) => {
    this.setState({
        todos: [...this.state.todos, todo]
    })
  }

  componentDidMount() {
    axios
      .get("http://localhost:8000/todos")
      .then((res) => {
        this.setState({
          todos: res.data,
        });
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="todos">
        <TodoList todos={this.state.todos} ></TodoList>
        <TodoForm addTodo={this.addTodo}></TodoForm>
      </div>
    );
  }
}

export default Todos;
