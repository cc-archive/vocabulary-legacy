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
    code: 'hi',
    englishName: 'Hindi', // For the love of God,
    nativeName: 'Hindi'   // do not subject your users to this.
  },
  {
    code: 'en',
    englishName: 'अंग्रेज़ी',  // For the love of God,
    nativeName: 'अंग्रेज़ी'    // do not subject your users to this.
  }
];

<Locale :locale-list="localeList"/>
```

In components that have i18n enabled and translations defined this component
appears in the preview as well, allowing explorers (like yourself!) to change 
locales and see the various versions of the component.

```jsx { "props": { "className": "i18n-enabled" } }
<Hello/>
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

All locale switchers across the documentation (or any application for that
matter), including those in component previews, are reactively bound to the same
variable via `v-model` and thus switching one will cause a switch in all
components everywhere.

Pretty powerful stuff!
