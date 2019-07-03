## Examples

Blocks of text, such as paragraphs, tend to become harder and harder to read at
long widths. Given the popular interest in high DPI and ultrawide displays, this
is a pervasive issue.

Content should be limited to a fixed width regardless of the size of the 
display. This can be achieved relatively easily using containers. For any two 
displays in the same device class, the container looks identical. This is 
because it limits content to a size that the smallest display in that category
can render without distortions.

Try resizing the window or visiting the page from a different device to see 
the various sizes. See if you can spot the container crossing over into another 
display size-segment.

In this example, blue represents gutters and green is the actual container. To
see it in its natural form, please switch to the isolated mode using the icon in
the top-right corner.

```jsx { "props": { "className": "no-i18n contain-content" } }
<div style="width:100%; background-color: rgb(67, 116, 183);">
  <Container
    style="color: white; background-color: rgb(152, 200, 7);">
    Hello World!
  </Container>
</div>
```

### Width set

Device name      | Min width | Max width + `1px` | Scrollbar | Formula                   | Container width
-----------------|-----------|-------------------|-----------|---------------------------|----------------
Phone            |           | `·600px`          |           | `··100% - 2×0.5em`        | Fluid
Tablet portrait  | `·600px`  | `·900px`          | `17px`    | `·600px - 2×0.5em - 17px` | `·567px`
Tablet landscape | `·900px`  | `1200px`          | `17px`    | `·900px - 2×0.5em - 17px` | `·867px`
Desktop          | `1200px`  | `1800px`          | `17px`    | `1200px - 2×0.5em - 17px` | `1167px`
Big desktop      | `1800px`  |                   | `17px`    | `1800px - 2×0.5em - 17px` | `1767px`

