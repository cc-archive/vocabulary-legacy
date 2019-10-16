The footer has a standard layout and appearance. It sits flush with the 
[Header](#/Patterns/Header) component, thanks to the use of 
[Container](#/Layouts/Container).

```jsx { "props": { "className": "i18n-enabled contain-content" } }
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faBook
} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faBook);

<Header 
  appName="Vocabulary" 
  color="blue">
  <Navigation
    is-inverted>
    <NavigationLink icon="home">
      Home page
    </NavigationLink>
    <NavigationLink icon="book">
      Documentation
    </NavigationLink>
  </Navigation>
</Header>
<Footer/>
```

### Add-on set

In an ideal world, you'd just use the `Footer` component with no customisation.
In this world, we have props and slots.

In the first panel, you can customise the logo using the slot `logo`. If your
site has its own branding, you might want to have the entity logo there. 

The links below can be customised via the `links` slot. Links relevant to the 
site should be placed there as `ul` > `li` > `a`.

The second panel allows you to change the address via the slot `address`. The
contacts below can be customised via the `contacts` slot.

The third panel contains the default slot so you can populate your own content
in it. Ideally you would use the panel to cite attributions, give credits and
state licenses, if any and use the component [Locale](#/Patterns/Locale)
allowing people to choose a language they're comfortable with.

Anything goes.

```jsx { "props": { "className": "i18n-enabled contain-content" } }
let alternativeLinks = [
  {
    text: 'GitHub',
    href: 'https://github.com/creativecommons/cc-vocabulary'
  },
  {
    text: 'UMD Demo',
    href: 'https://codepen.io/dhruvkb/pen/dxRJYV'
  },
  {
    text: 'CSS Demo',
    href: 'https://codepen.io/dhruvkb/pen/bXmmZE'
  }
];
let alternativeContacts = [
  {
    text: 'Report bug',
    href: 'https://github.com/creativecommons/cc-vocabulary/issues/new?labels=improvement%3A+bug&template=bug_report.md&title='
  },
  {
    text: 'Request feature',
    href: 'https://github.com/creativecommons/cc-vocabulary/issues/new?labels=improvement%3A+feature&template=feature_request.md&title='
  }
];

<Footer>
  <template #logo>
    <BrandImagery brand="vocabulary" color="white"/>
  </template>

  <template #links>
    <ul>
      <li
        v-for="(link, index) in alternativeLinks"
        :key="index">
        <a :href="link.href">{{ link.text }}</a>
      </li>
    </ul>
  </template>

  <template #communication>
    <Quote
      attribution="Rumi"
      is-inverted>
      When you are everywhere, you are nowhere.<br/>
      When you are somewhere, you are everywhere.
    </Quote>
    <Paragraph>
      That is to say, all work is done on GitHub.
    </Paragraph>
  </template>

  <template #contacts>
    <ul>
      <li
        v-for="(contact, index) in alternativeContacts"
        :key="index">
        <a :href="contact.href">{{ contact.text }}</a>
      </li>
    </ul>
  </template>

  <Heading :level="6">You really mean anything?</Heading>
  <Paragraph>
    Yes, <em>literally</em> anything.
  </Paragraph>
  <Paragraph>
    <Locale/>
  </Paragraph>
</Footer>
```
