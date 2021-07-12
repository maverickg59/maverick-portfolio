import React from 'react'
import { Navbar } from '../Navbar'
import { NAVBAR_LINKS } from '../../lib'

const Header = () => {
  const path = window.location.pathname
  return (
    <div className='c-header o-row'>
      <div className='c-header__logo o-row__item o-row__item--shrink u-m-sm'>
        <span>C:/White</span>
      </div>
      {path.split('').length > 1 && (
        <div className='o-row__item'>
          <Navbar links={NAVBAR_LINKS} color='link-light' />
        </div>
      )}
    </div>
  )
}

export default Header
