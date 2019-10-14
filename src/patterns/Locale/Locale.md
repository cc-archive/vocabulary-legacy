The locale switcher in the standard form looks like this.

```jsx
<Locale/>
```

### Locale set

By default Vocabulary ships with some locales which can be replaced using the
`locales` prop.

```jsx
let locales = {
  en: {
    direction: 'ltr',
    englishName: 'English',
    nativeName: 'English'
  },
  hi: {
    direction: 'ltr',
    englishName: 'Hindi',
    nativeName: 'हिन्दी'
  },
  gu: {
    direction: 'ltr',
    englishName: 'Gujarati',
    nativeName: 'ગુજરાતી'
  }
};

<Locale :locales="locales"/>
```

### RTL compatibility

Some languages are written from right to left such as
- Arabic (العَرَبِيَّة‎)
- Hebrew (עִבְרִית‎)
- Farsi (فارسی)

Once you switch into one of the languages that has a direction specified as RTL
your page direction will automatically be switched to read right to left.

```jsx
let locales = {
  en: {
    direction: 'ltr',
    englishName: 'English',
    nativeName: 'English'
  },
  hi: {
    direction: 'ltr',
    englishName: 'Hindi',
    nativeName: 'हिन्दी'
  },
  ar: {
    direction: 'rtl',
    englishName: 'Arabic',
    nativeName: 'العربية'
  }
};

<Locale :locales="locales"/>
```

### Embedding

Since you've already set up the infrastructure for internationalisation when you
[installed Vocabulary](#/Vocabulary/User%20guide), you can place the switcher
just about anywhere and simply get on with it. You can embed the switcher in any
component and it will enable toggling between the translations for that
application. The [Footer](#/Patterns/Footer) is an ideal place.

```jsx
<Footer>
  <Locale/>
</Footer>
```

In components that have i18n enabled and translations defined this component
appears in the preview as well, allowing explorers (like yourself!) to change 
locales and see the various versions of the component.

All locale switchers across the documentation (or any application for that
matter), including those in component previews, are reactively bound to the 
current locale and to thus to each other. This means that switching one will
cause a switch in all `Locale` components everywhere.

Pretty powerful stuff!

### Attribute set

Since `Locale` is a transparent wrapper on `SwitchField`, all props that you
could pass to a `SwitchField` will still work. Slots, however, will not.

Here is an example with a simplified version.

```jsx
<Locale simplicity="slight"/>
```
