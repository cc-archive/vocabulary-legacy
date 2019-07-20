## Patterns

<center>
<img 
  src="https://raw.githubusercontent.com/creativecommons/cc-vocabulary/master/src/assets/icons/ds_nomenclature/pattern.svg?sanitize=true"
  width="64px"/>
</center>

&nbsp;

An element on its own has very little utility. A pattern on the other hand, 
places elements together in meaningful ways using various layouts to make 
reusable chunks of code that can be easily used in various scenarios.

Patterns are UI components similar to elements, except that they fall on the 
more complex side of the spectrum. Patterns utilize elements, layouts and 
tokens in that they place elements inside layouts and style them with tokens.


### Working with patterns

Patterns are nothing but Vue components and consequently live in eponymous 
folders containing `Pattern.vue`, `Pattern.md` and `Pattern.styl` files. If a
pattern brings along its translations it may also contain a `lang.json` file.

Patterns import elements and may import other patterns, although ideologically, 
dependence on other patterns would be minimal.


### Examples

So while `Container` is a cool component to have and `Headings` allow us to
write structured content, they need some real-world use. Consider components
like the `Header` and the `Footer` that use these components. As mentioned above
a pattern like the `Footer` can bring along its translations (try playing with 
the locale switcher).

Here are some available patterns. You should probably 
[isolate](#!/Patterns) this view for clarity. In isolated mode already? Go 
[back to normal](#/Patterns).

```jsx { "props": { "className": "i18n-enabled contain-content" } }
<Header 
  appName="Search" 
  color="blue">
  <InputField
    type="text"
    color="blue"
    shade="dark"
    :iconSet="['keyboard', '']"
    placeholder="Search..."/>
  <Navigation
    is-inverted
    :linkList="[{text: 'About', href:'#1'}, {text: 'Browse', href:'#2'}, {text: 'Feedback', href:'#3'}]"/>
</Header>
<Footer/>
```
