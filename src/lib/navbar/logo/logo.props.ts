import React from 'react'
import { AsProp } from '../../helper'

interface LogoProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    AsProp {
  'data-testid'?: string
}

export default LogoProps
