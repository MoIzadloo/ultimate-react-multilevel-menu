import React from 'react'
import NavProps from './navbar.props'
import classNames from 'classnames'
import './navbar.less'

/**
 * A generic Navbar
 * @returns Element
 */
function Navbar (props: NavProps): React.ReactElement {
  return (
    <nav {...props} className={classNames('navbar', props.className, { rtl: props.dir === 'rtl' ? 'rtl' : '' })}>
      {props.children}
    </nav>
  )
}

export default Navbar
