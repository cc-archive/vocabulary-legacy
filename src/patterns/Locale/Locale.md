The locale switcher in the standard form looks like this.

```jsx
<Locale/>
``` 

### Locale set

By default Vocabulary ships with some locales. But these can be replaced using
the `localeList` prop.

```jsx
let localeList = [
  {
    code: 'en',
    englishName: 'English',
    nativeName: 'English'
  },
  {
    code: 'hi',
    englishName: 'Hindi',
    nativeName: 'हिन्दी'
  },
  {
    code: 'ma',
    englishName: 'Marathi',
    nativeName: 'मराठी'
  },
  {
    code: 'gu',
    englishName: 'Gujarati',
    nativeName: 'ગુજરાતી'
  }
];

<Locale :locale-list="localeList"/>
```

You can embed the switcher in any component inside any Vue i18n configured
application (which is a must for running CC Vocabulary) and it will enable
toggling between the translations for that application. The
[Footer](#/Patterns/Footer) is an ideal place.

```jsx
<Footer>
  <Locale/>
</Footer>
```

In components that have i18n enabled and translations defined this component
appears in the preview as well, allowing explorers (like yourself!) to change 
locales and see the various versions of the component.

All locale switchers across the documentation (or any application for that
matter), including those in component previews, are reactively bound to the same
variable via `v-model` and thus switching one will cause a switch in all
components everywhere.

Pretty powerful stuff!
