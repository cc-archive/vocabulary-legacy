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

To see it in its natural form, please switch to the isolated mode using the icon
in the top-right corner.

```jsx { "props": { "className": "no-i18n contain-content" } }
<div 
  style="width:100%; 
         background-image: linear-gradient(45deg, #ddd 25%, #fff 25%, #fff 50%, #ddd 50%, #ddd 75%, #fff 75%, #fff 100%);
         background-size: 8px 8px;">
  <Container
    style="border: 1px solid #ddd; background-color: white;">
    <Heading :level="1">
      Hello World!
    </Heading>
    <Paragraph>
      The stripes on either sides are gutters. The actual container, i.e. this
      will maintain width across screens in the same device class.
    </Paragraph>
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

