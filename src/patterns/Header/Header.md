## Examples

The header has a standard layout and appearance. It sits flush with the 
[Footer](#/Patterns/Footer) component, thanks to the use of 
[Container](#/Layouts/Container).

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

### Style set

Without specifying any app, the header shows the CC wordmark.

```jsx { "props": { "className": "contain-content" } }
<Header/>
```

The name of the site and the URL to which the branding points can be passed to 
the header via props.

```jsx { "props": { "className": "contain-content" } }
<Header 
  color="red"
  appName="Search"
  homeLink="https://creativecommons.org/"/>
```

If the standard site naming does not catch your fancy, you can simply populate
the branding slot with something that does. Try not to deviate too much from the
standard template.

```jsx { "props": { "className": "contain-content" } }
<Header color="green">
  <template v-slot:branding>
    <LicenseIconography :iconList="['', 'by']"/>:
    Attribution
  </template>
</Header>
```

### Add-on set

The right side contains a slot so that you can populate your own content in it.

Ideally you would use this space to place a [Navigation](#/Elements/Navigation) 
component or a search box or the user profile. But those are just suggestions.

Anything goes.

```jsx { "props": { "className": "contain-content" } }
<Header 
  appName="App" 
  color="magenta">
  <Heading :level="6">You really mean anything?</Heading>
  Yes, <em>literally</em> anything.
</Header>
```

```jsx { "props": { "className": "contain-content" } }
<Header 
  appName="App" 
  color="magenta">
  <Navigation
    is-inverted
    :linkList="[{text: 'Link 1', href:'#1'}, {text: 'Link 2', href:'#2'}]"/>
</Header>
```

### Color set

A header without the color specified is orange.

```jsx { "props": { "className": "contain-content" } }
<Header appName="Default"/>
```

But by now you already know, the header can be colored using any color from the 
set provided by CC Vocabulary. Let's leave orange for the 
[main site](https://creativecommons.org), shall we?

```jsx { "props": { "className": "contain-content" } }
<Header appName="Blue" color="blue"/>
<br/>
<Header appName="Green" color="green"/>
<br/>
<Header appName="Magenta" color="magenta"/>
<br/>
<Header appName="Olive" color="olive"/>
<br/>
<Header appName="Purple" color="purple"/>
<br/>
<Header appName="Red" color="red"/>
<br/>
<Header appName="Sand" color="sand"/>
<br/>
<Header appName="Yellow" color="yellow"/>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx { "props": { "className": "contain-content" } }
<Header appName="Light" color="blue" shade="light"/>
<br/>
<Header appName="Default" color="blue"/>
<br/>
<Header appName="Dark" color="blue" shade="dark"/>
<br/>
<Header appName="Darker" color="blue" shade="darker"/>
```
