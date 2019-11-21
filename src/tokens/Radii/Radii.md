```jsx
<Section
  roundness="rounded"
  is-compact>
  <Heading 
    :level="1"
    color="orange">
    Hello World!
  </Heading>
  <Paragraph>
    The section around has a <strong>large</strong> border-radius.
  </Paragraph>
</Section>
```

### `rem`-based set

Vocabulary provides a number of radii calculated as a fraction of the font size
of the root element. This is set to 16 pixels by default but can be overridden.

```jsx noeditor
<Radii category="rem"/>
```

### `em`-based set

Vocabulary provides a number of spaces calculated as a fraction of the font size
of the element. So in an element with `font-size: 2em`, the sizes are 
doubled as compared to the above `rem` based spaces. Try changing the font size
of the div in the example to see how these spaces change.

```jsx noeditor
<Radii category="em"/>
```

### Special set

Some radii values have a special purpose and meaning. For example, setting 
border radius to 50% converts rectangles into ellipses and setting it to an 
insanely large size converts rectangles to pills.

```jsx noeditor
<Radii category="special"/>
```
