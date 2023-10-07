import { render } from '@testing-library/react'
import React from 'react'
import { Navbar, Collapse, Item, Items, Logo } from '../'
import classnames from 'classnames'

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
        const body = renderNavar({})
        expect(body).toMatchSnapshot()
    })
    it('renders correctly', () => {
        const { getByTestId } = renderNavar({})
        const navbarElem = getByTestId(testid);
        expect(navbarElem.classList.contains('navbar')).toBe(true)
        expect(navbarElem.classList.contains('navbar-light')).toBe(true)
        expect(navbarElem.classList.contains('bg-white')).toBe(true)
        expect(navbarElem.firstElementChild!.textContent).toBe('Logo')
    })
    it('renders props:dir:rtl', () => {
        const { getByTestId } = renderNavar({dir: "rtl"})
            const navbarElem = getByTestId(testid);
            expect(navbarElem.classList.contains('navbar')).toBe(true)
            expect(navbarElem.classList.contains('navbar-light')).toBe(true)
            expect(navbarElem.classList.contains('bg-white')).toBe(true)
            expect(navbarElem.firstElementChild!.textContent).toBe('Logo')
    })
});

const defaultProps = {
    children,
    'data-testid': testid,
    className: classnames('navbar-light', 'bg-white')
}

const renderNavar = ({...props}) =>{
    return render(
    <Navbar 
        {...defaultProps}
        {...props}
    />)
}