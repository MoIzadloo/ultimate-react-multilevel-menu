import React from 'react'
import { AsProp } from '../../helper'

interface ItemsProps
  extends AsProp,
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'title'> {
  title?: React.ReactElement | string
  'data-testid'?: string
}

export default ItemsProps
