import React, { Component } from "react";
import axios from "axios";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputValue: "",
      modifiedItem: null,
      isNew: true,
    };
  }


  componentDidMount() {
    axios
      .get("http://localhost:8000/todos")
      .then((res) => {
        this.setState({
          todos: res.data.sort((a, b) => a.id - b.id),
        });
      })
      .catch((err) => console.error(err));
  }

  onCreated = () => {
    const newTodoObject = {
      todo: this.state.inputValue,
      author: "pablo",
      done: false,
    };
    // Enviarlo por post al servidor (crear elemento)
    axios
      .post("http://localhost:8000/todos", newTodoObject)
      .then(
        res => this.setState({
          todos: [...this.state.todos, res.data].sort((a, b) => a.id - b.id),
        })
      )
      .catch(console.error);

  };

  updateTodo = (todo) => {
    const modifiedObj = {
      id: todo.id,
      todo: this.state.inputValue,
      author: todo.author,
      done: todo.done,
    };

    axios
      .patch(`http://localhost:8000/todos/${todo.id}`, modifiedObj)
      .then(
        res => this.setState({
          todos: [...this.state.todos.filter(x => x.id !== modifiedObj.id), res.data].sort((a, b) => a.id - b.id),
          isNew: true,
          modifiedItem: null,
          inputValue: '',
        })
      )
      .catch(console.error);
  };

  onChangeInput = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  };

  borrarElemento = (id) => {
    axios.delete(`http://localhost:8000/todos/${id}`).then(
      this.setState(
        {
          todos: this.state.todos.filter(i => i.id !== id).sort((a, b) => a.id - b.id)
        }
      )
    )
  }

  terminarTodo = id => {
    const todo = this.state.todos.find(i => i.id === id)
    todo.done = true

    axios.put(
      `http://localhost:8000/todos/${id}`,
      todo
    ).then(
      res => {
        this.setState(
          {
            todos: [...this.state.todos.filter(i => i.id !== todo.id), res.data]
          }
        )
      }
    ).catch(
      console.error("Couldn't set TODOs")
    )
  }

  update = (todo) => {
    this.setState({
      isNew: false,
      modifiedItem: todo,
      inputValue: todo.todo
    })
  }

  render() {
    const { todos } = this.state;

    return (
      <div className="todo-list">
        <ul>
          {todos.map((i) => (
            <li key={i.id}>
              {i.todo}
              {i.done ? " Hecho " : " Pendiente "}
              <button onClick={() => this.borrarElemento(i.id)}>Borrar</button>
              <button onClick={() => this.update(i)}>Modificar</button>
              {!i.done && <button onClick={() => this.terminarTodo(i.id)} >Terminar</button>}
            </li>
          ))}
        </ul>
        <input
          type="text"
          onChange={(e) => this.onChangeInput(e)}
          value={this.state.inputValue}
        ></input>
        {this.state.isNew
          ? <button onClick={this.onCreated}>
            Añadir
          </button>
          : <button onClick={() => this.updateTodo(this.state.modifiedItem)}>
            Modificar
          </button>}
      </div>
    );
  }
}

export default TodoList;
