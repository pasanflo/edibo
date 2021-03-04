import React, { Component } from 'react'
import axios from 'axios'

export default class UserList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users").then(
            res=> this.setState({users: res.data})
        )
    }


    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.users.map(
                            i => <li>{i.name}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

