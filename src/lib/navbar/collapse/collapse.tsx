import React from 'react'
import CollapseProps from './collapse.props'
import classNames from 'classnames'
import './collapse.less'
import Nav from '../nav/nav'
import { CollapseContext } from '../../context'

/**
 * The Collapse component is the container of the Nav component and it's responsible for making the menu responsive and elegant on small screens
 * @returns Element
 */
function Collapse (props: CollapseProps): React.ReactElement {
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(true)
  return (
    <CollapseContext.Provider value={{
      isCollapsed,
      setIsCollapsed
    }}
    >
      <>
        <div onClick={() => { setIsCollapsed(!isCollapsed) }} className={classNames('navbar-toggler', { collapsed: !isCollapsed })}>
          <span className={classNames('navbar-toggler-line')} />
          <span className={classNames('navbar-toggler-line')} />
          <span className={classNames('navbar-toggler-line')} />
        </div>
        <Nav>
          {props.children}
        </Nav>
      </>
    </CollapseContext.Provider>
  )
}

export default Collapse
