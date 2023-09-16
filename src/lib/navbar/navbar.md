```tsx padded
import { Navbar, Collapse, Item, Items, Logo } from '../'
import classnames from 'classnames'
;<Navbar className={classnames('navbar-light', 'bg-white')}>
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
</Navbar>
```

### Color schemes

#### Dark

```tsx padded
import { Navbar, Collapse, Item, Items, Logo } from '../'
import classnames from 'classnames'
;<Navbar className={classnames('navbar-dark', 'bg-dark')}>
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
</Navbar>
```

#### Light

```tsx padded
import { Navbar, Collapse, Item, Items, Logo } from '../'
import classnames from 'classnames'
;<Navbar className={classnames('navbar-light', 'bg-white')}>
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
</Navbar>
```

#### Primary

```tsx padded
import { Navbar, Collapse, Item, Items, Logo } from '../'
import classnames from 'classnames'
;<Navbar className={classnames('navbar-dark', 'bg-primary')}>
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
</Navbar>
```

#### Gray

```tsx padded
import { Navbar, Collapse, Item, Items, Logo } from '../'
import classnames from 'classnames'
;<Navbar className={classnames('navbar-dark', 'bg-gray')}>
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
</Navbar>
```

### Props

#### Dir

##### RTL

```tsx padded
import { Navbar, Collapse, Item, Items, Logo } from '../'
import classnames from 'classnames'
;<Navbar className={classnames('navbar-ligth', 'bg-light')} dir={'rtl'}>
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

##### LTR

```tsx padded
import { Navbar, Collapse, Item, Items, Logo } from '../'
import classnames from 'classnames'
;<Navbar className={classnames('navbar-ligth', 'bg-light')} dir={'ltr'}>
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

### Placement

### Default

```tsx static
import { Navbar, Collapse, Item, Items, Logo } from '../'
import classnames from 'classnames'

;<Navbar className={classnames('navbar-light', 'bg-white')}></Navbar>
```

### Fixed top

```tsx static
import { Navbar, Collapse, Item, Items, Logo } from '../'
import classnames from 'classnames'

;<Navbar
  className={classnames('navbar-light', 'bg-white', 'fixed-top')}
></Navbar>
```

### Fixed bottom

```tsx static
import { Navbar, Collapse, Item, Items, Logo } from '../'
import classnames from 'classnames'

;<Navbar
  className={classnames('navbar-light', 'bg-white', 'fixed-bottom')}
></Navbar>
```

### Sticky Top

```tsx static
import { Navbar, Collapse, Item, Items, Logo } from '../'
import classnames from 'classnames'

;<Navbar
  className={classnames('navbar-light', 'bg-white', 'sticky-top')}
></Navbar>
```
