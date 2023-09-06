import React, { useState } from 'react'
import ItemsProps from './items.props'
import classNames from 'classnames'
import './items.less'

/**
 * A generic Items
 * @returns Element
 */
function Items (props: ItemsProps): JSX.Element {
  const [isPopped, setPop] = useState(false)
  return (
    <li className={classNames('nav-item', { isNavbar: !(props.isCollapse ?? false) }, props.className)}>
      <a
        onClick={(e) => {
          if (props.isCollapse === true) {
            if (!isPopped) {
              e.preventDefault()
            }
            setPop(!isPopped)
          }
        }} className={classNames('item', 'dropDown')} href={props.href}
      >{props.title}
      </a>
      <ul className={classNames('nav-items', { isCollapse: (props.isCollapse ?? true) && isPopped })}>
        {props.children}
      </ul>
    </li>
  )
}

export default Items
