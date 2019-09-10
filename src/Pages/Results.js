import React, { Component } from 'react'

class Results extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: props.data.find(({ key }) => key === (props.count === 0 ? 1 : props.count))
    }
  }

  render() {
    const { data } = this.state

    return [
      <div key='A' className="start-bg" style={{ backgroundImage: "url('image/final-bg.jpg')" }}></div>,
      <div key='B' className="final-text-top">
        Идеальная пара
        для вас...
      </div>,
      <div key='C' className="final-text-desc">
        {data.title}
      </div>,
      <div key='D' className="final-text-type">
        {data.description}
      </div>,
      <div key='E' className="final-image-wrap">
        <img className="final-image" src={data.image} alt={data.title} />
      </div>,
      <div key='F' className="start-slider-button">
        <a href='https://www.tassimo.ru/' className="final-button">
          Узнайте больше о Tassimo
        </a>
      </div>
    ]
  }
}

export default Results
