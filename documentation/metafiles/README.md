<p align="center">
  <a href="https://creativecommons.org/" class="readme-cc-logo">
    <img 
      alt="Creative Commons logo" 
      src="https://raw.githubusercontent.com/creativecommons/cc-vocabulary/master/readme_assets/cc_logo.png" 
      height="62px"/>
  </a>
</p>
<p align="center">
  <a href="https://creativecommons.github.io/cc-vocabulary/" class="readme-vocabulary-logo">
    <img 
      alt="Vocabulary logo" 
      src="https://raw.githubusercontent.com/creativecommons/cc-vocabulary/master/readme_assets/vocabulary_logo.svg?sanitize=true" 
      height="65px"/>
  </a>
</p>

As CC Vocabulary grows, so does the effort for maintaining code quality and 
keeping technical debt to a minimum. Having a set of rules makes sure that some
semblance of order is maintained in the chaos that is developing and maintaining
a component library.


### Base

The project follows the 
[Standard code style](https://standardjs.com/) and extends upon the 
[Vue official style guide](https://vuejs.org/v2/style-guide/). Patches resolving
discrepancies or deviations from either convention are considered PR-worthy and
will be considered. Changes to the style guide, on the other hand, require
conclusive discussions in issues before meriting a PR for the change.

In case of conflict between the base conventions and rules mentioned below, the
rules below take higher priority.


### Template

#### Line breaks

A tag with two or more than two attributes must be broken down with each
attribute or prop appearing on its own line.

<strong id="bad-example">Wrong:</strong>
```html static
<img :src="source" :alt="alternateText"/>
```

<strong id="good-example">Right:</strong>
```html static
<img
  :src="source"
  :alt="alternateText"/>
```

Note that `class` and `:class` do not count as two attributes but one.

<strong id="good-example">Right:</strong>
```html static
<div class="special div" :class="divClasses">...</div>
```

We place the tag ending on the last attribute unlike the Vue official style
guide.

Leave line breaks between semantically separate siblings.

#### Shorthand consistency

Except while directly assigning to the Vue directive, always use the following
shorthands.

- `:` instead of `v-bind`
- `@` instead of `v-on`
- `#` instead of `v-slot`

<strong id="bad-example">Wrong:</strong>
```html static
<div  
  v-bind:color="divColor"
  v-on:click="changeContent">
  <template v-slot:content>
    ...
  </template>
</div>
```

<strong id="good-example">Right:</strong>
```html static
<div  
  :color="divColor"
  @click="changeContent">
  <template #content>
    ...
  </template>
</div>
```

#### Attribute order

The attributes being passing to a component or DOM element in a template must
be ordered in a specific way that makes semantic sense.

- `is`
- Vue directives
    - `v-model`
    - `v-bind`
    - `v-on`
    - Programmatic rendering
        - `v-if`, `v-else-if` and `v-else`
        - `v-for`
- Unique identifiers
    - `key`
    - `id`
- Styling identifiers
    - `class` 
    - `style`
- `(:)prop`s/DOM attributes [ordered aesthetically]
- `@event`s [ordered alphabetically]

The groups should be demarcated using newlines.

<strong id="good-example">Right:</strong>
```html static
<div
  :is="tag"

  v-bind="$attrs"
  v-on="eventListeners"

  v-for="(todo, index) in todoList"

  :key="index"
  :id="`todo-${index}`"
  
  class="todo"
  :class="todoClasses"
  :style="todoStyles"

  prop-one="One"
  :prop-two="propTwo"

  height="100"
  :width="width"

  is-call-to-action
  readonly

  @event="eventListener">
  ...
</div>
```

This order is different from the official Vue style guide so pay attention to 
follow this order instead of that given over there.  


### Script

#### Import order

All imports must be structured as follows.

- Third party packages
    - Vue family [ordered alphabetically]
    - Others [grouped by package scope, ordered alphabetically]
- Vocabulary components [grouped by families, ordered alphabetically]
- Mixins in alphabetical order
    - x-ed mixins
    - y-able mixins

The groups should be demarcated using newlines.

<strong id="bad-example">Wrong:</strong>
```jsx static
import Colored from '@/mixins/colored'
import Invertible from '@/mixins/invertible'
import SlotRenderer from '@/utils/SlotRenderer/SlotRenderer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
```

<strong id="good-example">Right:</strong>
```jsx static
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import SlotRenderer from '@/utils/SlotRenderer/SlotRenderer'

import Colored from '@/mixins/colored'
import Invertible from '@/mixins/invertible'
```

#### Props order

Boolean props last, in alphabetical order

### Computed property order

- Classes
    - Component classes
    - Component section classes
- Add-on checks
- Component listeners
- Any other computed properties

The groups should be demarcated using newlines.

<strong id="good-example">Right:</strong>
```jsx static
{
  computed: {
    buttonClasses: function () { ... },
    contentClasses: function () { ... },

    hasAddons: function () { ... },

    buttonListeners: function () { ... }
  }
}
```


### Style

#### Import order

- URL imports
- Token variables from assets
- Style helpers in alphabetical order

The groups should be demarcated using newlines.

<strong id="bad-example">Wrong:</strong>
```css static
@import "~@/styles/sizes.styl"
@import "~@/styles/colors.styl"
@import "~@/styles/font-reset.styl"
@import "~@/assets/tokens/tokens.styl"
```

<strong id="good-example">Right:</strong>
```css static
@import url("https://fonts.googleapis.com/css?family=Fira+Sans&display=swap")

@import "~@/assets/tokens/tokens.styl"

@import "~@/styles/colors.styl"
@import "~@/styles/font-reset.styl"
@import "~@/styles/sizes.styl"
```

#### Scoping

All rules must be scoped under `.vocab.<kebab-cased-component-name>`. That just
makes exporting the library as pure CSS way easier. 

Scoping by the use of the `scoped` attribute on the tag `<style>` is prohibited
to prevent hashes from appearing in the built CSS stylesheets.

<strong id="bad-example">Wrong:</strong>
```css static
select {
  /* All variables and rules */
}
```

<strong id="good-example">Right:</strong>
```css static
.vocab.select-field {
  /* All variables and rules */
}
```

#### Variable order

- Color palette
    - Primary
    - Secondary
    - Tertiary?
    - Overlay
- Other variables [following the order of rules]

#### Variable overriding order

- Inverted
- Colors
- Indication

Overrides for indications must be repeated for specificity in the face of color
and shade.

#### Mandates

Disabled fields should have opacity of `0.6` and must have the cursor as
`not-allowed`.

Read only fields must have the cursor as `default`.

#### Rule order

The rules for CSS must be placed in a specific order, so that they have semantic
meaning, for example we begin by placing the component itself on the canvas, 
then place content within the component and finally move outwards along the box
model tweaking properties from background to margin. Transitions and keyframes 
come last.

- Appearance (e.g. in the case of controls)
- Position
- Display
- Opacity (e.g. in the case of disabled controls)
- Content
    - Color
    - Font
        - Size
        - Family
        - Weight
    - Text decoration
    - White space
    - Cursor
- Background
- Box model
    - Dimensions
    - Padding
    - Border
    - Margin
- Transitions
- Children, `::before` and `::after`
    - ... [recurse]
    
This is followed by states, which will usually override some rules from the 
above list. For example `:active` and `:hover`.
    
This is followed by style overrides which will usually override some rules as
well as the states. For example, `.basic` and `.disabled`.

### Nomenclature

A lot about the quality of code essentially comes down to the names we give
things such as files, variables or code blocks. This section deals with
explaining the rationale behind many naming choices to allow you to understand
and comply with them in the future.

#### Mixin names

Mixins are named according to which category they fall into.

| Name | Why |
|-|-|
| **x-ed/ing**    | These mixins provide choice based props, so a button capable of having color is Colored |
| **y-able/ible** | These mixins usually provide Boolean props, so a card capable of being raised is Raisable |

---

That's about it. Following these guidelines should equip you to write supremely
readable and maintainable code (as long as you also follow the Standard code 
style and conventions and also the Vue official code style guide).

Looking forward to your contributions.

