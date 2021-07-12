import React from 'react'
import { Button } from 'maverick-toolkit-react'

import { SPLASH_LINKS } from '../lib'

function Home() {
  return (
    <div className='o-row__item o-row__item--shrink'>
      {SPLASH_LINKS.map(({ url, ariaLabel, title }, i) => (
        <Button
          className={`c-home__splash-link c-home__splash-link--border-${
            i === 0 ? 'left' : 'right'
          }`}
          color='link-light'
          href={url}
          ariaLabel={ariaLabel}>
          {title}
        </Button>
      ))}
    </div>
  )
}

export default Home
