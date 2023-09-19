import React from 'react'
import ItemProps from './item.props'
import classNames from 'classnames'
import './item.less'

/**
 * A generic Item
 * @returns Element
 */
function Item (props: ItemProps): React.ReactElement {
  const { as: Cmp = 'a', ...rest } = props
  return (
    <li className={classNames('nav-item', props.className)}>
      <Cmp {...rest} className={classNames('item')}>
        {props.children}
      </Cmp>
    </li>
  )
}

export default Item
