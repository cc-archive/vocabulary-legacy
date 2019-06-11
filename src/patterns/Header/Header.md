## Header opens the page.

The header displays information about the site such as its branding and name as
well as navigation links.

### Examples

The header has a standard layout and appearance.

```jsx
<Header/>
```

The name of the site and the set of navigation links can be passed to the header 
via props and they will customise the header according to the needs of the app.

```jsx
<Header 
  appName="Search"
  :navLinks="[{text: 'Page 1', href:'#1'}, {text: 'Page 2', href:'#2'}]"/> 
```

If the plain site naming doesn't appeal to you, you can simply swap out the 
whole branding slot with something that does. Use the class `name` on the text
to make use of the standard formatting.

Similarly the navigation links can also be replaced entirely by populating the 
navigation slot. To make use of the default formatting, the DOM structure of the 
links must be look like `nav` > `ul` > `li` > `a`. This is not recommended 
because your slot would have to manually handle mobile-responsiveness.

However you are free to use your own components and their own scoped styles.

```jsx
<Header>
  <template v-slot:branding>
    <span class="name">Site name</span>
  </template>
  <template v-slot:navigation>
    <nav>
      <ul>
        <li><a href="#1">Page 1</a></li><li><a href="#2">Page 2</a></li>
      </ul>
    </nav>
  </template>
</Header>
```

And one more thing... did we mention colors?

```jsx
<Header appName="Blue" gradientColor="blue"/>
<br/>
<Header appName="Green" gradientColor="green"/>
<br/>
<Header appName="Magenta" gradientColor="magenta"/>
<br/>
<Header appName="Olive" gradientColor="olive"/>
<br/>
<Header appName="Purple" gradientColor="purple"/>
<br/>
<Header appName="Red" gradientColor="red"/>
<br/>
<Header appName="Sand" gradientColor="sand"/>
<br/>
<Header appName="Yellow" gradientColor="yellow"/>
```
