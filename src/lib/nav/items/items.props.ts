import { ReactNode, ElementType } from 'react'

interface ItemsProps extends Partial<Omit<HTMLAnchorElement, 'children'>> {
  children?: ReactNode
  title?: string
  href?: string
  isCollapse?: boolean
  as?: ElementType
}

export default ItemsProps
