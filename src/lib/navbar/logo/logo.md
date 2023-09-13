```tsx padded
import { Navbar, Collapse, Item, Items, Logo } from '../../'
import classnames from 'classnames'
;<Navbar className={classnames('navbar-light')}>
  <Logo href={'/'}>Logo</Logo>
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
</Navbar>
```

### Logo With Image

```tsx padded
import { Navbar, Collapse, Items, Item, Logo } from '../../'
import classnames from 'classnames'
;<Navbar className={classnames('navbar-light')}>
  <Logo href={'/'}>
    <img src={'logo.png'} />
  </Logo>
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
</Navbar>
```
