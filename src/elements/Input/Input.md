## Inputs accept input, duh!

An input field can be used to accept input from the user, be it text, email 
addresses, passwords or numbers.

### Examples

At the fundamental level, an input looks like this.

```jsx { "props": { "className": "no-i18n" } }
<Input
  type="text"
  placeholder="Answer..."/>
```

A field can also contain two icons, one on the left and right side each. Note 
that the icon must be added to the library by the application.

```jsx { "props": { "className": "no-i18n" } }
<Input
  type="text"
  :icons="['question', '']"
  placeholder="Left"/>
<Input
  type="text"
  :icons="['', 'check']"
  placeholder="Right"/>
<Input
  type="text"
  :icons="['question', 'check']"
  placeholder="Both"/>
```

If the default icons are not good enough, you may use the `left-icon` and 
`right-icon` slots to populate your own icon node. You do need to pass some 
non-empty values to the `icons` array and need to style your slots with the 
`left-icon` and `right-icon` classes. 

But keeping in mind the size
considerations, we would advise sticking to a `FontAwesomeIcon` component with 
the `fixed-width` prop.

```jsx { "props": { "className": "no-i18n" } }
<Input
  type="text"
  :icons="['x', 'x']"
  placeholder="Not icons">
  <template v-slot:left-icon>
  <div class="left-icon"><strong>:-)</strong></div>
  </template>
  <template v-slot:right-icon>
  <div class="right-icon"><strong>:-(</strong></div>
  </template>
</Input>
```

A default value can be provided for the field.

```jsx  { "props": { "className": "no-i18n" } }
<Input
  type="text"
  value="Value"
  placeholder="Placeholder"/>
```

A field can have a label for clarity.

```jsx  { "props": { "className": "no-i18n" } }
<Input
  type="text"
  label="Question?"
  placeholder="Answer..."/>
```

The label can also be populated via the default slot. So you could have the 
label to be absolutely anything.

```jsx  { "props": { "className": "no-i18n" } }
<Input 
  type="text" 
  value="BY-SA" 
  placeholder="License name">
  <Badge license="by-sa">
</Input>
```

So a very customised field looks like this.

```jsx  { "props": { "className": "no-i18n" } }
<Input 
  type="text" 
  label="Question?"
  :icons="['', 'check']"
  placeholder="Answer...">
</Input>
```

A field may be disabled to prevent it from being changed. And it fades away.
So that you don't see it.

```jsx  { "props": { "className": "no-i18n" } }
<Input
  disabled
  type="text"
  label="Question?"
  :icons="['', 'minus']"
  placeholder="Can't answer"/>
```

A field may indicate erroneous input. And it is distinctly highlighted in red. 
So there is no way to miss it.

```jsx  { "props": { "className": "no-i18n" } }
<Input
  error
  type="text"
  label="Question?"
  :icons="['', 'times']"
  value="Wrong answer"
  placeholder="Question"/>
```

On a dark background, the colors may be inverted for readability. Do not invert
erroneous and disabled inputs as there may be conflicts.

```jsx { "props": { "className": "no-i18n dark-background" } } 
<Input
  inverted
  type="text"
  label="Question?"
  :icons="['', 'times']"
  value="Answer..."
  placeholder="Question"/>
```
