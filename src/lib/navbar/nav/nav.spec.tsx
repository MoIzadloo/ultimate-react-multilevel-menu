import { render } from '@testing-library/react'
import React from 'react'
import { Navbar, Nav, Item, Items, Logo } from '../'
import classnames from 'classnames'

const testid = 'navbar'

const children = (
    <>
        <Logo href="/">Logo</Logo>
        <Nav>
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
        </Nav>
    </>
)

describe('<Nav>', () => {
    it('matches snapshot', () => {
        const body = renderNavbar({})
        expect(body).toMatchSnapshot()
    })
    it('renders correctly', () => {
        const { getByTestId } = renderNavbar({})
        const navElemnt = getByTestId(testid).getElementsByClassName("nav")[0]
        const collapseElement = getByTestId(testid).getElementsByClassName("navbar-collapse")[0]
        expect(navElemnt.classList.contains('nav')).toBe(true)
        expect(navElemnt.children.length).toBe(4)
        expect(collapseElement.classList.contains('show')).toBe(true)
        expect(collapseElement.children.length).toBe(4)
    })
    it('should render children', () => {
        const { getByTestId } = renderNavbar({})
        const navElemnt = getByTestId(testid).getElementsByClassName("nav")[0]
        expect(navElemnt.children.length).toBeGreaterThan(0)
    })
})

const defaultProps = {
    children,
    'data-testid': testid,
    className: classnames('navbar-light', 'bg-white')
}

const renderNavbar = ({...props}) =>{
    return render(
    <Navbar 
        {...defaultProps}
        {...props}
    />)
}