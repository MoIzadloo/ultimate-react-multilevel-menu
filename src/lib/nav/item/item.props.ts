import { ReactNode } from 'react'

interface ItemProps extends Partial<Omit<HTMLAnchorElement, 'children'>> {
  children?: ReactNode
  href?: string
}

export default ItemProps
