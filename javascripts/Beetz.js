import React, { Component } from 'react';
const shuffle = require('shuffle-array')

class Beetz extends Component {
  constructor() {
    super()
    this.state = {
      audio: []
    }
  }

  playSound() {
    document.addEventListener('keydown', (event) => {
      if(event.keyCode === 70) {
        let audio1 = new Audio("../wav/60key.wav")
        let audio2 = new Audio("../wav/80pmsnare.wav")
        let audio3 = new Audio("../wav/84.347.wav")
        let audio4 = new Audio("../wav/808BONGO.wav")
        let audio5 = new Audio("../wav/808clap.wav")
        let audio6 = new Audio("../wav/808drop.wav")
        let audio7 = new Audio("../wav/hip-hop.mp3")
        let audio8 = new Audio("../wav/hit1.wav")
        this.state.audio.push(audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8)
        shuffle.pick(this.state.audio).play()
      }
    })
  }

  render() {
    return(
      <div>
        <p>In the Beetz</p>
        { this.playSound() }
        <img className='shadow-beet' height='100' width='100' src='../images/beetShadow.png'></img>
      </div>
    )
  }
}

export default Beetz;
