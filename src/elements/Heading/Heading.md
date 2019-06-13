## Headings title the content under them.

They are often short, punchy and attractive, summarising the content under them 
as well as keeping a user's attention.

### Examples

Stardard headers look like this. Each level corresponds to its HTML tag, thus
ranging from `h1` to `h6`.

```jsx { "props": { "className": "no-i18n" } }
<Heading :level="1">Heading 1</Heading>
<Heading :level="2">Heading 2</Heading>
<Heading :level="3">Heading 3</Heading>
<Heading :level="4">Heading 4</Heading>
<Heading :level="5">Heading 5</Heading>
<Heading :level="6">Heading 6</Heading>
```

If the header is set against a dark or non-white option, the text color can be 
inverted for readability or aesthetic reasons.

```jsx { "props": { "className": "dark-background no-i18n" } }
<Heading inverted :level="1">Heading 1</Heading>
<Heading inverted :level="2">Heading 2</Heading>
<Heading inverted :level="3">Heading 3</Heading>
<Heading inverted :level="4">Heading 4</Heading>
<Heading inverted :level="5">Heading 5</Heading>
<Heading inverted :level="6">Heading 6</Heading>
```

Needless to say, headings can be colored with any color from the set provided by
CC Vocabulary.

```jsx { "props": { "className": "no-i18n" } }
<Heading :level="6" color="blue">Blue</Heading>
<Heading :level="6" color="green">Green</Heading>
<Heading :level="6" color="magenta">Magenta</Heading>
<Heading :level="6" color="olive">Olive</Heading>
<Heading :level="6" color="orange">Orange</Heading>
<Heading :level="6" color="purple">Purple</Heading>
<Heading :level="6" color="red">Red</Heading>
<Heading :level="6" color="sand">Sand</Heading>
<Heading :level="6" color="yellow">Yellow</Heading>
```
