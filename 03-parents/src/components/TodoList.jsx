import React, { Component } from 'react'
import axios from "axios";

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  doCheck = (i) => {
    axios
      .patch(`http://localhost:8000/todos/${i.id}/`, {
        isDone: !i.isDone
      })
      .then((res) =>
        this.props.doCheck(res.data)
      )
      .catch(console.error);
  };



  render() {
    const todos = this.props.todos || [];

    return (
      <div className="todo-list">
        <ul>
          {todos.map((i) => (
            <div>
              <button onClick={_ => this.doCheck(i)}>{i.isDone ? 'Hecho 👌' : 'Por hacer 😐'}</button>
              <li className={i.isDone ? 'done' : 'undone'} key={i.id}>
                {i.todo}
              </li>
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

export default TodoList
