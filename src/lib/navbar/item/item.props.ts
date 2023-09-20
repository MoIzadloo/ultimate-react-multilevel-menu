import React from 'react'
import { AsProp } from '../../helper'

interface ItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
  AsProp {}

export default ItemProps
