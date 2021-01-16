import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ title, value }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{value}</p>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default Card
