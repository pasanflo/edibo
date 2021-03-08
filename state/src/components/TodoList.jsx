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
        // actualizar el estado con los datos datos que nos hemos traido
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
    // Enviarlo por post al servidor (crear elemento)
    axios
      .post("http://localhost:8000/todos", newTodoObject)
      .then(
        res => this.setState({
          todos: [...this.state.todos, res.data],
        })
      )
      .catch(console.error);

  };

  onChangeInput = (e) => {
    this.setState({
      newTodo: e.target.value.toUpperCase(),
    });
  };

  borrarElemento = (id) => {
    axios.delete(`http://localhost:8000/todos/${id}`).then(
      this.setState(
        {
          todos: this.state.todos.filter(i => i.id !== id)
        }
      )
    )
  }

  terminarTodo = id => {
    const todo = this.state.todos.find(i => i.id == id)
    todo.done = true
    console.log(todo)
    // Modificamos el elemento en base de datos 
    axios.put(
      `http://localhost:8000/todos/${id}`,
      todo
    ).then(
      // Modificar el todo en nuestro estado
      res => {
        // const todo = res.data;
        // const nuevosTodos = this.state.todos.filter(i => i.id != todo.id);
        // nuevosTodos.push(todo)
        // this.setState({
        //   todos: nuevosTodos
        // })

        this.setState(
          {
            todos: [...this.state.todos.filter(i => i.id != todo.id), res.data]
          }
        )
      }
    ).catch(
      console.error
    )
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
              {!i.done && <button onClick={() => this.terminarTodo(i.id)} >Terminar</button>}
            </li>
          ))}
        </ul>
        <input
          type="text"
          onChange={(e) => this.onChangeInput(e)}
          value={this.state.newTodo}
        ></input>
        <button onClick={this.addTodo}>Grabar</button>
      </div>
    );
  }
}

export default TodoList;
