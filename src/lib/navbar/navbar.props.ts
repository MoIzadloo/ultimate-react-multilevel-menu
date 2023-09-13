import { ReactNode } from 'react'

interface NavProps extends Partial<Omit<HTMLDivElement, 'children'>> {
  children?: ReactNode
  dir?: 'ltr' | 'rtl'
}

export default NavProps
