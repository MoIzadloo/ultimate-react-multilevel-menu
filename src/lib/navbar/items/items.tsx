import React from 'react'
import ItemsProps from './items.props'
import classNames from 'classnames'
import './items.less'
import { NavContext } from '../nav/nav'
import { PrefixRefForwardingComponent } from '../../helper'
import { CollapseContext } from '../collapse/collapse'

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
  const [isPopped, setPop] = React.useState(false)

  return (
    <CollapseContext.Consumer>
      {(context) => {
        return (
          <NavContext.Consumer>
            {(navCtxt) => {
              if (navCtxt != null) {
                if (navCtxt.isPoped) {
                  setPop(false)
                  navCtxt.setIsPoped(false)
                }
                return (
                  <li className={classNames('nav-item', { 'is-navbar': !navCtxt.isCollapse }, props.className)}>
                    <Component
                      ref={ref}
                      onClick={(e: any) => {
                        if (navCtxt?.isCollapse) {
                          if (!isPopped) {
                            e.preventDefault()
                          } else {
                            if (context != null && !context.isCollapsed && props.href != null && props.href !== '' && props.href !== undefined) {
                              context.setIsCollapsed(!context.isCollapsed)
                              navCtxt.setIsPoped(true)
                            }
                          }
                          setPop(!isPopped)
                        }
                      }} {...props} className={classNames('item', 'dropdown')}
                    >{title}
                    </Component>
                    <ul className={classNames('nav-items', { collapsed: navCtxt.isCollapse && isPopped && (context != null ? !context.isCollapsed : true) })}>
                      {props.children}
                    </ul>
                  </li>
                )
              }
            }}
          </NavContext.Consumer>
        )
      }}

    </CollapseContext.Consumer>
  )
})

export default Items
