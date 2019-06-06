## Hello greets visitors.

Visitors coming to meet CC Vocabulary are greeted with a friendly message chosen
at random from a predefined list of messages or a custom one.

### Examples

Without any customisation, we see the CC wordmark, the project title and a 
randomly chosen welcoming tagline from a predefined set.

```jsx
<Hello/>
```

The logo at the top can be one of three variants (or none at all):
- wordmark
- lettermark
- letterheart

```jsx
<Hello logoType="letterheart"/>
```

These texts can be overwritten by passing the `heading` and `tagline` prop to 
the component. Passing these props removes the random functionality. Note that
the Creative Commons logo might look a tad bit weird with unrelated text 
underneath it, so it can be turned off as well.

```jsx
<Hello heading="Reality can be whatever I want." 
       tagline="— Thanos"
       logoType="none"/>
```

If you hate the idea of a tagline, you can use the default `slot` to insert any 
content you want. Note that using the slot replaces the tagline.

```jsx
<Hello heading="Hello from CC Summit 2019!" tagline="This is irrelevant">
  <img src="https://live.staticflickr.com/65535/47788052912_62df647c48_z_d.jpg"/>
  <p>
    Photo by 
    <a href="https://www.flickr.com/photos/ter-burg/47788052912/in/album-72157708410802765/">
      Sebastiaan ter Burg, CC BY
    </a>
  </p> 
</Hello>
``` 


There is also an inverted version that inverts the logo as well as text colour.
This is intended for placement on dark or non-white backgrounds.

```jsx { "props": { "className": "dark-background" } } 
<Hello inverted/>
```
