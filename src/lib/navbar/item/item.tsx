import React from 'react'
import ItemProps from './item.props'
import classNames from 'classnames'
import './item.less'
import { PrefixRefForwardingComponent } from '../../helper'

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
    <li className={classNames('nav-item', props.className)}>
      <Component ref={ref} {...props} className={classNames('item')}>
        {props.children}
      </Component>
    </li>
  )
})

export default Item
