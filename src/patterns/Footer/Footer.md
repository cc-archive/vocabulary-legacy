## Examples

The footer has a standard layout and appearance. It sits flush with the 
[Header](#/Patterns/Header) component, thanks to the use of 
[Container](#/Layouts/Container).

```jsx { "props": { "className": "contain-content" } }
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

### Add-on set

The third panel contains a slot so that you can populate your own content in it.

Ideally you would use the panel to cite attributions, give credits and state 
licenses, if any. The third panel also presents a good location to use the 
component [Locale](#/Patterns/Locale) allowing people to choose a language 
they're comfortable with. But those are just suggestions.

Anything goes.

```jsx { "props": { "className": "contain-content" } }
<Footer>
  <Heading :level="6">You really mean anything?</Heading>
  Yes, <em>literally</em> anything.
</Footer>
```

```jsx { "props": { "className": "contain-content" } }
<Footer>
  <Locale/>
</Footer>
```
