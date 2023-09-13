import { ReactNode } from 'react'

interface NavProps extends Partial<Omit<HTMLDivElement, 'children'>> {
  children?: ReactNode
  collapsed?: boolean
}

export default NavProps
