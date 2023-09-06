import { ReactNode } from 'react'

interface CollapseProps extends Partial<Omit<HTMLDivElement, 'children'>> {
  children?: ReactNode
}

export default CollapseProps
