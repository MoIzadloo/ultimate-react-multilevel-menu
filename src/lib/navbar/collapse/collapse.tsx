import React from 'react'
import CollapseProps from './collapse.props'
import classNames from 'classnames'
import './collapse.less'
import Nav from '../nav/nav'
import { CollapseContext } from '../../context'

/**
 * A generic Collapse
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
