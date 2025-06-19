import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    timeElapsedInSeconds: 0,
    isTimerRunning: false,
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  onClickStart = () => {
    const {isTimerRunning} = this.state

    if (!isTimerRunning) {
      this.intervalId = setInterval(this.incrementTime, 1000)
      this.setState({isTimerRunning: true})
    }
  }

  onClickStop = () => {
    clearInterval(this.intervalId)
    this.setState({isTimerRunning: false})
  }

  onClickReset = () => {
    clearInterval(this.intervalId)
    this.setState({timeElapsedInSeconds: 0, isTimerRunning: false})
  }

  incrementTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    return seconds > 9 ? seconds : `0${seconds}`
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    return minutes > 9 ? minutes : `0${minutes}`
  }

  render() {
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="app-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="stopwatch-card">
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-icon"
            />
            <p className="timer-text">Timer</p>
          </div>
          <h1 className="time">{time}</h1>
          <div className="buttons-container">
            <button
              type="button"
              className="button start-button"
              onClick={this.onClickStart}
            >
              Start
            </button>
            <button
              type="button"
              className="button stop-button"
              onClick={this.onClickStop}
            >
              Stop
            </button>
            <button
              type="button"
              className="button reset-button"
              onClick={this.onClickReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
