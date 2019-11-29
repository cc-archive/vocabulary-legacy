For example usage, see [Navigation](#/Patterns/Navigation).

### Add-on set

A navigation link can have an icon attached to it via the `icon` prop.

```jsx
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faReadme } from '@fortawesome/free-brands-svg-icons';

library.add(faHome, faReadme);

<Navigation color="tomato">
  <NavigationLink icon="home">
    Home page
  </NavigationLink>
  <NavigationLink :icon="['fab', 'readme']">
    Style guide
  </NavigationLink>
</Navigation>
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

<Navigation color="tomato">
  <NavigationLink>
    <template #addons>
      <LicenseIconography :icon-list="['']"/>
    </template>
    Creative Commons
  </NavigationLink>
  <NavigationLink>
    <template #addons>
      <FontAwesomeIcon :icon="['fas', 'handshake']"/>
    </template>
    Licenses
  </NavigationLink>
</Navigation>
```
