import { ReactNode } from 'react'

interface logoProps extends Partial<Omit<HTMLAnchorElement, 'children'>> {
  children?: ReactNode
  href?: string
}

export default logoProps
