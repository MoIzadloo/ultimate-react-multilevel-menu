import React, { useState } from 'react'
import CollapseProps from './collapse.props'
import classNames from 'classnames'
import './collapse.less'
import Nav from '../nav/nav'

/**
 * A generic Collapse
 * @returns Element
 */
function Collapse (props: CollapseProps): React.ReactElement {
  const [isCollapsed, setIsCollapsed] = useState(true)
  return (
    <>
      <div onClick={() => { setIsCollapsed(!isCollapsed) }} className={classNames('navbar-toggler', { collapsed: !isCollapsed })}>
        <span className={classNames('navbar-toggler-line')} />
        <span className={classNames('navbar-toggler-line')} />
        <span className={classNames('navbar-toggler-line')} />
      </div>
      <Nav collapsed={isCollapsed}>
        {props.children}
      </Nav>
    </>
  )
}

export default Collapse
