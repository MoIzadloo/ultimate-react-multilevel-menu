import React, { useEffect, useState, createContext } from 'react'
import CollapseProps from './nav.props'
import classNames from 'classnames'
import './nav.less'

export const NavContext = createContext({
  isCollapse: false
});

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
     <NavContext.Provider value={{
          isCollapse: false
      }}>
        <ul className={classNames('nav')}>
          {props.children}
        </ul>
      </NavContext.Provider>
      
      <NavContext.Provider value={{
          isCollapse: true
      }}>
        <ul className={classNames('navbar-collapse', { show: !isCollapsed })}>
          {props.children}
        </ul>
      </NavContext.Provider>
    </>
  )
}

export default Nav
