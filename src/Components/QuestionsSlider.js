import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'

const settings = {
  dots: false,
  infinite: false,
  accessibility: false,
  arrows: false,
  fade: true,
  useCSS: false,
  pauseOnHover: false,
  swipe: false,
  slidesToShow: 1,
  slidesToScroll: 1
}

class QuestionsSlider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      endSlide: props.data.length,
      currentSlide: 1
    }

    this.next = this.next.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.nextSlide) {
      if (this.state.endSlide > this.state.currentSlide) {
        this.next()
      } else {
        this.props.handleChangePage()
      }
    }
  }

  next() {
    this.setState((prevState) => {
      return { currentSlide: prevState.currentSlide + 1 }
    })
    this.slider.slickNext()
    this.props.resetNextSlide()
  }

  render() {
    const { data } = this.props

    return (
      <Slider ref={c => this.slider = c} {...settings}>
        {data.map((item, index) =>
          <div key={index}>
            <div className="start-bg" style={{ backgroundImage: `url(${item.image})` }}></div>
            <div className="question-wrap" style={{ backgroundImage: item.background }}>
              <div className="question-text">
                {item.text}
              </div>
            </div>
          </div>)}
      </Slider>
    )
  }
}

export default QuestionsSlider
