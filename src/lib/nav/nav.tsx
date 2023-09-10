import React from 'react'
import NavProps from './nav.props'
import classNames from 'classnames'
import './nav.less'

/**
 * A generic Nav
 * @returns Element
 */
function Nav (props: NavProps): JSX.Element {
  return (
    <nav className={classNames('navbar', props.className, { rtl: props.dir === 'rtl' ? 'rtl' : '' })}>
      {props.children}
    </nav>
  )
}

export default Nav
