import React from 'react'
import LogoProps from './logo.props'
import classNames from 'classnames'
import './logo.less'
import { PrefixRefForwardingComponent } from '../../helper'

/**
 * A generic Logo
 * @returns Element
 */
const Logo: PrefixRefForwardingComponent<'a', LogoProps> = React.forwardRef<HTMLElement, LogoProps>((
  {
    as: Component = 'a',
    ...props
  },
  ref
) => {
  return (
    <div className={classNames('logo-container', props.className)}>
      <Component ref={ref} {...props}>
        {props.children}
      </Component>
    </div>
  )
})

export default Logo
