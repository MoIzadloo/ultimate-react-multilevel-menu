import React from 'react'
import ItemProps from './item.props'
import classNames from 'classnames'
import './item.less'

/**
 * A generic Item
 * @returns Element
 */
function Item (props: ItemProps): JSX.Element {
  return (
    <li className={classNames('nav-item', props.className)}>
      <a className={classNames('item')} href={props.href}>
        {props.children}
      </a>
    </li>
  )
}

export default Item
