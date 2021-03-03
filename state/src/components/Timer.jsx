import React from 'react'

class Timer extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            ahora: new Date(),
            otra: "otra"
        }
    }

    // newstate = {...oldstate, ...prop}

    componentDidMount(){
        console.log("timer está montado")
        // programo una función que se ejecuta cada segundo
        setInterval(() => {
            // console.log("nuevo segundo")
            // Cambiar el estado por la nueva fecha cada segundo
            this.setState(
                {
                    ahora: new Date()
                }
            )
        }, 1000);
    }

    componentWillMount() {
        console.log("componente se montará")
    }
   
    render() {
        console.log("render")
        return (
            // <h1>{ahora.getHours()} : {ahora.getMinutes()}</h1>
            <div className="timer">
                <h1>{`${this.state.ahora.getHours()} : 
                    ${this.state.ahora.getMinutes()} : 
                    ${this.state.ahora.getSeconds()}`}</h1>
                <h2>{this.state.ahora.toLocaleDateString()}</h2>
            </div>
        )
    }
}

export default Timer