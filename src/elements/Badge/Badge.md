## Badges are hieroglyphs for licenses.

A badge represents a license in pictorial form depicting aspects of the license
such as shareability and commercial usability.

### Examples

Badges for all licenses come in two variants:
- a larger one with natural dimensions of 120px &times; 42px 
- a smaller one with natural dimensions of 80px &times; 15px

Larger badges for the licenses use both abbreviations as well as iconography for 
every individual aspect of the license.

```jsx { "props": { "className": "no-i18n" } }
<Badge license="by-sa"/>
```

Smaller badges for the licenses use only abbreviations for every individual 
aspect of the license.

```jsx { "props": { "className": "no-i18n" } }
<Badge license="by-nc-nd" size="small"/>
```

One of the licenses, SRR (Some Rights Reserved) has no small variant. Also the 
only variant available has atrocious vertical spacing so the use of it is highly 
discouraged. Also a patch with a better version of the SVG is much appreciated.

```jsx { "props": { "className": "no-i18n" } }
<Badge license="srr" size="small"/>
<Badge license="srr" size="large"/>
```

Since `Badge` tags are effectively `img` tags, one can use `height` and `width`
attributes or CSS rules to change the size of the badge. And since the images 
are all SVGs, they can scale beautifully to virtually any size.

```jsx { "props": { "className": "no-i18n" } }
<Badge license="by-nc-nd" height="84px"/>
<Badge license="by-nc-nd" style="height: 84px;"/>
```
