// Write your code here
import {Component} from 'react'
import './index.css'

const urlh = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

export default class CoinToss extends Component {
  state = {totalc: 0, heads: 0, tails: 0, pres: 'h'}

  hed = () => {
    this.setState(prev => ({
      totalc: prev.totalc + 1,
      heads: prev.heads + 1,
      pres: 'h',
    }))
  }

  tail = () => {
    this.setState(prev => ({
      totalc: prev.totalc + 1,
      tails: prev.tails + 1,
      pres: 't',
    }))
  }

  gen = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult > 0) {
      ;<>{this.tail()}</>
    } else {
      ;<>{this.hed()}</>
    }
  }

  render() {
    const {totalc, heads, tails, pres} = this.state
    const url =
      pres === 'h'
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="main">
        <div className="sec">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={url} alt="toss result" />
          <div>
            <button type="button" onClick={this.gen}>
              Toss Coin
            </button>
          </div>
          <div className="result">
            <p>{`Total:${totalc} `}</p>
            <p>{`heads:${heads}`}</p>
            <p>{`tails:${tails}`}</p>
          </div>
        </div>
      </div>
    )
  }
}
