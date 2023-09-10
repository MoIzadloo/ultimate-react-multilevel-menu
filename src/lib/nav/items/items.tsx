import React, { useState } from 'react'
import ItemsProps from './items.props'
import classNames from 'classnames'
import './items.less'

/**
 * A generic Items
 * @returns Element
 */
function Items (props: ItemsProps): JSX.Element {
  const { as: Cmp = 'a', ...rest } = props
  const [isPopped, setPop] = useState(false)
  return (
    <li className={classNames('nav-item', { isNavbar: !(props.isCollapse ?? false) }, props.className)}>
      <Cmp
        onClick={(e: any) => {
          if (props.isCollapse === true) {
            if (!isPopped) {
              e.preventDefault()
            }
            setPop(!isPopped)
          }
        }} {...rest} className={classNames('item', 'dropDown')}
      >{props.title}
      </Cmp>
      <ul className={classNames('nav-items', { isCollapse: (props.isCollapse ?? true) && isPopped })}>
        {props.children}
      </ul>
    </li>
  )
}

export default Items
