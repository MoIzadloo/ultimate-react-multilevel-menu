import React, { useState } from 'react'
import CollapseProps from './collapse.props'
import classNames from 'classnames'
import './collapse.less'
import Items from '../items/items'

/**
 * A generic Collapse
 * @returns Element
 */
function Collapse (props: CollapseProps): JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(true)
  function traverse (props: any): any[] {
    const clone: any[] = []
    if (props.children !== undefined && Array.isArray(props.children)) {
      clone.push(props.children.map((child: any) => {
        if (child.type === Items) {
          return React.cloneElement(child, { isCollapse: true }, traverse(child.props))
        } else {
          return React.cloneElement(child, { isCollapse: true })
        }
      }))
    } else if (typeof props.children === 'object') {
      clone.push(React.cloneElement(props.children, { isCollapse: true }))
    }
    return clone
  }
  return (
    <>
      <div onClick={() => { setIsCollapsed(!isCollapsed) }} className={classNames('navbar-toggler', { collapsed: !isCollapsed })}>
        <span className={classNames('navbar-toggler-line')} />
        <span className={classNames('navbar-toggler-line')} />
        <span className={classNames('navbar-toggler-line')} />
      </div>
      <ul className={classNames('nav')}>
        {props.children}
      </ul>
      <ul className={classNames('navbar-collapse', { show: !isCollapsed })}>
        {traverse(props)}
      </ul>
    </>
  )
}

export default Collapse
