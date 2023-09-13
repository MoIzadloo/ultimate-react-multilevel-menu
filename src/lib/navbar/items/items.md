```tsx padded
import { Navbar, Collapse, Item, Items } from '../../'
import classnames from 'classnames'
;<Navbar className={classnames('navbar-light')}>
  <Collapse>
    <Items href={'#about'} title="About">
      <Item href={'#introduction'}>Introduction</Item>
      <Items href={'#about'} title="About">
        <Item href={'#introduction'}>Introduction</Item>
      </Items>
    </Items>
  </Collapse>
</Navbar>
```
