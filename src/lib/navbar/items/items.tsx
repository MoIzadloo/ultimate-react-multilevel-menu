import React, { useState } from 'react'
import ItemsProps from './items.props'
import classNames from 'classnames'
import './items.less'
import { NavContext } from '../nav/nav'

/**
 * A generic Items
 * @returns Element
 */
function Items (props: ItemsProps): React.ReactElement {
  const { as: Cmp = 'a', ...rest } = props
  const [isPopped, setPop] = useState(false)

  return (
    <NavContext.Consumer>
      {(context) =>{
        return(
          <li className={classNames('nav-item', { 'is-navbar': !context.isCollapse }, props.className)}>
            <Cmp
              onClick={(e: any) => {
                if (context.isCollapse) {
                  if (!isPopped) {
                    e.preventDefault()
                  }
                  setPop(!isPopped)
                }
              }} {...rest} className={classNames('item', 'dropdown')}
            >{rest.title}
            </Cmp>
            <ul className={classNames('nav-items', { collapsed: context.isCollapse && isPopped })}>
              {props.children}
            </ul>
          </li>
        )
      }}
    </NavContext.Consumer>
  )
}

export default Items
