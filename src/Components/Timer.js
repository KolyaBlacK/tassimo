import React, { Component } from 'react'

class Timer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 5
    }

    this.tick = this.tick.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.startTimer) {
      clearInterval(this.timer)
      this.setState({
        count: 5
      })
      this.timer = setInterval(this.tick, 1000)
    }
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState((prevState) => {
      if (prevState.count <= 0) {
        clearInterval(this.timer)
        this.props.finishTimer()
        this.props.resetTimer()
      } else {
        return { count: prevState.count - 1 }
      }
    })
  }

  render() {
    const { count } = this.state

    return (
      <div className='time-wrap'>
        <div className='time-item'>00 : 0{count}</div>
      </div>
    )
  }
}

export default Timer
