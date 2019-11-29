## el·e·ments

<center>
<img
  src="https://raw.githubusercontent.com/creativecommons/vue-vocabulary/master/src/assets/icons/ds_nomenclature/element.svg?sanitize=true"
  width="64px"/>
</center>

&nbsp;

Elements are components that cannot be broken down into smaller or simpler 
components. They utilize decisions made on the token level.

An element is a component that is made up of DOM. An element cannot be broken 
down into smaller or simpler components. If a component can be broken down, the 
broken down components are themselves elements, this component isn't.


### Working with elements

Elements are nothing but relatively simpler Vue components and consequently live 
in eponymous folders containing `Element.vue`, `Element.md` and `Element.styl` 
files. Elements never bundle translations.

Elements may not import other elements, because that would violate the atomicity
principle.


### Examples

In most cases elements just substitute one HTML tag. For example, consider
how the component `InputField` is just an alternative for HTML `<input>`. It
even accepts the same attributes such as `type` and `autofocus`. You can also
see how `Heading` is replaces HTML tags `<h1>` through `<h6>` via the `level`
prop.

Here are some elements in action.

```jsx
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCheck);

let value = 'Some answer';

let indication = (value) => {
  if (value === 'Right answer') {
    return 'positive';
  } else if (value === 'Wrong answer') {
    return 'negative'; 
  } else {
    return 'probably';
  }
};

<Heading
  color="green"
  :level="4">
  Try entering <em>'Right answer'</em>
</Heading>
<Heading
  color="tomato"
  :level="4">
  Try entering <em>'Wrong answer'</em>
</Heading>
<InputField
  v-model="value"
  color="blue"
  is-infused/>
<Button
  icon="check"
  :indication="indication(value)">
  Submit
</Button>
```

