import React from 'react'

interface ICollapseContext {
  isCollapsed: boolean
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

export const CollapseContext = React.createContext<ICollapseContext
| undefined>(undefined)

interface INavContext {
  isCollapse: boolean
  isPoped: boolean
  setIsPoped: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavContext = React.createContext<INavContext
| undefined>(undefined)
