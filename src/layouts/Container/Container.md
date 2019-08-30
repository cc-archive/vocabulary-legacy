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

To see it in its natural form, please switch to the **isolated mode** using the 
** expand icon**
(<svg 
  fill="currentColor" 
  preserveAspectRatio="xMidYMid meet" 
  height="1em" 
  width="1em" 
  viewBox="0 0 40 40" 
  style="vertical-align: middle;">
  <g>
    <path d="m23.4 8.4h8.2v8.2h-3.2v-5h-5v-3.2z m5 20v-5h3.2v8.2h-8.2v-3.2h5z m-20-11.8v-8.2h8.2v3.2h-5v5h-3.2z m3.2 6.8v5h5v3.2h-8.2v-8.2h3.2z"></path>
  </g>
</svg>) 
adjacent to the component name at the top. Keep this in mind as many components
such as the header and the footer use `Container` internally and they will look
best in the isolated view.

```jsx { "props": { "className": "contain-content" } }
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

Formulae for width calculation are

- touch-input devices: `100% - 2×<spacing>`
- mouse-input devices: `<min width> - 2×<spacing> - <scroll>`

where

- spacing: `0.5em`
- scrollbar: `17px`

Device name      | Min width | Max width | Scrollbar | Width
-----------------|-----------|-----------|-----------|----------
Phone            |           | `·600px`  | No        | Fluid
Tablet portrait  | `·600px`  | `·900px`  | No        | `·584px`
Tablet landscape | `·900px`  | `1200px`  | No        | `·884px`
Desktop          | `1200px`  | `1800px`  | Yes       | `1167px`
Big desktop      | `1800px`  |           | Yes       | `1767px`

Note that the devices lie in the range [min-width, max-width).
