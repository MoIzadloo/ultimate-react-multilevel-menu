import { ElementType, ReactNode } from 'react'

interface logoProps extends Partial<Omit<HTMLAnchorElement, 'children'>> {
  children?: ReactNode
  href?: string
  as?: ElementType
}

export default logoProps
