import React, { Component } from 'react'

class TodoList extends Component {



    render() {

        console.log("render")

        const todos = this.props.todos || [];

        return (
            <div className="todo-list">
            <ul>
              {todos.map((i) => (
                <li key={i.id}>
                  {i.todo} 
                  {i.done ? " Hecho ":" Pendiente "}
                  </li>
              ))}
            </ul>
          </div>
        )
    }
}

export default TodoList
