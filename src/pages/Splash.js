import React from 'react'
import { Button, Icon } from 'maverick-toolkit-react'

import { SPLASH_LINKS } from '../lib'

function Splash() {
  return (
    <div className='o-row__item o-row__item--shrink'>
      <div className='o-col o-col--standard o-align--center'>
        <div className='o-col__item o-col__item--shrink'>
          <h1 className='c-home__title o-col o-col--standard u-text-center'>
            <span className='c-home__title-row--m u-m-b-lg'>CHRIS WHITE</span>
            <span className='c-home__title-row--l u-m-b-md'>ROCKS</span>
            <span className='c-home__title-row--s u-m-b-lg'>
              THAT'S WHAT MOM TELLS ME
            </span>
          </h1>
        </div>
        <div className='o-col__item o-col__item--shrink'>
          <div className='o-row o-justify--center'>
            {SPLASH_LINKS.map(({ url, ariaLabel, title, icon }, i) => {
              const isLeft = i === 0
              const iconClassName = isLeft ? 'r' : 'l'
              return (
                <div className='o-row__item o-row__item--shrink' key={title}>
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
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Splash
