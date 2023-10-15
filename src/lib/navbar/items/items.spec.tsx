import { render } from '@testing-library/react'
import React from 'react'
import { Item, Items, Collapse, Logo, Navbar } from '../'
import classNames from 'classnames'

const testid = 'navbar'

const children = <>
    <Logo href="/">Logo</Logo>
    <Collapse>
        <Items as='a' href='/books' hrefLang='en' title="Books" className='custom-class'>
            <Item href={'/story'} hrefLang='en'>Story books</Item>
        </Items>
    </Collapse>
</>

describe('<Items>', () => {
    it('matches snapshot', () => {
        const body = renderItems({})
        expect(body).toMatchSnapshot()
    })
    it('renders correctly', () => {
        const { getByTestId } = renderItems({})
        const navbarElement = getByTestId(testid)
        const navElement = navbarElement.getElementsByClassName('nav')[0]
        const collapseElement = navbarElement.getElementsByClassName('navbar-collapse')[0]
        let itemsElement = navElement.firstElementChild
        expect(itemsElement?.classList.contains('nav-item')).toBe(true)
        expect(itemsElement?.classList.contains('is-navbar')).toBe(true)
        expect(itemsElement?.classList.contains('custom-class')).toBe(true)
        expect(itemsElement?.firstElementChild?.textContent).toBe('Books')
        expect(itemsElement?.firstElementChild!.getAttribute('href')).toBe('/books')
        expect(itemsElement?.firstElementChild!.getAttribute('hrefLang')).toBe('en')
        expect(itemsElement?.firstElementChild?.classList.contains('item')).toBe(true)
        expect(itemsElement?.firstElementChild?.classList.contains('dropdown')).toBe(true)
        let dropDownElement = itemsElement?.getElementsByClassName('nav-items')[0].firstElementChild
        expect(dropDownElement?.firstElementChild!.getAttribute('href')).toBe('/story')
        expect(dropDownElement?.firstElementChild?.textContent).toBe('Story books')
        expect(dropDownElement?.firstElementChild!.getAttribute('hrefLang')).toBe('en')
        itemsElement = collapseElement.firstElementChild
        expect(itemsElement?.classList.contains('nav-item')).toBe(true)
        expect(itemsElement?.classList.contains('is-navbar')).toBe(false)
        expect(itemsElement?.classList.contains('custom-class')).toBe(true)
        expect(itemsElement?.firstElementChild?.textContent).toBe('Books')
        expect(itemsElement?.firstElementChild!.getAttribute('href')).toBe('/books')
        expect(itemsElement?.firstElementChild!.getAttribute('hrefLang')).toBe('en')
        expect(itemsElement?.firstElementChild?.classList.contains('item')).toBe(true)
        expect(itemsElement?.firstElementChild?.classList.contains('dropdown')).toBe(true)
        dropDownElement = itemsElement?.getElementsByClassName('nav-items')[0].firstElementChild
        expect(dropDownElement?.firstElementChild!.getAttribute('href')).toBe('/story')
        expect(dropDownElement?.firstElementChild?.textContent).toBe('Story books')
        expect(dropDownElement?.firstElementChild!.getAttribute('hrefLang')).toBe('en')
    })
})

const defaultProps = {
    children,
    'data-testid': testid,
    className: classNames('navbar-light', 'bg-white')
}

const renderItems = ({...props}) =>{
    return render(
        <Navbar 
        {...defaultProps}
        {...props}
    />)
}