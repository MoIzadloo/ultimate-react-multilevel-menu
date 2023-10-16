import React from 'react'
import NavProps from './navbar.props'
import classNames from 'classnames'
import './navbar.less'

/**
 * The Navbar component is the container of all other components and you can change the color scheme by using the predefined CSS classes or your custom CSS classes
 * @param dir - Menu direction
 * @param className - CSS class for nav tag
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
