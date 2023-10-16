import React from 'react'
import { AsProp } from '../../helper'

interface ItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    AsProp {
  'data-testid'?: string
}

export default ItemProps
