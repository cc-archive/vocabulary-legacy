If a navigation bar of links looks like this, _"I'm going on an adventure!"_

```jsx { "props": { "className": "dark-background" } }
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faHome,
  faBook
} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faBook);

<Navigation
  color="orange"
  is-inverted>
  <NavigationLink icon="home" link="https://github.com/creativecommons/cc-vocabulary">
    Home page
  </NavigationLink>
  <NavigationLink icon="book" link="/">
    Style guide
  </NavigationLink>
</Navigation>
```

The bar is mobile responsive as well. Resize the browser to see it change to a 
mobile version.

### Color set

A navigation bar is black colored by default.

```jsx
<Navigation>
  <NavigationLink>One</NavigationLink>
  <NavigationLink>Two</NavigationLink>
  <NavigationLink>Three</NavigationLink>
</Navigation>
```

Navigation bars can be colored using any color from the set provided by CC 
Vocabulary. Nothing to discourage exploration like the color black.

```jsx
<Navigation color="blue">
  <NavigationLink>One</NavigationLink>
  <NavigationLink>Two</NavigationLink>
  <NavigationLink>Three</NavigationLink>
</Navigation>
<br/>
<Navigation color="green">
  <NavigationLink>One</NavigationLink>
  <NavigationLink>Two</NavigationLink>
  <NavigationLink>Three</NavigationLink>
</Navigation>
<br/>
<Navigation color="magenta">
  <NavigationLink>One</NavigationLink>
  <NavigationLink>Two</NavigationLink>
  <NavigationLink>Three</NavigationLink>
</Navigation>
<br/>
<Navigation color="olive">
  <NavigationLink>One</NavigationLink>
  <NavigationLink>Two</NavigationLink>
  <NavigationLink>Three</NavigationLink>
</Navigation>
<br/>
<Navigation color="orange">
  <NavigationLink>One</NavigationLink>
  <NavigationLink>Two</NavigationLink>
  <NavigationLink>Three</NavigationLink>
</Navigation>
<br/>
<Navigation color="purple">
  <NavigationLink>One</NavigationLink>
  <NavigationLink>Two</NavigationLink>
  <NavigationLink>Three</NavigationLink>
</Navigation>
<br/>
<Navigation color="red">
  <NavigationLink>One</NavigationLink>
  <NavigationLink>Two</NavigationLink>
  <NavigationLink>Three</NavigationLink>
</Navigation>
<br/>
<Navigation color="sand">
  <NavigationLink>One</NavigationLink>
  <NavigationLink>Two</NavigationLink>
  <NavigationLink>Three</NavigationLink>
</Navigation>
<br/>
<Navigation color="yellow">
  <NavigationLink>One</NavigationLink>
  <NavigationLink>Two</NavigationLink>
  <NavigationLink>Three</NavigationLink>
</Navigation>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Navigation color="blue" shade="light">
  <NavigationLink>One</NavigationLink>
  <NavigationLink>Two</NavigationLink>
  <NavigationLink>Three</NavigationLink>
</Navigation>
<br/>
<Navigation color="blue">
  <NavigationLink>One</NavigationLink>
  <NavigationLink>Two</NavigationLink>
  <NavigationLink>Three</NavigationLink>
</Navigation>
<br/>
<Navigation color="blue" shade="dark">
  <NavigationLink>One</NavigationLink>
  <NavigationLink>Two</NavigationLink>
  <NavigationLink>Three</NavigationLink>
</Navigation>
<br/>
<Navigation color="blue" shade="darker">
  <NavigationLink>One</NavigationLink>
  <NavigationLink>Two</NavigationLink>
  <NavigationLink>Three</NavigationLink>
</Navigation>
```

On dark backgrounds, the component can be inverted.

```jsx { "props": { "className": "dark-background" } }
<Navigation is-inverted>
  <NavigationLink>One</NavigationLink>
  <NavigationLink>Two</NavigationLink>
  <NavigationLink>Three</NavigationLink>
</Navigation>
<br/>
<Navigation color="magenta" is-inverted>
  <NavigationLink>One</NavigationLink>
  <NavigationLink>Two</NavigationLink>
  <NavigationLink>Three</NavigationLink>
</Navigation>
```

### Add-on set

Refer to [NavigationLink](#/Patterns/NavigationLink).
