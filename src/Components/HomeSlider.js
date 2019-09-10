import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import HomeSliderItem from './HomeSliderItem'

const settings = {
  dots: false,
  infinite: true,
  accessibility: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1300,
  fade: true,
  useCSS: false,
  swipe: false,
  pauseOnHover: false,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const HomeSlider = props => {
  const { data } = props
  
  return (
    <Slider {...settings}>
      {data.map((item, index) =>
        <div key={index}>
          <HomeSliderItem data={item} />
        </div>
      )}
    </Slider>
  )
}

export default HomeSlider
