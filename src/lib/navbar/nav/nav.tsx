import React, { useEffect, useState } from 'react'
import CollapseProps from './nav.props'
import classNames from 'classnames'
import './nav.less'

/**
 * A generic Nav
 * @returns Element
 */
function Nav (props: CollapseProps): JSX.Element {
  const { collapsed = false } = props
  const [isCollapsed, setIsCollapsed] = useState(collapsed)
  useEffect(() => {
    setIsCollapsed(collapsed)
  }, [props.collapsed])
  return (
    <>
      <ul className={classNames('nav')}>
        {props.children}
      </ul>
      <ul className={classNames('navbar-collapse', { show: !isCollapsed })}>
        {props.children}
      </ul>
    </>
  )
}

export default Nav
