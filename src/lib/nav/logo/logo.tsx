import React from 'react'
import logoProps from './logo.props'
import classNames from 'classnames'
import './logo.less'

/**
 * A generic Logo
 * @returns Element
 */
function Logo (props: logoProps): JSX.Element {
  return (
    <div className={classNames('logo-container', props.className)}>
      <a href={props.href}>
        {props.children}
      </a>
    </div>
  )
}

export default Logo
