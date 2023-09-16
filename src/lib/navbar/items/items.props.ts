import { ReactNode, ElementType } from 'react'

interface ItemsProps
  extends Partial<Omit<Omit<HTMLAnchorElement, 'children'>, 'title'>> {
  children?: ReactNode
  title?: ElementType | string
  href?: string
  as?: ElementType
}

export default ItemsProps
