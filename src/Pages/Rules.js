import React, { Component } from 'react'
import MainButton from '../Components/MainButton'
import ArrowButtons from '../Components/ArrowButtons'

class Rules extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.callChangePage('questions')
  }

  render() {
    return [
      <div key='A' className="start-bg" style={{ backgroundImage: "url('image/second-screen-bg.jpg')" }}></div>,
      <div key='B' className="start-top-text">
        Готовы на это ради второй половинки?
      </div>,
      <div key='C' className="second-center">
        Выберите ответ и смахните экран:
      </div>,
      <ArrowButtons key='D' />,
      <div key='E' className="start-slider-button">
        <MainButton action={this.handleClick} title='Начать' />
      </div>
    ]
  }
}

export default Rules
