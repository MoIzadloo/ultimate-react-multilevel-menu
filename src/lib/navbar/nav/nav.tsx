import React from 'react'
import CollapseProps from './nav.props'
import classNames from 'classnames'
import './nav.less'
import { CollapseContext } from '../collapse/collapse'

interface INavContext {
  isCollapse: boolean
  isPoped: boolean
  setIsPoped: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavContext = React.createContext<INavContext
| undefined>(undefined)

/**
 * A generic Nav
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
