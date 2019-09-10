import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import HomeSliderItem from './HomeSliderItem'

class HomeSlider extends Component {
  render() {
    const { data } = this.props
    const settings = {
      dots: false,
      infinite: true,
      accessibility: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1000,
      fade: false,
      useCSS: false,
      swipe: false,
      pauseOnHover: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    
    return (
      <Slider {...settings}>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <HomeSliderItem data={item}/>
            </div>
          )
        })}
      </Slider>
    )
  }
}

export default HomeSlider
