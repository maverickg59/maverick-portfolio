import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ title, value }) => {
  return (
    <div className='o-row'>
      <p>{title}</p>
      <p>{value}</p>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

export default Card
