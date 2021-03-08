import React, { Component } from "react";
import axios from "axios";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: "",
    };
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

  onCreated = () => {
    const newTodoObject = {
      todo: this.state.newTodo,
      author: "pablo",
      done: false,
    };
    axios
      .post("http://localhost:8000/todos", newTodoObject)
      .then(
        res => this.setState({
          todos: [...this.state.todos, res.data],
        })
      )
      .catch(console.error);
  };

  onDeleted = (item) => {
    
    axios
      .delete("http://localhost:8000/todos/"+item.id)
      .then(
        _res => this.setState({
          todos: this.state.todos.filter(x => { return x.id !== item.id }),
        })
      )
      .catch(console.error);
  };

  onChangeInput = (e) => {
    this.setState({
      newTodo: e.target.value.toUpperCase(),
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="todo-list">
        <ul>
          {todos.map((i) => (
            <div>
              <li key={i.id}>{i.todo}</li>
              <button key={"delete"+i.id} onClick={_ => this.onDeleted(i)}>Borrar</button>
            </div>
          ))}
        </ul>

        <input
          type="text"
          onChange={(e) => this.onChangeInput(e)}
          value={this.state.newTodo}
        ></input>
        <button onClick={this.onCreated}>Grabar</button>
      </div>
    );
  }
}

export default TodoList;
