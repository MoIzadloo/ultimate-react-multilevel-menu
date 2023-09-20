import React, { useState } from 'react'
import ItemsProps from './items.props'
import classNames from 'classnames'
import './items.less'
import { NavContext } from '../nav/nav'
import { PrefixRefForwardingComponent } from '../../helper'

/**
 * A generic Items
 * @returns Element
 */
const Items: PrefixRefForwardingComponent<'a', ItemsProps> = React.forwardRef<HTMLElement, ItemsProps>((
  {
    as: Component = 'a',
    title,
    ...props
  },
  ref
) => {
  const [isPopped, setPop] = useState(false)

  return (
    <NavContext.Consumer>
      {(context) => {
        return (
          <li className={classNames('nav-item', { 'is-navbar': !context.isCollapse }, props.className)}>
            <Component
              ref={ref}
              onClick={(e: any) => {
                if (context.isCollapse) {
                  if (!isPopped) {
                    e.preventDefault()
                  }
                  setPop(!isPopped)
                }
              }} {...props} className={classNames('item', 'dropdown')}
            >{title}
            </Component>
            <ul className={classNames('nav-items', { collapsed: context.isCollapse && isPopped })}>
              {props.children}
            </ul>
          </li>
        )
      }}
    </NavContext.Consumer>
  )
})

export default Items
