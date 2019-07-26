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

```jsx
import Vue from 'vue';
import Color from './Colors/Color';
import Font from './Fonts/Font';
import Space from './Spaces/Space';
import Radius from './Radii/Radius';
import Shadow from './Shadows/Shadow';

Vue.component('Color', Color);
Vue.component('Font', Font);
Vue.component('Space', Space);
Vue.component('Radius', Radius);
Vue.component('Shadow', Shadow);

<Grid>
  <GridCell :spanSet="[12, 3, 3, 3, 3]">
    <Color 
      name="color_oxford_blue" 
      value="rgb(0, 38, 77)"
      comment="Deep blue color"/>
  </GridCell>
  <GridCell :spanSet="[12, 3, 3, 3, 3]">
    <Space
      name="space_half"
      value="0.5em"
      comment="Half em space"/>
  </GridCell>
  <GridCell :spanSet="[12, 3, 3, 3, 3]">
    <Radius
      name="radius_half"
      value="0.5em"
      comment="Half em border radius"/>
  </GridCell>
  <GridCell :spanSet="[12, 3, 3, 3, 3]">
    <Shadow
      name="shadow_five"
      value="0 5px 5px 0"
      comment="Five pixels box shadow"/>
  </GridCell>
</Grid>
<br/>
<Font
  property="size"
  name="size_two"
  value="2.0rem"
  comment="Two rem sized font"/>
<br/>
<Font
  property="weight"
  name="weight_bold"
  value="bold"
  comment="Bold weighted font"/>
```
