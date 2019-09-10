import React from 'react'

const MainButton = ({ action, title }) => (
  <button className='black-button' onClick={action}>{title}</button>
)

export default MainButton
