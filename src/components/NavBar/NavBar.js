import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'maverick-toolkit-react'

const Navbar = ({ links, color }) => {
  return (
    <nav role='navigation' aria-label='headerNavigationBar'>
      <ul className='o-row'>
        {links.map(({ url, title, ariaLabel }) => {
          return (
            <li className='o-row__item' key={title}>
              <Button color={color} href={url} ariaLabel={ariaLabel}>
                {title}
              </Button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  color: PropTypes.string.isRequired,
}

export default Navbar
