## Locale translates Vocabulary to the users' language.

Vocabulary comes with support for i18n built in. When exploring a component that
has translations defined, the user can switch between locales using this 
component.

### Examples

The locale switcher in the standard form looks like this.

```jsx { "props": { "className": "no-i18n" } }
<Locale/>
``` 

In components that have i18n enabled, such as `<Footer/>`, this switcher shows
up in the preview as well, on the top left corner, allowing explorers to change 
locales and see the various versions of the component on the go.

```jsx
<Footer/>
```

Changes made in any switcher across the styleguide documentation website are 
reflected in all switchers, so be careful.
