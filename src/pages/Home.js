import React, { Fragment } from 'react'
import { Button, Icon } from 'maverick-toolkit-react'

import { SPLASH_LINKS } from '../lib'

function Home() {
  return (
    <div className='o-row__item o-row__item--shrink'>
      <h1 className='o-col o-col--standard'>
        <span>CHRIS WHITE</span>
        <span>ROCKS</span>
        <span>THAT'S WHAT MOM TELLS ME</span>
      </h1>
      {SPLASH_LINKS.map(({ url, ariaLabel, title, icon }, i) => {
        const isLeft = i === 0
        const iconClassName = isLeft ? 'r' : 'l'
        return (
          <Fragment key={title}>
            <Button
              className={`c-home__splash-link c-home__splash-link--border-${iconClassName}`}
              color='link-light'
              href={url}
              ariaLabel={ariaLabel}>
              {isLeft && (
                <Icon
                  className={`u-m-${iconClassName}-sm`}
                  icon={icon}
                  color='#FFFFFF'
                />
              )}
              <span>{title}</span>
              {!isLeft && (
                <Icon
                  className={`u-m-${iconClassName}-sm`}
                  icon={icon}
                  color='#FFFFFF'
                />
              )}
            </Button>
          </Fragment>
        )
      })}
    </div>
  )
}

export default Home
