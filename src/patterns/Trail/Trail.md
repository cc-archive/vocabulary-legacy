A trail of crumbs looks like this.

```jsx
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faHome,
  faBook,
  faCubes,
  faCube
} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faBook, faCubes, faCube);

<Trail color="orange">
  <TrailCrumb icon="home" link="https://github.com/creativecommons/cc-vocabulary">
    CC Vocabulary
  </TrailCrumb>
  <TrailCrumb icon="book" link="/">
    Styleguide
  </TrailCrumb>
  <TrailCrumb icon="cubes" link="/#/Patterns">
    Patterns
  </TrailCrumb>
  <TrailCrumb icon="cube" link="/#/Patterns/Trail">
    Trail
  </TrailCrumb>
</Trail>
```

## Color set

A trail is black colored by default.

```jsx
<Trail>
  <TrailCrumb>Top</TrailCrumb>
  <TrailCrumb>Middle</TrailCrumb>
  <TrailCrumb>Bottom</TrailCrumb>
</Trail>
```

Trails can be colored using any color from the set provided by CC Vocabulary. I
wouldn't follow a black trail.

```jsx
<Trail color="blue">
  <TrailCrumb>Top</TrailCrumb>
  <TrailCrumb>Middle</TrailCrumb>
  <TrailCrumb>Bottom</TrailCrumb>
</Trail>
<br/>
<Trail color="green">
  <TrailCrumb>Top</TrailCrumb>
  <TrailCrumb>Middle</TrailCrumb>
  <TrailCrumb>Bottom</TrailCrumb>
</Trail>
<br/>
<Trail color="magenta">
  <TrailCrumb>Top</TrailCrumb>
  <TrailCrumb>Middle</TrailCrumb>
  <TrailCrumb>Bottom</TrailCrumb>
</Trail>
<br/>
<Trail color="olive">
  <TrailCrumb>Top</TrailCrumb>
  <TrailCrumb>Middle</TrailCrumb>
  <TrailCrumb>Bottom</TrailCrumb>
</Trail>
<br/>
<Trail color="orange">
  <TrailCrumb>Top</TrailCrumb>
  <TrailCrumb>Middle</TrailCrumb>
  <TrailCrumb>Bottom</TrailCrumb>
</Trail>
<br/>
<Trail color="purple">
  <TrailCrumb>Top</TrailCrumb>
  <TrailCrumb>Middle</TrailCrumb>
  <TrailCrumb>Bottom</TrailCrumb>
</Trail>
<br/>
<Trail color="red">
  <TrailCrumb>Top</TrailCrumb>
  <TrailCrumb>Middle</TrailCrumb>
  <TrailCrumb>Bottom</TrailCrumb>
</Trail>
<br/>
<Trail color="sand">
  <TrailCrumb>Top</TrailCrumb>
  <TrailCrumb>Middle</TrailCrumb>
  <TrailCrumb>Bottom</TrailCrumb>
</Trail>
<br/>
<Trail color="yellow">
  <TrailCrumb>Top</TrailCrumb>
  <TrailCrumb>Middle</TrailCrumb>
  <TrailCrumb>Bottom</TrailCrumb>
</Trail>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Trail color="blue" shade="light">
  <TrailCrumb>Top</TrailCrumb>
  <TrailCrumb>Middle</TrailCrumb>
  <TrailCrumb>Bottom</TrailCrumb>
</Trail>
<br/>
<Trail color="blue">
  <TrailCrumb>Top</TrailCrumb>
  <TrailCrumb>Middle</TrailCrumb>
  <TrailCrumb>Bottom</TrailCrumb>
</Trail>
<br/>
<Trail color="blue" shade="dark">
  <TrailCrumb>Top</TrailCrumb>
  <TrailCrumb>Middle</TrailCrumb>
  <TrailCrumb>Bottom</TrailCrumb>
</Trail>
<br/>
<Trail color="blue" shade="darker">
  <TrailCrumb>Top</TrailCrumb>
  <TrailCrumb>Middle</TrailCrumb>
  <TrailCrumb>Bottom</TrailCrumb>
</Trail>
```

On a dark or non-white background, you may use the inverted version.

```jsx { "props": { "className": "dark-background" } }
<Trail is-inverted>
  <TrailCrumb>Top</TrailCrumb>
  <TrailCrumb>Middle</TrailCrumb>
  <TrailCrumb>Bottom</TrailCrumb>
</Trail>
<br/>
<Trail color="magenta" is-inverted>
  <TrailCrumb>Top</TrailCrumb>
  <TrailCrumb>Middle</TrailCrumb>
  <TrailCrumb>Bottom</TrailCrumb>
</Trail>
```

### Add-on set

Refer to [TrailCrumb](#/Patterns/TrailCrumb).
