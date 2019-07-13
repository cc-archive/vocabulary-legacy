## Examples

The locale switcher in the standard form looks like this.

```jsx
<Locale/>
``` 

In components that have i18n enabled and translations defined this component
appears in the preview as well, allowing explorers (like yourself!) to change 
locales and see the various versions of the component.

```jsx { "props": { "className": "i18n-enabled" } }
<Footer>
  <Locale/>
</Footer>
```

All locale switchers across the styleguide, including those in component 
previews, share the same scope and thus switching one will cause a switch in all
components across the styleguide.
