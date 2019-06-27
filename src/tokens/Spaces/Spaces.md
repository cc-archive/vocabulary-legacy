Vocabulary is meant to be readable, and whitespaces are of paramount importance
in readability considerations. Vocabulary provides a number of spaces in 
different units to ensure consistency in the whitespaces throughout the project.

### `rem` based

Vocabulary provides a number of spaces calculated as a fraction of the font size
of the root element. This is set to 16 pixels by default but can be overridden.

```jsx { "props": { "className": "no-i18n" } }
<Spaces units="rem"/>
```

### `em` based

Vocabulary provides a number of spaces calculated as a fraction of the font size
of the element. So in an element with `font-size: 3em`, the sizes are 
tripled as compared to the above `rem` based spaces. Try changing the font size
of the div in the example to see how these spaces change.

```jsx { "props": { "className": "no-i18n" } }
<div style="font-size: 3em;">
  <Spaces units="em"/>
</div>
```
