A tabbed view looks and works like this.

```jsx
<Tabbed color="orange">
  <TabbedPane color="green">
    <template #tab>
      <LicenseBadge license="by"/>  
    </template>
    <template #default>
      <Heading 
        :level="4"
        indication="positive">
        Attribution<LicenseIconography :icon-list="['by']"/>
      </Heading>
      This license lets others distribute, remix, tweak, and build upon your work, even commercially, as long as they credit you for the original creation. This is the most accommodating of licenses offered. Recommended for maximum dissemination and use of licensed materials.
    </template> 
  </TabbedPane>
  <TabbedPane>
    <template #tab>
      <LicenseBadge license="by-sa"/>  
    </template>
    <template #default>
      <Heading
        color="orange"
        :level="4">
        Attribution ShareAlike<LicenseIconography :icon-list="['by', 'sa']"/>
      </Heading>
      This license lets others remix, tweak, and build upon your work even for commercial purposes, as long as they credit you and license their new creations under the identical terms. This license is often compared to “copyleft” free and open source software licenses. All new works based on yours will carry the same license, so any derivatives will also allow commercial use. This is the license used by Wikipedia, and is recommended for materials that would benefit from incorporating content from Wikipedia and similarly licensed projects.
    </template> 
  </TabbedPane>
  <TabbedPane>
    <template #tab>
      <LicenseBadge license="by-nd"/>  
    </template>
    <template #default>
      <Heading
        color="orange"
        :level="4">
        Attribution NoDerivs<LicenseIconography :icon-list="['by', 'nd']"/>
      </Heading>
      This license lets others reuse the work for any purpose, including commercially; however, it cannot be shared with others in adapted form, and credit must be provided to you.
    </template> 
  </TabbedPane>
  <TabbedPane>
    <template #tab>
      <LicenseBadge license="by-nc"/>  
    </template>
    <template #default>
      <Heading
        color="orange"
        :level="4">
        Attribution NonCommercial<LicenseIconography :icon-list="['by', 'nc']"/>
      </Heading>
      This license lets others remix, tweak, and build upon your work non-commercially, and although their new works must also acknowledge you and be non-commercial, they don’t have to license their derivative works on the same terms.
    </template>  
  </TabbedPane>
  <TabbedPane>
    <template #tab>
      <LicenseBadge license="by-nc-sa"/>  
    </template>
    <template #default>
      <Heading
        color="orange"
        :level="4">
        Attribution NonCommercial ShareAlike<LicenseIconography :icon-list="['by', 'nc', 'sa']"/>
      </Heading>
      This license lets others remix, tweak, and build upon your work non-commercially, as long as they credit you and license their new creations under the identical terms.
    </template>   
  </TabbedPane>
  <TabbedPane color="tomato">
    <template #tab>
      <LicenseBadge license="by-nc-nd"/>  
    </template>
    <template #default>
      <Heading 
        :level="4"
        indication="negative">
        Attribution NonCommercial NoDerivs<LicenseIconography :icon-list="['by', 'nc', 'nd']"/>
      </Heading>
        This license is the most restrictive of our six main licenses, only allowing others to download your works and share them with others as long as they credit you, but they can’t change them in any way or use them commercially.
    </template> 
  </TabbedPane>
</Tabbed>
```

### Color set

A tabbed view without a color specified is grey.

```jsx
<Tabbed>
  <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
  <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
  <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
</Tabbed>
```

Tabbed views can be colored using any color from the set provided by CC 
Vocabulary. Nobody likes to have just one color. Boring!

Also you may use one of the four shades, namely `lighter`, `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFillDrip, faSwatchbook } from '@fortawesome/free-solid-svg-icons'

library.add(faFillDrip, faSwatchbook);

let color = '';
let colorOptions = [
  { value: '', text: 'None' },
  { value: 'tomato', text: 'Tomato' },
  { value: 'gold', text: 'Gold' },
  { value: 'green', text: 'Green' },
  { value: 'blue', text: 'Blue' },
  { value: 'orange', text: 'Orange' },
  { value: 'turquoise', text: 'Turquoise' },
];

let shade = '';
let shadeOptions = [
  { value: '', text: 'Default' },
  { value: 'lighter', text: 'Lighter' },
  { value: 'light', text: 'Light' },
  { value: 'normal', text: 'Normal' },
  { value: 'dark', text: 'Dark' },
  { value: 'darker', text: 'Darker' }
];

<SelectField
  v-model="color"
  :color="color ? color : null"
  icon="fill-drip"
  :option-list="colorOptions"/>
<SelectField
  v-model="shade"
  :color="color ? color : null"
  :shade="shade ? shade : null"
  icon="swatchbook"
  :option-list="shadeOptions"
  :is-disabled="color === ''"/>
<br/>
<br/>
<Tabbed
  :color="color ? color : null"
  :shade="shade ? shade : null">
  <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
  <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
  <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
</Tabbed>
```

You can invert the tabbed view to create non-white backgrounds for content.

```jsx { "props": { "className": "dark-background" } }
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Tabbed is-inverted>
      <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
      <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
      <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
    </Tabbed>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <Tabbed
      color="turquoise"
      is-inverted>
      <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
      <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
      <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
    </Tabbed>
  </GridCell>
</Grid>
```

Do note that if the active pane has a color and shade specified, the tabbed pane
will adopt that color and shade for as long as it is active. The tabbed view's 
one color will act as a fallback for panes that do not specify color and shade.

```jsx
<Tabbed color="blue">
  <TabbedPane 
    title="Inherited Blue">
    I'm not colored.<br/>
    Guess I'll just be blue.
  </TabbedPane>
  <TabbedPane
    color="orange"
    title="Orange">
    I'm orange.<br/>
    So is the tabbed view now!
  </TabbedPane>
  <TabbedPane
    color="gold"
    title="Gold">
    I'm gold.<br/>
    So is the tabbed view now!
  </TabbedPane>
  <TabbedPane
    color="green" 
    title="Green">
    I'm green.<br/>
    So is the tabbed view now!
  </TabbedPane>
  <TabbedPane
    color="tomato" 
    title="Tomato">
    I'm tomato.<br/>
    So is the tabbed view now!
  </TabbedPane>
</Tabbed>
```

### Style set

A tabbed view can be set to look simplistic by getting rid of all borders except
separator and the accents. Or it can be set to look extremely simplistic by also
getting rid of the separator and the the accents.

```jsx
<Tabbed color="green" simplicity="slight">
  <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
  <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
  <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
</Tabbed>
<br/>
<Tabbed color="green" simplicity="extreme">
  <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
  <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
  <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
</Tabbed>
```

A tabbed view can take on a slightly more curved look instead of the usual 90° 
sharp cuts.

```jsx
<Tabbed color="green" is-rounded>
  <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
  <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
  <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
</Tabbed>
```

A tabbed view can be raised to look elevated above its surroundings.

```jsx
<Tabbed color="green" is-raised>
  <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
  <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
  <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
</Tabbed>
```

Styles can be combined.

### Add-on set

Refer to [TabbedPane](#/Layouts/TabbedPane).
