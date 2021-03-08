import React from 'react'

class Timer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ahora: new Date(),
      otra: "otra"
    }
  }

  // newstate = {...oldstate, ...prop}

  componentDidMount() {
    // console.log("timer está montado")
    // programo una función que se ejecuta cada segundo
    setInterval(() => {
      this.setState(
        {
          ahora: new Date()
        }
      )
    }, 1000);
  }

  render() {
    return (
      <div className="timer">
        <h1>
          {this.state.ahora.toLocaleTimeString()}
        </h1>
      </div>
    )
  }
}

export default Timer