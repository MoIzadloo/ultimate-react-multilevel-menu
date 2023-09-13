import { ReactNode, ElementType } from 'react'

interface ItemsProps extends Partial<Omit<HTMLAnchorElement, 'children'>> {
  children?: ReactNode
  title?: string
  href?: string
  as?: ElementType
}

export default ItemsProps
