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
        const logoElem = getByTestId(testid);
        expect(logoElem.classList.contains('logo-container')).toBe(true)
        expect(logoElem.classList.contains('custom-class')).toBe(true)
        expect(logoElem.firstElementChild!.getAttribute('href')).toBe('/')
        expect(logoElem.firstElementChild!.getAttribute('hrefLang')).toBe('en')
    })
    it('logo with image', () => {
        const { getByTestId } = renderLogo({
            children: (
                <img src={'logo.png'} />
            )
        })
        const logoElem = getByTestId(testid);
        expect(logoElem.classList.contains('logo-container')).toBe(true)
        expect(logoElem.classList.contains('custom-class')).toBe(true)
        expect(logoElem.firstElementChild!.getAttribute('href')).toBe('/')
        expect(logoElem.firstElementChild!.getAttribute('hrefLang')).toBe('en')
        expect(logoElem.firstElementChild!.firstElementChild!.getAttribute('src')).toBe('logo.png')
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