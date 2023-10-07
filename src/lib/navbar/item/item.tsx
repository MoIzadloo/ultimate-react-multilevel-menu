import React from 'react'
import ItemProps from './item.props'
import classNames from 'classnames'
import './item.less'
import { RefForwardingComponent } from '../../helper'
import { CollapseContext, NavContext } from '../../context'

/**
 * A generic Item
 * @returns Element
 */
const Item: RefForwardingComponent<'a', ItemProps> = React.forwardRef<HTMLElement, ItemProps>((
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
