import React from 'react'
import PropTypes from 'prop-types'

const NavBar = ({ links }) => {
  return <nav role='navigation' aria-label='headerNavigationBar'></nav>
}

NavBar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default NavBar
