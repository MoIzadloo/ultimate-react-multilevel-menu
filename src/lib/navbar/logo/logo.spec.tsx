import { render } from '@testing-library/react'
import React from 'react'
import Logo from './logo'

const testid = 'logo'

const children = 'Logo'

describe('<Logo>', () => {
    it('matches snapshot', () => {
        const body = renderLogo({})
        expect(body).toMatchSnapshot()
    })
    it('renders correctly', () => {
        const { getByTestId } = renderLogo({})
        const logoElement = getByTestId(testid);
        expect(logoElement.classList.contains('logo-container')).toBe(true)
        expect(logoElement.classList.contains('custom-class')).toBe(true)
        expect(logoElement.firstElementChild!.getAttribute('href')).toBe('/')
        expect(logoElement.firstElementChild!.getAttribute('hrefLang')).toBe('en')
    })
    it('logo with image', () => {
        const { getByTestId } = renderLogo({
            children: (
                <img src={'logo.png'} />
            )
        })
        const logoElement = getByTestId(testid);
        expect(logoElement.classList.contains('logo-container')).toBe(true)
        expect(logoElement.classList.contains('custom-class')).toBe(true)
        expect(logoElement.firstElementChild!.getAttribute('href')).toBe('/')
        expect(logoElement.firstElementChild!.getAttribute('hrefLang')).toBe('en')
        expect(logoElement.firstElementChild!.firstElementChild!.getAttribute('src')).toBe('logo.png')
    })
})

const defaultProps = {
    'data-testid': testid,
    className: 'custom-class',
    href: '/',
    hrefLang: 'en',
    children: children
}

const renderLogo = ({...props}) =>{
    return render(
    <Logo
        {...defaultProps}
        {...props}
    />)
}