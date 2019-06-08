## Containers make pages large-display friendly.

Blocks of text, such as paragraphs, tend to become harder and harder to read at
long widths. This can be achieved relatively easily using containers.

### Examples

Fundamentally a container limits its contents to 1200px and, if the parent is 
wider, center aligns itself horizontally within the parent. Try resizing the
window from small width to large width to see if you can spot the container 
reach the `max-width` and activate centering. 

```jsx
<div style="width:100%; background-color: rgb(67, 116, 183);">
  <Container style="background-color: rgb(152, 200, 7);">
    <Paragraph inverted>
      Hello World!
    </Paragraph>
  </Container>
</div>
```
