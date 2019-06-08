## Footer concludes the page.

The footer displays information about the site such as its developers and
maintainers as well as licensing information.

### Examples

The footer has a standard layout and appearance.

```jsx
<Footer>
</Footer>
```

The third panel contains a slot so that you can populate your own content in it. 
Ideally you would use the panel to cite attributions, give credits and state 
licenses, if any. But that is just a suggestion. In reality, anything goes.

```jsx
<Footer>
  <Heading :level="6">You really mean anything?</Heading>
  Yes, <em>literally</em> anything.
</Footer>
```
