import React, { Component } from 'react';
import HomeSlider from '../Components/HomeSlider'
import MainButton from '../Components/MainButton'

class Home extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.callChangePage('rules')
  }

  render() {
    const { data } = this.props

    return [
      <div key='A' className='start-bg'></div>,
      <div key='B' className='start-top-text'>
        Найдите свою<br />
        идеальную пару<br />
        с TASSIMO!
      </div>,
      <div key='C' className='start-slider disabled-transition'>
        <HomeSlider data={data} />
      </div>,
      <div key='D' className='start-slider-button'>
        <MainButton action={this.handleClick} title='Найти пару' />
      </div>
    ]
  }
}

export default Home
