import React from 'react'
import ItemProps from './item.props'
import classNames from 'classnames'
import './item.less'
import { PrefixRefForwardingComponent } from '../../helper'
import { CollapseContext } from '../collapse/collapse'
import { NavContext } from '../nav/nav'

/**
 * A generic Item
 * @returns Element
 */
const Item: PrefixRefForwardingComponent<'a', ItemProps> = React.forwardRef<HTMLElement, ItemProps>((
  {
    as: Component = 'a',
    ...props
  },
  ref
) => {
  return (
    <CollapseContext.Consumer>
      {(context) => {
        return (
          <NavContext.Consumer>
            {(navCtxt) => {
              return (
                <li className={classNames('nav-item', props.className)}>
                  <Component
                    ref={ref} onClick={() => {
                      context?.setIsCollapsed(!context.isCollapsed)
                      navCtxt?.setIsPoped(true)
                    }} {...props} className={classNames('item')}
                  >
                    {props.children}
                  </Component>
                </li>
              )
            }}
          </NavContext.Consumer>
        )
      }}
    </CollapseContext.Consumer>

  )
})

export default Item
