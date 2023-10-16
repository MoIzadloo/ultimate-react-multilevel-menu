import { render, fireEvent } from '@testing-library/react'
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

describe('<Collapse>', () => {
    it('matches snapshot', () => {
        const body = renderNavbar({}) 
        expect(body).toMatchSnapshot()
    })
    it('renders correctly', () => {
        const { getByTestId } = renderNavbar({})
        const navElemnt = getByTestId(testid).getElementsByClassName("nav")[0]
        const collapseElement = getByTestId(testid).getElementsByClassName("navbar-collapse")[0]
        const togglerElement = getByTestId(testid).getElementsByClassName("navbar-toggler")[0]
        expect(togglerElement.firstElementChild?.classList.contains('navbar-toggler-line')).toBe(true)
        expect(navElemnt.classList.contains('nav')).toBe(true)
        expect(navElemnt.children.length).toBe(4)
        expect(collapseElement.classList.contains('show')).toBe(false)
        expect(collapseElement.children.length).toBe(4)
        fireEvent.click(togglerElement)
        expect(togglerElement.classList.contains('collapsed')).toBe(true)
        const firstItem = collapseElement.getElementsByClassName("item")[0]
        fireEvent.click(firstItem)
        expect(togglerElement.classList.contains('collapsed')).toBe(false)
        fireEvent.click(togglerElement)
        expect(togglerElement.classList.contains('collapsed')).toBe(true)
        const firstItems = collapseElement.getElementsByClassName("dropdown")[0]
        fireEvent.click(firstItems)
        expect(togglerElement.classList.contains('collapsed')).toBe(true)
        fireEvent.click(firstItems)
        expect(togglerElement.classList.contains('collapsed')).toBe(false)
    })
    it('test toggler button', () =>{
        const { getByTestId } = renderNavbar({})
        const togglerElement = getByTestId(testid).getElementsByClassName("navbar-toggler")[0]
        fireEvent.click(togglerElement)
        expect(togglerElement.classList.contains('collapsed')).toBe(true)
        fireEvent.click(togglerElement)
        expect(togglerElement.classList.contains('collapsed')).toBe(false)
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
    className: classNames('navbar-light', 'bg-white')
}

const renderNavbar = ({...props}) =>{
    return render(
    <Navbar 
        {...defaultProps}
        {...props}
    />)
}