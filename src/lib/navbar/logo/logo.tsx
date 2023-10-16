import React from 'react'
import LogoProps from './logo.props'
import classNames from 'classnames'
import './logo.less'
import { RefForwardingComponent } from '../../helper'

/**
 * The Logo component is the container of your logo which can be an image or simple text
 * @param href - Logo url link
 * @param as - The component that link render as
 * @param className - CSS class for container div tags
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
