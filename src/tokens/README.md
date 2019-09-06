## to·kens

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

After the updates, run `npm run theo` to recompile the raw tokens into a
stylesheet (Stylus `.styl` and SASS `.scss`) and a JSON data dumps.


### Examples

We use tokens to standardise a number of values such as font sizes and colors.
For example, a number of harmonics for font sizes have been named such as small,
normal, big, all the way up to mega. This ensures that across the project, the 
font size is rendered the same given the same name. The same is true for colors
which follow a strict naming scheme.

Take a look at how tokens replace a value with a stylesheet variable
(distributed as variable files for both Stylus and SASS).

```jsx noeditor
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

let spanSet = [12, 3, 3, 3, 3];

<Grid density="sparse">
  <GridCell :span-set="spanSet">
    <Color
      category="color-group-oxford"
      name="color_oxford_blue" 
      value="rgb(0, 33, 71)"
      comment="Official color of the University of Oxford"/>
  </GridCell>
  <GridCell :span-set="spanSet">
    <Space
      name="rspace_dedh"
      value="1.5rem"
      comment="Extreme spacing in rem units"/>
  </GridCell>
  <GridCell :span-set="spanSet">
    <Radius
      name="rradius_dedh"
      value="1.5rem"
      comment="Extremely rounded radius in rem units"/>
  </GridCell>
  <GridCell :span-set="spanSet">
    <Shadow
      name="shadow_aeroplane"
      value="0 1em 1em 0"
      comment="Object appears flying"/>
  </GridCell>
  <GridCell :span-set="[12]">
    <Font
      property="size"
      name="size_dedh"
      value="1.5000rem"
      comment="Font size for <~H5 and equivalent"/>
  </GridCell>
  <GridCell :span-set="[12]">
    <Font
      property="weight"
      name="weight_black"
      value="900"
      comment="Bolder-than-bolder-than-normal weight"/>
  </GridCell>
</Grid>
```
