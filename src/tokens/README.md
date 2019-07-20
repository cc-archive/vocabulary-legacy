## Tokens

<center>
<img
  src="https://raw.githubusercontent.com/creativecommons/cc-vocabulary/master/src/assets/icons/ds_nomenclature/token.svg?sanitize=true"
  width="64px"/>
</center>

&nbsp;

Design tokens are the atoms of the system. They are used instead of hardcoded 
values to ensure a better consistency across platforms.

A token is the equivalent of a constant, that Theo, a token management and 
transformation library, can process and convert to any number of formats such as 
web, Android or iOS.


### Working with design tokens

To add a design token, either add it to the relevant or, if the token lies in a 
new category, a new `.yml` file in the `tokens/` directory. Make sure that the
file is added to the `imports` key in `tokens.yml`. To change the value of a 
design tokens, find the token and update the `value` prop.

After the updates, run `npm run theo` to recompile the raw tokens into a Stylus
stylesheet and a JSON data dumps.


### Examples

We use tokens to standardise a number of values such as font sizes and colors.
For example, a number of harmonics for font sizes have been named as `small`,
`normal` all the way up to `mega`. This ensures that across the project, the 
font size is rendered the same given the same name. The same is true for colors
which follow a strict naming scheme.

Take a look at how tokens replace a value with a Stylus variable.

```jsx { "props": { "className": "i18n-enabled" } }
import Vue from 'vue';
import Color from './Color/Color';
import Font from './Font/Font';
import Space from './Space/Space';

Vue.component('Color', Color);
Vue.component('Font', Font);
Vue.component('Space', Space);

<Color 
  name="color_oxford_blue" 
  value="rgb(0, 38, 77)"/>
<br/>
<Font
  property="size"
  name="size_one_half"
  value="1.5000rem"/>
<br/>
<Space
  name="space_two"
  value="2.0000em"/>
```
