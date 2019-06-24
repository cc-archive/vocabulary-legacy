## Header opens the page.

The header displays information about the site such as its branding and name as
well as navigation links.

### Examples

The header has a standard layout and appearance.

```jsx
<Header/>
```

The name of the site and the URL to which the branding points can be passed to 
the header via props.

```jsx
<Header appName="Search" homeLink="https://creativecommons.org/"> 
```

If the plain site naming doesn't appeal to you, you can simply swap out the 
whole branding slot with something that does. Use the class `name` on the text
to make use of the standard formatting.

However you are free to use your own components and their own scoped styles.

```jsx
<Header>
  <template v-slot:branding>
    <span class="name">Site name</span>
  </template>
</Header>
```

In case you want to display some content in the header, you can add it to the 
default slot and it will be placed toward the right side.

```jsx
<Header 
  appName="Search" 
  gradientColor="blue">
  <input type="text" placeholder="Search..."/>
  <Navigation 
    inverted
    :links="[{text: 'About', href:'#1'}, {text: 'Browse', href:'#2'}, {text: 'Feedback', href:'#3'}]"/>
</Header>
```

And one more thing... did we mention colors?

```jsx
<Header appName="Blue" gradientColor="blue">
  <Navigation
    inverted 
    :links="[{text: 'Link 1', href: '#2'}, {text: 'Link 2', href: '#2'}]"/>
</Header>
<br/>
<Header appName="Green" gradientColor="green">
  <Navigation
    inverted 
    :links="[{text: 'Link 1', href: '#2'}, {text: 'Link 2', href: '#2'}]"/>
</Header>
<br/>
<Header appName="Magenta" gradientColor="magenta">
  <Navigation
    inverted 
    :links="[{text: 'Link 1', href: '#2'}, {text: 'Link 2', href: '#2'}]"/>
</Header>
<br/>
<Header appName="Olive" gradientColor="olive">
  <Navigation
    inverted 
    :links="[{text: 'Link 1', href: '#2'}, {text: 'Link 2', href: '#2'}]"/>
</Header>
<br/>
<Header appName="Purple" gradientColor="purple">
  <Navigation
    inverted 
    :links="[{text: 'Link 1', href: '#2'}, {text: 'Link 2', href: '#2'}]"/>
</Header>
<br/>
<Header appName="Red" gradientColor="red">
  <Navigation
    inverted 
    :links="[{text: 'Link 1', href: '#2'}, {text: 'Link 2', href: '#2'}]"/>
</Header>
<br/>
<Header appName="Sand" gradientColor="sand">
  <Navigation
    inverted 
    :links="[{text: 'Link 1', href: '#2'}, {text: 'Link 2', href: '#2'}]"/>
</Header>
<br/>
<Header appName="Yellow" gradientColor="yellow">
  <Navigation
    inverted 
    :links="[{text: 'Link 1', href: '#2'}, {text: 'Link 2', href: '#2'}]"/>
</Header>
```
