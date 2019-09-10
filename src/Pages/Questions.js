import React, { Component } from 'react'
import Swipeable from 'react-swipeable'
import QuestionsSlider from '../Components/QuestionsSlider'
import Timer from '../Components/Timer'
import ArrowButtons from '../Components/ArrowButtons'

const RIGHT = 'right';
const LEFT = 'left';

class Questions extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      nextSlide: false,
      startTimer: false
    }

    this.handleFinishTimer = this.handleFinishTimer.bind(this)
    this.resetNextSlide = this.resetNextSlide.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
    this.handleChangePage = this.handleChangePage.bind(this)
  }

  handleFinishTimer() {
    this.setState({
      nextSlide: true
    })
  }

  resetNextSlide() {
    this.setState({
      nextSlide: false,
      startTimer: true
    })
  }

  resetTimer() {
    this.setState({
      startTimer: false
    })
  }

  handleChangePage() {
    this.props.handleCount(this.state.count)
    this.props.callChangePage('results')
  }

  onSwiped(direction) {
    const change = direction === RIGHT ? RIGHT : LEFT;

    if (change === RIGHT) {
      this.setState((prevState) => {
        return {
          count: prevState.count >= 5 ? prevState.count : prevState.count + 1,
          nextSlide: true
        }
      })
    } else {
      this.setState({
        nextSlide: true
      })
    }
  }

  render() {
    const { data } = this.props
    const { nextSlide, startTimer } = this.state
    return [
      <div key='A' className='start-slider'>
        <QuestionsSlider data={data} nextSlide={nextSlide} resetNextSlide={this.resetNextSlide} handleChangePage={this.handleChangePage} />
      </div>,
      <Swipeable
        key='B'
        className="swiper"
        trackMouse
        preventDefaultTouchmoveEvent
        onSwipedLeft={() => this.onSwiped(LEFT)}
        onSwipedRight={() => this.onSwiped(RIGHT)}>
        <ArrowButtons />
      </Swipeable>,
      <Timer key='C' finishTimer={this.handleFinishTimer} startTimer={startTimer} resetTimer={this.resetTimer} />
    ]
  }
}

export default Questions
