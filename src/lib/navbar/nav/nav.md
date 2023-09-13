```tsx padded
import { Navbar, Nav, Item, Items, Logo } from '../'
import classnames from 'classnames'

;<Navbar className={classnames('navbar-light', 'bg-white')}>
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
</Navbar>
```
