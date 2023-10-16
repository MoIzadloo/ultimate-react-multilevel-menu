import React from 'react'
import ItemProps from './item.props'
import classNames from 'classnames'
import './item.less'
import { RefForwardingComponent } from '../../helper'
import { CollapseContext, NavContext } from '../../context'

/**
 * The Item component is a single link
 * @param href - Item url link
 * @param as - The component that link render as
 * @param className - CSS class for container li tags
 * @returns Element
 */
const Item: RefForwardingComponent<'a', ItemProps> = React.forwardRef<HTMLElement, ItemProps>((
  {
    as: Component = 'a',
    'data-testid': dataTestid,
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
                <li className={classNames('nav-item', props.className)} data-testid={dataTestid}>
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
