import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Navbar } from '../Navbar'
import { NAVBAR_LINKS } from '../../lib'

const Header = ({ isSplash }) => {
  return (
    <Fragment>
      {!isSplash && (
        <div className='c-header o-row'>
          <div className='c-header__logo o-row__item o-row__item--shrink u-m-sm'>
            <span>C:/White</span>
          </div>
          <div className='o-row__item'>
            <Navbar links={NAVBAR_LINKS} color='link-dark' />
          </div>
        </div>
      )}
    </Fragment>
  )
}

Header.propTypes = {
  isSplash: PropTypes.bool.isRequired,
}

export default Header
