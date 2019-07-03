## Examples

Simply used, license icons look like a bunch of circular shapes.

```jsx { "props": { "className": "no-i18n" } }
<LicenseIconography 
  :iconList="['', 'by', 'sa', 'nd', 'nc', 'zero', 'pd']"/>
```

These icons can be used in the midst of running text and they will inherit the
font size and color of their surrounding content.

```jsx { "props": { "className": "no-i18n dark-background" } }
<Heading :level="3" color="orange">
 The CC BY license
  <LicenseIconography :iconList="['', 'by']"/>:
</Heading>
<Paragraph is-inverted>
  The CC BY license
  (<LicenseIconography :iconList="['', 'by']"/>)
  is a permissive free-culture license.
</Paragraph>
```

### Icon set

To start there is the plain CC logo icon. This should precede all other icons
that depict CC licenses.

```jsx { "props": { "className": "no-i18n enlarged-text" } }
<LicenseIconography
  :iconList="['']"/>
```

Then there all all the various components that make up the CC license aspects.

```jsx { "props": { "className": "no-i18n enlarged-text" } }
<LicenseIconography
  :iconList="['by', 'nc', 'nd', 'sa']"/>
```

The non-commercial icon has region specific variants for Europe and Japan (why
these two regions only and specifically is beyond my understanding).

```jsx { "props": { "className": "no-i18n enlarged-text" } }
<LicenseIconography
  :iconList="['nc-eu', 'nc-jp']"/>
```

Some very domain specific and niche aspects have also been covered.

```jsx { "props": { "className": "no-i18n enlarged-text" } }
<LicenseIconography
  :iconList="['sampling', 'sampling-plus', 'remix', 'share']"/>
```

Finally there are icons for the CC Zero license and the Public Domain mark.

```jsx { "props": { "className": "no-i18n enlarged-text" } }
<LicenseIconography
  :iconList="['zero', 'pd']"/>
```
