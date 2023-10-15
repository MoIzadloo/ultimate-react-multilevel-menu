import { render } from '@testing-library/react'
import React from 'react'
import Item from './item'

const testid = 'item'

const children = 'Home'

describe('<Item>', () => {
    it('matches snapshot', () => {
        const body = renderItem({})
        expect(body).toMatchSnapshot()
    })
    it('renders correctly', () => {
        const { getByTestId } = renderItem({})
        const logoElement = getByTestId(testid);
        expect(logoElement.classList.contains('nav-item')).toBe(true)
        expect(logoElement.classList.contains('custom-class')).toBe(true)
        expect(logoElement.firstElementChild?.textContent).toBe('Home')
        expect(logoElement.firstElementChild?.classList.contains('item')).toBe(true)
        expect(logoElement.firstElementChild!.getAttribute('href')).toBe('/')
        expect(logoElement.firstElementChild!.getAttribute('hrefLang')).toBe('en')
    })
})

const defaultProps = {
    'data-testid': testid,
    className: 'custom-class',
    href: '/',
    hrefLang: 'en',
    children: children
}

const renderItem = ({...props}) =>{
    return render(
    <Item
        {...defaultProps}
        {...props}
    />)
}