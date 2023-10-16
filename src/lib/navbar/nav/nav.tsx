import React from 'react'
import CollapseProps from './nav.props'
import classNames from 'classnames'
import './nav.less'
import { CollapseContext, NavContext } from '../../context'

/**
 * The Nav component is a container of Item and Items components, in fact, the Collapse component uses the Nav component to wrap Item and Items components under the hood. in case you don't want the collapse toggle button you can use it directly instead.
 * @returns Element
 */
function Nav (props: CollapseProps): React.ReactElement {
  const [isPoped, setIsPoped] = React.useState<boolean>(true)
  return (
    <CollapseContext.Consumer>
      {(context) => {
        return (
          <>
            <NavContext.Provider value={{
              isCollapse: false,
              isPoped,
              setIsPoped
            }}
            >
              <ul className={classNames('nav')}>
                {props.children}
              </ul>
            </NavContext.Provider>

            <NavContext.Provider value={{
              isCollapse: true,
              isPoped,
              setIsPoped
            }}
            >
              <ul className={classNames('navbar-collapse', { show: context != null ? !context.isCollapsed : true })}>
                {props.children}
              </ul>
            </NavContext.Provider>
          </>
        )
      }}

    </CollapseContext.Consumer>
  )
}

export default Nav
