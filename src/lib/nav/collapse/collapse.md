```tsx padded
import { Nav, Collapse, Item, Items } from '../../'
import classnames from 'classnames'
;<Nav className={classnames('navbar-light')}>
  <Collapse>
    <Items href={'#about'} title="About">
      <Item href={'#introduction'}>Introduction</Item>
    </Items>
  </Collapse>
</Nav>
```
