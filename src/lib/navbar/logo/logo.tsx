import React from 'react'
import LogoProps from './logo.props'
import classNames from 'classnames'
import './logo.less'
import { RefForwardingComponent } from '../../helper'

/**
 * A generic Logo
 * @returns Element
 */
const Logo: RefForwardingComponent<'a', LogoProps> = React.forwardRef<HTMLElement, LogoProps>((
  {
    as: Component = 'a',
    className,
    'data-testid': dataTestid,
    ...props
  },
  ref
) => {
  return (
    <div className={classNames('logo-container', className)} data-testid={dataTestid}>
      <Component ref={ref} {...props}>
        {props.children}
      </Component>
    </div>
  )
})

export default Logo
