import { ElementType, ReactNode } from 'react'

interface LogoProps extends Partial<Omit<HTMLDivElement, 'children'>> {
  children?: ReactNode
  href?: string
  as?: ElementType
}

export default LogoProps
