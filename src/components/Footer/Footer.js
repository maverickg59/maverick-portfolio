import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { USFlag } from '../Flag'

const Footer = ({ isSplash }) => {
  return (
    <Fragment>
      {isSplash && (
        <div className='c-footer o-row o-justify--end'>
          <div className='o-row__item o-row__item--shrink'>
            <USFlag />
          </div>
        </div>
      )}
    </Fragment>
  )
}

Footer.propTypes = {
  isSplash: PropTypes.bool.isRequired,
}

export default Footer
