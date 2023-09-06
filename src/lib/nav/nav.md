```tsx padded
import { Nav, Collapse, Item, Items, Logo } from '../'
import classnames from 'classnames'
;<Nav className={classnames('navbar-light', 'bg-white')}>
  <Logo href="/">Logo</Logo>
  <Collapse>
    <Item href={'#home'}>Home</Item>
    <Item href={'#home'}>Features</Item>
    <Items href={'#about'} title="About">
      <Item href={'#introduction'}>Introduction</Item>
      <Items href={'#about'} title="About">
        <Item href={'#introduction'}>Introduction</Item>
      </Items>
    </Items>
    <Item href={'#home'}>Pricing</Item>
    <Items href={'#about'} title="About">
      <Item href={'#introduction'}>Introduction</Item>
      <Item href={'#introduction'}>Introduction</Item>
      <Items href={'#about'} title="About">
        <Item href={'#introduction'}>Introduction</Item>
        <Item href={'#introduction'}>Introduction</Item>
        <Item href={'#introduction'}>Introduction</Item>
        <Items href={'#about'} title="About">
          <Item href={'#introduction'}>Introduction</Item>
          <Item href={'#introduction'}>Introduction</Item>
          <Item href={'#introduction'}>Introduction</Item>
          <Items href={'#about'} title="About">
            <Item href={'#introduction'}>Introduction</Item>
            <Item href={'#introduction'}>Introduction</Item>
            <Item href={'#introduction'}>Introduction</Item>
          </Items>
        </Items>
      </Items>
    </Items>
  </Collapse>
</Nav>
```
