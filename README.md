<img src="./styleguide/assets/logo.png" width="90" align="right" />

# The Ultimate React Multilevel Menu

URMM is a responsive menu react component. It's designed to be customizable and user-friendly.

- **User-friendly** simple and elegant
- **Customizable** to be suited to your needs
- **RTL-Support** to support different languages
- **Multi-level** to go as deep as you want

# Pros

1. URMM is fully customizable thanks to different props
2. URMM supports multi-level menus
3. URMM is easy to implement

## Demo

Documentation is [here](https://moizadloo.github.io/ultimate-react-multilevel-menu/)

## Install

```sh
npm install --save ultimate-react-multilevel-menu
```

or

```sh
yarn add ultimate-react-multilevel-menu
```

## Stylesheets

Make sure to include shipped CSS in your application to apply the correct styling to all components

```tsx
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'ultimate-react-multilevel-menu/dist/esm/index.css'
```

## Minimum Working Set Up

```tsx
import {
  Navbar,
  Collapse,
  Item,
  Items,
  Logo
} from 'ultimate-react-multilevel-menu'

;<Navbar className={'navbar-light bg-white'}>
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

## Componnents

### Navbar

The Navbar component is the container of all other components and you can change the color scheme by using the predefined CSS classes or your custom CSS classes

#### Props

| Name      | Type           | Default | Description           |
| --------- | -------------- | ------- | --------------------- |
| dir       | "rtl" \| "ltr" | "ltr"   | Menu direction        |
| className | "string"       | ""      | CSS class for nav tag |

### Collapse

The Collapse component is the container of the Nav component and it's responsible for making the menu responsive and elegant on small screens

#### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |

### Nav

The Nav component is a container of Item and Items components, in fact, the Collapse component uses the Nav component to wrap Item and Items components under the hood.
in case you don't want the collapse toggle button you can use it directly instead.

#### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |

### Logo

The Logo component is the container of your logo which can be an image or simple text

#### Props

| Name      | Type              | Default | Description                       |
| --------- | ----------------- | ------- | --------------------------------- |
| href      | "string"          | ""      | Logo url link                     |
| as        | React.ElementType | a       | The component that link render as |
| className | "string"          | ""      | CSS class for container div tag   |

### Item

The Item component is a single link

#### Props

| Name      | Type              | Default | Description                       |
| --------- | ----------------- | ------- | --------------------------------- |
| href      | "string"          | ""      | Item url link                     |
| as        | React.ElementType | a       | The component that link render as |
| className | "string"          | ""      | CSS class for container li tag    |

### Items

The Items component is a link and a container for other Items or Item components

#### Props

| Name      | Type              | Default | Description                       |
| --------- | ----------------- | ------- | --------------------------------- |
| href      | "string"          | ""      | Url link for it self              |
| as        | React.ElementType | a       | The component that link render as |
| className | "string"          | ""      | CSS class for container ul tag    |

### Contact Me

Email: `moizadloo@gmail.com`
