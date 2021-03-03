import React, { Component } from "react";
import axios from "axios";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    // inicializamos el estado con los todos
    this.state = {
      todos: [],
      newTodo: "",
    };
  }


  componentDidMount() {
    console.log("did mount");
    // ir a por los datos
    axios
      .get("http://localhost:8000/todos")
      .then((res) => {
        // actualizar el estado con los datos datos que nos hemos traido
        console.log(res.data);
        this.setState({
          todos: res.data,
        });
      })
      .catch((err) => console.error(err));
  }

  // Click Handler
  onBtnClicked = () => {
    // Crear un nuevo todo object
    const newTodoObject = {
      todo: this.state.newTodo,
      author: "alfonso",
      done: false,
    };
    axios
      .post("http://localhost:8000/todos", newTodoObject)
      .then(
        res => this.setState({
          todos: [...this.state.todos, res.data],
        })

        // res => {
        //     const nuevoarray = [...this.state.todos]
        //     nuevoarray.push(res.data)
        //     this.setState(
        //         {
        //             todos: nuevoarray
        //         }
        //     )
        // }
      )
      .catch(console.error);

    // Enviarlo por post al servidor
  };

  onChangeInput = (e) => {
    this.setState({
      newTodo: e.target.value.toUpperCase(),
    });
  };

  render() {
    console.log("render");

    const { todos } = this.state;

    return (
      <div className="todo-list">
        <ul>
          {todos.map((i) => (
            <li key={i.id}>{i.todo}</li>
          ))}
        </ul>

        <input
          type="text"
          onChange={(e) => this.onChangeInput(e)}
          value={this.state.newTodo}
        ></input>
        <button onClick={this.onBtnClicked}>Grabar</button>
      </div>
    );
  }
}

export default TodoList;
