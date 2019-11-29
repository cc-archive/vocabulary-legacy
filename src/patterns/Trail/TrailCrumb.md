For nomenclature, see 
[Hansel and Gretel](https://en.wikipedia.org/wiki/Hansel_and_Gretel).

For example usage, see [Trail](#/Patterns/Trail).

### Add-on set

A trail crumb can have an icon attached to it via the `icon` prop.

```jsx
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faAngleDoubleRight,
  faHome,
  faCubes,
  faCube
} from '@fortawesome/free-solid-svg-icons';
import { faReadme } from '@fortawesome/free-brands-svg-icons';

library.add(faAngleDoubleRight, faHome, faReadme, faCubes, faCube);

<Trail color="tomato" :icon="['fas', 'angle-double-right']">
  <TrailCrumb icon="home">
    CC Vocabulary
  </TrailCrumb>
  <TrailCrumb :icon="['fab', 'readme']">
    Styleguide
  </TrailCrumb>
  <TrailCrumb icon="cubes">
    Patterns
  </TrailCrumb>
  <TrailCrumb icon="cube">
    Trail
  </TrailCrumb>
</Trail>
```

However, if an icon doesn't cut it for you, you may place any other content
in the `addons` slot.

```jsx
import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.component('FontAwesomeIcon', FontAwesomeIcon);

library.add(faHandshake);

<Trail color="tomato">
  <TrailCrumb>
    <template #addons>
      <LicenseIconography :icon-list="['']"/>
    </template>
    Creative Commons
  </TrailCrumb>
  <TrailCrumb>
    <template #addons>
      <FontAwesomeIcon
        :icon="['fas', 'handshake']"
        fixed-width/>
    </template>
    Licenses
  </TrailCrumb>
  <TrailCrumb>
    <template #addons>
      <LicenseBadge
        license="by"
        size="small"
        is-centered/>
    </template>
    Attribution
  </TrailCrumb>
</Trail>
```
