// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  generateValue = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(prevState => ({
      number: randomNumber,
    }))
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="btn" type="button" onClick={this.generateValue}>
            Generate
          </button>
          <p className="number-text">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
