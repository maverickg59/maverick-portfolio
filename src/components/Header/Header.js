import React, { Fragment } from 'react'
import { Navbar } from '../Navbar'
import { NAVBAR_LINKS } from '../../lib'

const Header = () => {
  const path = window.location.pathname
  return (
    <Fragment>
      {path.split('').length > 1 && (
        <div className='c-header o-row'>
          <div className='c-header__logo o-row__item o-row__item--shrink u-m-sm'>
            <span>C:/White</span>
          </div>
          <div className='o-row__item'>
            <Navbar links={NAVBAR_LINKS} color='link-light' />
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default Header
