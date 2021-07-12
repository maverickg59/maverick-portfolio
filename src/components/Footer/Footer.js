import React from 'react'
import { USFlag } from '../Flag'

const Footer = props => {
  return (
    <div className='c-footer o-row o-justify--end'>
      <div className='o-row__item o-row__item--shrink'>
        <USFlag />
      </div>
    </div>
  )
}

export default Footer
