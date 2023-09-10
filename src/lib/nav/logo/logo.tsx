import React from 'react'
import logoProps from './logo.props'
import classNames from 'classnames'
import './logo.less'

/**
 * A generic Logo
 * @returns Element
 */
function Logo (props: logoProps): JSX.Element {
  const { as: Cmp = 'a', ...rest } = props
  return (
    <div className={classNames('logo-container', props.className)}>
      <Cmp {...rest}>
        {props.children}
      </Cmp>
    </div>
  )
}

export default Logo
