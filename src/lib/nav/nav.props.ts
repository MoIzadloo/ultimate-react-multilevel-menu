import { ReactNode } from 'react'

interface NavProps extends Partial<Omit<HTMLDivElement, 'children'>> {
  children?: ReactNode
}

export default NavProps
