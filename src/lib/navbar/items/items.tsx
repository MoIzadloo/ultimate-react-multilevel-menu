import React, { useState, useEffect } from 'react'
import ItemsProps from './items.props'
import classNames from 'classnames'
import './items.less'

/**
 * A generic Items
 * @returns Element
 */
function Items (props: ItemsProps): JSX.Element {
  const { as: Cmp = 'a', ...rest } = props
  const [isPopped, setPop] = useState(false)

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight
  ])

  useEffect(() => {
    const handleWindowResize = (): void => {
      setWindowSize([window.innerWidth, window.innerHeight])
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  const collapsed = windowSize[0] >= 575.98

  return (
    <li className={classNames('nav-item', { 'is-navbar': collapsed }, props.className)}>
      <Cmp
        onClick={(e: any) => {
          if (!collapsed) {
            console.log(collapsed)
            if (!isPopped) {
              e.preventDefault()
            }
            setPop(!isPopped)
          }
        }} {...rest} className={classNames('item', 'dropdown')}
      >{props.title}
      </Cmp>
      <ul className={classNames('nav-items', { collapsed: !collapsed && isPopped })}>
        {props.children}
      </ul>
    </li>
  )
}

export default Items
