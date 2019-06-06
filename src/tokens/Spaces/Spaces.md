Vocabulary is meant to be readable, and whitespaces are of paramount importance
in readability considerations. Vocabulary provides a number of spaces in 
different units to ensure consistency in the whitespaces throughout the project.

### `em` based

Vocabulary provides a number of spaces calculated as a fraction of the font size
of the element.

```jsx
<div style="font-size: 3em;">
  <Spaces units="em"/>
</div>
```

### `rem` based

Vocabulary provides a number of spaces calculated as a fraction of the font size
of the root element, which is by default 16px.

```jsx
<Spaces units="rem"/>
```
