import { ReactNode } from 'react'

interface ItemsProps extends Partial<Omit<HTMLAnchorElement, 'children'>> {
  children?: ReactNode
  title?: string
  href?: string
  isCollapse?: boolean
}

export default ItemsProps
