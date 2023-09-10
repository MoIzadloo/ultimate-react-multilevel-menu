```tsx padded
import { Nav, Collapse, Item, Items, Logo } from '../../'
import classnames from 'classnames'
;<Nav className={classnames('navbar-light')}>
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
</Nav>
```

### Logo With Image

```tsx padded
import { Nav, Collapse, Items, Item, Logo } from '../../'
import classnames from 'classnames'
;<Nav className={classnames('navbar-light')}>
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
</Nav>
```
