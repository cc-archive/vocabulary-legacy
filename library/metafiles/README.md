# Vocabulary

> CC Vocabulary is a cohesive design system to unite the web facing Creative 
> Commons. CC Vocabulary makes it easier to develop Creative Commons apps while
> ensuring a consistently familiar experience.

## How to use

There are two ways to use this package, via a package manager such as `npm` or
in the browser via a CDN.

### via npm _(preferred)_

```bash
$ npm install --save @creativecommons/vocabulary
```

That's basically it. You will need to satisfy the peer dependency on [Vue
i18n](https://kazupon.github.io/vue-i18n/) by
[@kazupon](https://github.com/kazupon). See installation instructions and the
how-to guide on getting started.

In the `App.vue` file, import the CSS files for CC Vocabulary.

```js
import '@creativecommons/vocabulary/root.css'
import '@creativecommons/vocabulary/vocabulary.css'
```

Then in the component containing CC Vocabulary components, import the required
components.

```js
import { Header, Footer, Locale } from '@creativecommons/vocabulary'
```

Dropping the `Locale` component somewhere enables translations across the 
application.

### via CDN

Import all required files via `<script>` tags.

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-i18n"></script>
<script src="https://unpkg.com/@creativecommons/vocabulary"></script>
```

Import the CSS files via `<link>` tags.

```html
<link 
  rel="stylesheet" 
  href="https://unpkg.com/@creativecommons/vocabulary:root.css">
<link 
  rel="stylesheet" 
  href="https://unpkg.com/@creativecommons/vocabulary:vocabulary.css">
```

Then CC Vocabulary components can be accessed in `<script>` tags using dot
notation such as `vocabulary.Header` and `vocabulary.Footer` but must be
remapped to lowercase names that do not conflict with existing HTML tags inside
the `components` dictionary.

See the bundled HTML file `demo.html` for an example.
