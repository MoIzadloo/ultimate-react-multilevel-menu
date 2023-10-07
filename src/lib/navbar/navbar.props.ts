import React from 'react'

interface NavProps extends React.HTMLAttributes<HTMLElement> {
  dir?: 'ltr' | 'rtl'
  'data-testid'?: string
}

export default NavProps
