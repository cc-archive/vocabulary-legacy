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
  <TabbedPane color="red">
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

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Tabbed color="blue">
      <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
      <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
      <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
    </Tabbed>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Tabbed color="green">
      <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
      <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
      <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
    </Tabbed>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Tabbed color="magenta">
      <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
      <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
      <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
    </Tabbed>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Tabbed color="olive">
      <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
      <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
      <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
    </Tabbed>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Tabbed color="orange">
      <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
      <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
      <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
    </Tabbed>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Tabbed color="purple">
      <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
      <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
      <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
    </Tabbed>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Tabbed color="red">
      <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
      <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
      <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
    </Tabbed>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Tabbed color="sand">
      <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
      <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
      <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
    </Tabbed>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <Tabbed color="yellow">
      <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
      <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
      <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
    </Tabbed>
  </GridCell>
</Grid>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Tabbed
      color="blue"
      shade="light">
      <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
      <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
      <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
    </Tabbed>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Tabbed color="blue">
      <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
      <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
      <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
    </Tabbed>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Tabbed
      color="blue"
      shade="dark">
      <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
      <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
      <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
    </Tabbed>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <Tabbed
      color="blue"
      shade="darker">
      <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
      <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
      <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
    </Tabbed>
  </GridCell>
</Grid>
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
      color="magenta"
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
<Tabbed color="purple">
  <TabbedPane 
    title="Inherited V">
    I'm not colored.<br/>
    Guess I'll just be violet.
  </TabbedPane>
  <TabbedPane
    color="blue"
    shade="dark"
    title="I">
    I'm indigo.<br/>
    So is the tabbed view now!
  </TabbedPane>
  <TabbedPane
    color="blue"
    title="B">
    I'm blue.<br/>
    So is the tabbed view now!
  </TabbedPane>
  <TabbedPane
    color="green" 
    title="G">
    I'm green.<br/>
    So is the tabbed view now!
  </TabbedPane>
  <TabbedPane
    color="yellow" 
    title="Y">
    I'm yellow.<br/>
    So is the tabbed view now!
  </TabbedPane>
  <TabbedPane
    color="orange" 
    title="O">
    I'm orange.<br/>
    So is the tabbed view now!
  </TabbedPane>
  <TabbedPane
    color="red" 
    title="R">
    I'm red.<br/>
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
<Tabbed color="purple" is-rounded>
  <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
  <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
  <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
</Tabbed>
```

A tabbed view can be raised to look elevated above its surroundings.

```jsx
<Tabbed color="magenta" is-raised>
  <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
  <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
  <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
</Tabbed>
```

Styles can be combined.

### Add-on set

Refer to [TabbedPane](#/Layouts/TabbedPane).
