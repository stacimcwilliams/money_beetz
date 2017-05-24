import React, { Component } from 'react';

export default class Timer extends Component {
  constructor() {
    super()
    this.state = {
      status: 'timer',
      timer: {
        min: 0,
        sec: 10
      },
      pom: {
        min: 5,
        sec: 0
      }
    }
  }

  timerCountdown(timeObj){
      const intervalVariable = setInterval( () => {
        if (timeObj.sec > 0 && timeObj.min >= 0) {
          timeObj.sec --;
        } else if (timeObj.sec === 0 && timeObj.min > 0) {
          timeObj.sec = 59;
          timeObj.min --;
        } else {
          this.state.status === 'timer' ? this.setState({ status: 'pom' }) : this.setState({ status: 'timer' })
          clearInterval(intervalVariable)
        }
        const { min, sec } = timeObj
        const newState = Object.assign({}, this.state, {['timeObj'] : { sec, min}})
        this.setState(newState)
      }, 1000)
  }

  render() {
    const { timer, pom, status } = this.state;
    return (
      <div>
        <h2 className='header'>{status}</h2>
        <p>{this.state[status].min}m</p>
<<<<<<< HEAD
        <p>{timer.sec}sec</p>
        <h2 className='header'>POM Timer</h2>
        <p>{pom.min}m</p>
        <p>{pom.sec}sec</p>
        <button className='start-btn btn' onClick={() => this.timerCountdown(timer) }>Start Timer</button>
        <button className='pom-btn btn' onClick={() => this.timerCountdown(pom) }>Start Pom</button>
=======
        <p>{this.state[status].sec}sec</p>
        <button onClick={() => this.timerCountdown(this.state[status]) }>Start {status}</button>
>>>>>>> 6b282e7ed3636505bedd23449213ca3b82fdf8b3
      </div>
    )
  }


}
