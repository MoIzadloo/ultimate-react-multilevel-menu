import { render } from '@testing-library/react'
import React from 'react'
import { Navbar, Collapse, Item, Items, Logo } from '../'
import classNames from 'classnames'

const testid = 'navbar'

const children = (
    <>
        <Logo href="/">Logo</Logo>
        <Collapse>
            <Item href={'#home'}>Home</Item>
            <Items href={'#articles'} title="Articles">
            <Items href={'#power-plant'} title="Power plant">
                <Item href={'#turbine'}>Turbine</Item>
            </Items>
            </Items>
            <Items href={'#about'} title="About">
            <Item href={'#introduction'}>Introduction</Item>
            </Items>
            <Item href={'#pricing'}>Pricing</Item>
        </Collapse>
    </>
)

describe('<Navbar>', () => {
    it('matches snapshot', () => {
        const body = renderNavbar({})
        expect(body).toMatchSnapshot()
    })
    it('renders correctly', () => {
        const { getByTestId } = renderNavbar({})
        const navbarElement = getByTestId(testid)
        expect(navbarElement.classList.contains('navbar')).toBe(true)
        expect(navbarElement.classList.contains('navbar-light')).toBe(true)
        expect(navbarElement.classList.contains('bg-white')).toBe(true)
        expect(navbarElement.firstElementChild!.textContent).toBe('Logo')
    })
    it('renders props:dir:rtl', () => {
        const { getByTestId } = renderNavbar({dir: "rtl"})
            const navbarElement = getByTestId(testid)
            expect(navbarElement.classList.contains('navbar')).toBe(true)
            expect(navbarElement.classList.contains('navbar-light')).toBe(true)
            expect(navbarElement.classList.contains('bg-white')).toBe(true)
            expect(navbarElement.firstElementChild!.textContent).toBe('Logo')
    })
    it('should render children', () => {
        const { getByTestId } = renderNavbar({})
        expect(getByTestId('navbar').children.length).toBeGreaterThan(2);
    })
})

const defaultProps = {
    children,
    'data-testid': testid,
    className: classNames('navbar-light', 'bg-white')
}

const renderNavbar = ({...props}) =>{
    return render(
    <Navbar 
        {...defaultProps}
        {...props}
    />)
}