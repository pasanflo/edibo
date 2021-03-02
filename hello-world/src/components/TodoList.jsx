import React from 'react'

const TodoList = (props) => {

    return (
        <div className="todo-list">
            <ul>
                {
                    props.lista.map( (i, index) => <li key={index}>{i.todo}</li> )
                }
            </ul>
        </div>
    )
}

export default TodoList
