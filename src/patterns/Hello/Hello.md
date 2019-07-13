## Examples

Without any customisation, we see the CC wordmark, the project title and a 
randomly chosen welcoming tagline from a predefined set.

```jsx { "props": { "className": "i18n-enabled" } }
<Hello/>
```

### Style set

The logo at the top can be one of three variants, or can be hidden altogether.

```jsx
<Grid>
  <GridCell :spanSet="[12, 4, 4]">
    <Hello logoType="wordmark">&nbsp;</Hello>
  </GridCell>
  <GridCell :spanSet="[12, 4, 4]">
    <Hello logoType="lettermark">&nbsp;</Hello>
  </GridCell>
  <GridCell :spanSet="[12, 4, 4]">
    <Hello logoType="letterheart">&nbsp;</Hello>
  </GridCell>
</Grid>
```

### Add-on set

The textual content can be overwritten using the props `heading` and `tagline`
Passing these props removes the random functionality. Note that the Creative 
Commons logo might look a tad bit weird with unrelated text underneath it, so 
it should be turned off in those situations.

```jsx
<Hello 
  heading="Reality can be whatever I want." 
  tagline="— Thanos"
  logoType="none"/>
```

If you hate the idea of having just heading and tagline text as you can use the 
default slot to insert any content you want. Note that using the slot means
that the `heading` and `tagline` props become moot.

```jsx
<Hello>
  <Heading :level="5">Hello from CC Summit 2019!</Heading>
  <img src="https://live.staticflickr.com/65535/47788052912_62df647c48_z_d.jpg"/>
  <p>
    Photo by 
    <a href="https://www.flickr.com/photos/ter-burg/47788052912/in/album-72157708410802765/">
      Sebastiaan ter Burg, CC BY
    </a>
  </p>
</Hello>
``` 

### Color set

There is an inverted version that inverts the logo as well as text color.
This is intended for placement on dark or non-white backgrounds.

```jsx { "props": { "className": "i18n-enabled dark-background" } } 
<Hello is-inverted/>
```
