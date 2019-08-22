```jsx
<Heading
  :level="1">
  Hello World!
</Heading>
<Paragraph>
  The heading above leaves a <strong>small</strong> margin on the bottom.
</Paragraph>
```

### `rem`-based set

Vocabulary provides a number of spaces calculated as a fraction of the font size
of the root element. This is set to 16 pixels by default but can be overridden.

```jsx noeditor
<Spaces category="rem"/>
```

### `em`-based set

Vocabulary provides a number of spaces calculated as a fraction of the font size
of the element. So in an element with `font-size: 3em`, the sizes are 
tripled as compared to the above `rem` based spaces. Try changing the font size
of the div in the example to see how these spaces change.

```jsx noeditor
<Spaces category="em"/>
```

### Special set

Some space values have a special purpose and meaning. For example, setting 
spacing between two elements to zero using a variable is so cool.

```jsx noeditor
<Spaces category="special"/>
``` 
