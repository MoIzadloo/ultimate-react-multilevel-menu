import React from 'react'

export interface AsProp<As extends React.ElementType = React.ElementType> {
  as?: As;
}
