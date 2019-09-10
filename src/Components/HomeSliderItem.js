import React from 'react'
import InlineSVG from 'svg-inline-react';

const HomeSliderItem = props => {
  const { data } = props
  const svgSource = 
  `<svg width="100%" viewBox="0 0 849 798">
    <defs>
      <linearGradient id="PSgrad_${data.id}" x1="0%" x2="73.135%" y1="68.2%" y2="0%">
        <stop offset="50%" stop-color="${data.gradient.from}" stop-opacity="1"></stop>
        <stop offset="100%" stop-color="${data.gradient.to}" stop-opacity="1"></stop>
      </linearGradient>
    </defs>
    <path fill-rule="evenodd" fill="url(#PSgrad_${data.id})" d="M377.821,1.248 C444.607,-0.137 505.718,18.258 556.358,33.905 C613.277,48.929 670.215,63.958 727.135,78.983 C778.662,93.534 825.412,98.696 843.583,145.787 C863.063,196.271 812.707,329.719 798.622,378.709 C786.217,425.806 773.807,472.917 761.401,520.013 C721.951,628.751 642.059,717.525 537.915,762.207 C492.753,781.583 423.731,806.981 351.633,794.770 C296.565,785.442 246.737,776.278 205.696,752.804 C76.827,679.097 -42.378,520.991 14.633,303.969 C24.759,265.422 39.440,226.634 58.073,195.278 C104.461,117.211 165.292,73.020 200.859,54.001 C236.425,34.983 322.001,6.048 346.772,2.793 C371.545,-0.461 367.472,1.764 377.821,1.248 Z"></path>
  </svg>`
  
  return [
    <div key='A' className='start-slider-logo'>
      <img src={data.logo} alt={data.text} />
    </div>,
    <div key='B' className='start-slider-svg'>
      <InlineSVG src={svgSource} />
    </div>,
    <div key='C' className="slider-cup-text">
      <div className="start-slider-cup" style={{ backgroundImage: `url(${data.image})` }}></div>
      <div className="start-slider-text" style={{ color: data.color }}>
        {data.text.map((item, index) => {
          return <span key={index}>{item}<br /></span>
        })}
      </div>
    </div>
  ]
}

export default HomeSliderItem
