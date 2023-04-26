import React from 'react'
import './title.css'

const Title = ({ greeting }) => {
  return (
    <h1 className='title'>{greeting}</h1>
  )
}

export default Title