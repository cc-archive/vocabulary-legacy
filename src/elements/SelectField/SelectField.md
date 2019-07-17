## Examples

A dropdown looks like this.

```jsx
<SelectField
  icon="vote-yea"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
```

### Color set

A dropdown unless colored is grey.

```jsx
<SelectField
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
```

Looks quite drab, we know. So they can be colored with any color from the set 
provided by CC Vocabulary.

```jsx
<SelectField
  color="blue"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
<br/><br/>
<SelectField
  color="green"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
<br/><br/>
<SelectField
  color="magenta"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
<br/><br/>
<SelectField
  color="olive"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
<br/><br/>
<SelectField
  color="orange"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
<br/><br/>
<SelectField
  color="purple"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
<br/><br/>
<SelectField
  color="red"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
<br/><br/>
<SelectField
  color="sand"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
<br/><br/>
<SelectField
  color="yellow"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
<br/><br/>
``` 

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<SelectField
  color="blue"
  shade="light"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
<br/><br/>
<SelectField
  color="blue"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
<br/><br/>
<SelectField
  color="blue"
  shade="dark"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
<br/><br/>
<SelectField
  color="blue"
  shade="darker"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
<br/><br/>
```

### Add-on set

A dropdown can contain an icon to act as a visual aid as to what the choice is 
about. Note that the icon must be added to the FontAwesome library by the 
application.

```jsx
<SelectField
  color="magenta"
  icon="vote-yea"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
```

If you'd like your own something there, you can override the add-on slot with 
something you like. This is not very flexible as there is a `1.25em` width limit
by default. To increase the limit, increase the value of padding-left on the 
field.

```css
.vocab.select > .field {
    padding-left: <new space>;
}
```

```jsx
<SelectField
  color="magenta"
  :optionList="[{value: 'by', text: 'CC BY'}, {value: 'oth', text: 'Other license'}]">
  <template v-slot:addons>
    <LicenseIconography :iconList="['']"/>
  </template>
</Dropdown>
```

### Style set

A dropdown can be defined to not attract attention, unless given attention via 
means of a hover.

```jsx
<SelectField
  color="red"
  icon="vote-yea"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"
  is-basic/>
```


### Size set

Dropdowns come in all sizes, from small to mega.

```jsx { "props": { "className": "contain-content" } }
<SelectField
  color="purple"
  size="small"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
<br/><br/>
<SelectField
  color="purple"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
<br/><br/>
<SelectField
  color="purple"
  size="big"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
<br/><br/>
<SelectField
  color="purple"
  size="large"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
<br/><br/>
<SelectField
  color="purple"
  size="huge"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
<br/><br/>
<SelectField
  color="purple"
  size="enormous"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
<br/><br/>
<SelectField
  color="purple"
  size="gigantic"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
<br/><br/>
<SelectField
  color="purple"
  size="mega"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
```

### Indication set

A dropdown may indicate a negative or positive choice. For example, in this case
deleting permanently is a destructive action whereas restoring to safety is not.
The dropdown changes color to reflect this.

```jsx
let value = 'del'
<SelectField
  :optionList="[{value: 'del', text: 'Delete permanently'}, {value: 'res', text: 'Restore to safety'}]"
  :indication="value === 'res' ? 'positive' : 'negative'"
  v-model="value"/>
```

### State set

A dropdown may be disabled to prevent input altogether.

```jsx
<SelectField
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"
  is-disabled/>
```

### Attributes

All attributes that you could pass to an `select` tag can be passed to the 
`Dropdown` component.

So a dropdown may have a `name` and a `value`.

```jsx
<SelectField
  name="Name"
  value="b"
  :optionList="[{value: 'a', text: 'Option A'}, {value: 'b', text: 'Option B'}]"/>
```
