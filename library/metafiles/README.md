<p align="center">
  <a href="https://creativecommons.org/" class="readme-cc-logo">
    <img 
      alt="Creative Commons logo" 
      src="https://raw.githubusercontent.com/creativecommons/vue-vocabulary/master/readme_assets/cc_logo.png"
      height="62px"/>
  </a>
</p>
<p align="center">
  <a href="https://creativecommons.github.io/vue-vocabulary/" class="readme-vocabulary-logo">
    <img 
      alt="Vocabulary logo" 
      src="https://raw.githubusercontent.com/creativecommons/vue-vocabulary/master/readme_assets/vocabulary_logo.svg?sanitize=true"
      height="65px"/>
  </a>
</p>

There are two ways to use this package, via a package manager such as `npm` or
in the browser via a CDN. If you are developing a Vue SPA, going the `npm` route
might be a better approach as it would allow you to make full use of Vue
capabilities such as `v-model` and `events`. But if that is not your platform, we
also provide CDNs for script bundles to be able to use these components 
in your own apps.


### via `npm`

This is a more powerful, flexible and versatile way of using Vocabulary, at the
cost of simplicity.

#### Installation

```bash
$ npm install --save @creativecommons/vocabulary
$ npm install --save @creativecommons/vue-vocabulary
```

That's basically it! I know, I know, I'm just kidding. Nothing about JavaScript 
is that easy.

You must satisfy the peer-dependency that is [Vue
i18n](https://kazupon.github.io/vue-i18n/). Refer to its documentation on how to
go about setting it up. Also, for an optimal experience, you should install
FontAwesome packages from `npm` too. These would be the following.

```js static
[
  '@fortawesome/fontawesome-svg-core',  // Required
  '@fortawesome/free-solid-svg-icons',  // Required
  '@fortawesome/vue-fontawesome',       // Required
  '@fortawesome/free-brands-svg-icons', // For social media or other brand icons
  '@fortawesome/free-regular-svg-icons' // For the free subset of regular icons
]
```

Note the difference between 'must' and 'should' in the last paragraph.

#### Usage

In your `App.vue` file, import the base CSS files for Vocabulary.

```js static
import '@creativecommons/vocabulary/css/root.css'
import '@creativecommons/vocabulary/css/index.css'
```

You should also import the Stylus or SASS or JSON token file so that you can
use the tokens in your own app components for consistency.

```js static
import '@creativecommons/vocabulary/tokens/tokens.styl'
import '@creativecommons/vocabulary/tokens/tokens.scss'
import '@creativecommons/vocabulary/tokens/tokens.raw.json'
```

Set up the i18n instance.

```js static
const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {}
})
```

Then in the component containing Vocabulary components, import the required
components. You will need to register these components using `Vue.component` for
global registration or in the `components` dictionary within your component
definition.

```js static
import { Header, Footer, Locale } from '@creativecommons/vue-vocabulary'

export default {
  components: {
    Header,
    Footer,
    Locale
  }
  ...
}
```

If you are planning to use a hefty chunk of the components, you can
install Vocabulary as a plugin too.

```js static
import VueVocabulary from '@creativecommons/vue-vocabulary'

Vue.use(VueVocabulary)
```

And your template can go like this.

```html
<div class="index">
  <Header app-name="My App"/>
  <Footer><Locale/></Footer>
</div>
```

#### Additional features

A lot of these components accept `icon` props, but they do not register icons.
That onus is on your apps. That step looks like this.

```js static
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

library.add(faGlobe)
```

#### Example

See the codebase of 
[CC Search](https://github.com/creativecommons/cccatalog-frontend/) for an 
example of the library in use.


### via CDN (very simple, very limited)

This is an extremely simple way to get started with Vocabulary, at the cost of
customisation and elegance of a framework.

#### Installation

While this is not technically an installation, importing Vocabulary packages 
from **unpkg** packages is all it takes to get Vocabulary up and running.

Import all required files via `<script>` tags. Technically, if you are not that
interested in Vue components, you could just use the stylesheet and get decent
functionality but since Vue is a self-proclaimed progressive framework, and also
ridiculously tiny, probably just use it right? These packages include the Vue
framework, a mandatory peer-dependency [Vue
i18n](https://kazupon.github.io/vue-i18n/) and the Vocabulary package itself.

```html
<script
  type="text/javascript" 
  src="https://unpkg.com/vue"></script>
<script
  type="text/javascript" 
  src="https://unpkg.com/vue-i18n"></script>
<script
  type="text/javascript" 
  src="https://unpkg.com/@creativecommons/vue-vocabulary"></script>
```

Import the CSS files via `<link>` tags. Unlike the JavaScript imports, this is
non-negotiable (unless you intentionally want the app to look half-baked, that 
is).

```html
<link
  type="text/css"
  rel="stylesheet"
  href="https://unpkg.com/@creativecommons/vocabulary/css/root.css">
<link
  type="text/css"
  rel="stylesheet"
  href="https://unpkg.com/@creativecommons/vocabulary/css/index.css">
```

If you have a build pipeline, you should also transpile the Stylus or SASS token
variables file so that you can use the tokens in your own CSS for consistency.

#### Usage

You need to setup i18n before taking off.

```js static
const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {}
})
```

Then Vocabulary components can be accessed in `<script>` tags using dot
notation and must be remapped to component names that do not conflict with
existing HTML tags inside the `components` dictionary in any component
definition.

```js static
new Vue({
  i18n,
  components: {
    'Header': vocabulary.Header,
    'Footer': vocabulary.Footer,
    'Locale': vocabulary.Locale
  },
  template: `
    <div id="app>
      <div class="index">
        <Header app-name="My App"/>
        <Footer><Locale/></Footer>
      </div>
    </div>
  `
}).$mount('div#app')
```

Your HTML must contain a skeleton chunk that looks like this for Vue to latch
on to.

```html
<body>
  <div id="app"></div>
</body>
```

#### Example

This is best understood by example, which has been provided in the form of a
[demo](https://codepen.io/dhruvkb/pen/dxRJYV) hosted on **CodePen**.
