import { ElementType, ReactNode } from 'react'

interface ItemProps extends Partial<Omit<HTMLAnchorElement, 'children'>> {
  children?: ReactNode
  href?: string
  as?: ElementType
}

export default ItemProps
