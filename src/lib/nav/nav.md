```tsx padded
import { Nav, Collapse, Item, Items, Logo } from '../'
import classnames from 'classnames'
;<Nav className={classnames('navbar-light', 'bg-white')}>
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
</Nav>
```

### Color schemes

#### Dark

```tsx padded
import { Nav, Collapse, Item, Items, Logo } from '../'
import classnames from 'classnames'
;<Nav className={classnames('navbar-dark', 'bg-dark')}>
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
</Nav>
```

#### Light

```tsx padded
import { Nav, Collapse, Item, Items, Logo } from '../'
import classnames from 'classnames'
;<Nav className={classnames('navbar-light', 'bg-white')}>
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
</Nav>
```

#### Primary

```tsx padded
import { Nav, Collapse, Item, Items, Logo } from '../'
import classnames from 'classnames'
;<Nav className={classnames('navbar-dark', 'bg-primary')}>
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
</Nav>
```

#### Gray

```tsx padded
import { Nav, Collapse, Item, Items, Logo } from '../'
import classnames from 'classnames'
;<Nav className={classnames('navbar-dark', 'bg-gray')}>
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
</Nav>
```

### Props

#### Dir

##### RTL

```tsx padded
import { Nav, Collapse, Item, Items, Logo } from '../'
import classnames from 'classnames'
;<Nav className={classnames('navbar-ligth', 'bg-light')} dir={'rtl'}>
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

##### LTR

```tsx padded
import { Nav, Collapse, Item, Items, Logo } from '../'
import classnames from 'classnames'
;<Nav className={classnames('navbar-ligth', 'bg-light')} dir={'ltr'}>
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
