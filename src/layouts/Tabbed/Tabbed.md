## Examples

A tabbed view looks like this.

```jsx
<Tabbed color="orange">
  <TabbedPane>
    <template v-slot:tab>
      <LicenseBadge license="by"/>  
    </template>
    <Heading :level="4" color="orange">
      Attribution<LicenseIconography :iconList="['by']"/>
    </Heading>
    This license lets others distribute, remix, tweak, and build upon your work, even commercially, as long as they credit you for the original creation. This is the most accommodating of licenses offered. Recommended for maximum dissemination and use of licensed materials. 
  </TabbedPane>
  <TabbedPane>
    <template v-slot:tab>
      <LicenseBadge license="by-sa"/>  
    </template>
    <Heading :level="4" color="orange">
      Attribution ShareAlike<LicenseIconography :iconList="['by', 'sa']"/>
    </Heading>
    This license lets others remix, tweak, and build upon your work even for commercial purposes, as long as they credit you and license their new creations under the identical terms. This license is often compared to “copyleft” free and open source software licenses. All new works based on yours will carry the same license, so any derivatives will also allow commercial use. This is the license used by Wikipedia, and is recommended for materials that would benefit from incorporating content from Wikipedia and similarly licensed projects. 
  </TabbedPane>
  <TabbedPane>
    <template v-slot:tab>
      <LicenseBadge license="by-nd"/>  
    </template>
    <Heading :level="4" color="orange">
      Attribution NoDerivs<LicenseIconography :iconList="['by', 'nd']"/>
    </Heading>
    This license lets others reuse the work for any purpose, including commercially; however, it cannot be shared with others in adapted form, and credit must be provided to you. 
  </TabbedPane>
  <TabbedPane>
    <template v-slot:tab>
      <LicenseBadge license="by-nc"/>  
    </template>
    <Heading :level="4" color="orange">
      Attribution NonCommercial<LicenseIconography :iconList="['by', 'nc']"/>
    </Heading>
    This license lets others remix, tweak, and build upon your work non-commercially, and although their new works must also acknowledge you and be non-commercial, they don’t have to license their derivative works on the same terms.  
  </TabbedPane>
  <TabbedPane>
    <template v-slot:tab>
      <LicenseBadge license="by-nc-sa"/>  
    </template>
    <Heading :level="4" color="orange">
      Attribution NonCommercial ShareAlike<LicenseIconography :iconList="['by', 'nc', 'sa']"/>
    </Heading>
    This license lets others remix, tweak, and build upon your work non-commercially, as long as they credit you and license their new creations under the identical terms.   
  </TabbedPane>
  <TabbedPane>
    <template v-slot:tab>
      <LicenseBadge license="by-nc-nd"/>  
    </template>
    <Heading :level="4" color="orange">
      Attribution NonCommercial NoDerivs<LicenseIconography :iconList="['by', 'nc', 'nd']"/>
    </Heading>
      This license is the most restrictive of our six main licenses, only allowing others to download your works and share them with others as long as they credit you, but they can’t change them in any way or use them commercially. 
  </TabbedPane>
</Tabbed>
```

### Color set

A tabbed view without a color specified is black.

```jsx
<Tabbed>
  <TabbedPane title="Tab 1">
    This is the first tab.
  </TabbedPane>
  <TabbedPane title="Tab 2">
    This is the second tab.
  </TabbedPane>
  <TabbedPane title="Tab 3">
    This is the third tab.
  </TabbedPane>
</Tabbed>
```

Tabbed views can be colored using any color from the set provided by CC 
Vocabulary. Nobody likes to have just one color. Boring!

```jsx
<Tabbed color="blue">
  <TabbedPane title="Tab 1">
    This is the first tab.
  </TabbedPane>
  <TabbedPane title="Tab 2">
    This is the second tab.
  </TabbedPane>
  <TabbedPane title="Tab 3">
    This is the third tab.
  </TabbedPane>
</Tabbed>
<br/>
<Tabbed color="green">
  <TabbedPane title="Tab 1">
    This is the first tab.
  </TabbedPane>
  <TabbedPane title="Tab 2">
    This is the second tab.
  </TabbedPane>
  <TabbedPane title="Tab 3">
    This is the third tab.
  </TabbedPane>
</Tabbed>
<br/>
<Tabbed color="magenta">
  <TabbedPane title="Tab 1">
    This is the first tab.
  </TabbedPane>
  <TabbedPane title="Tab 2">
    This is the second tab.
  </TabbedPane>
  <TabbedPane title="Tab 3">
    This is the third tab.
  </TabbedPane>
</Tabbed>
<br/>
<Tabbed color="olive">
  <TabbedPane title="Tab 1">
    This is the first tab.
  </TabbedPane>
  <TabbedPane title="Tab 2">
    This is the second tab.
  </TabbedPane>
  <TabbedPane title="Tab 3">
    This is the third tab.
  </TabbedPane>
</Tabbed>
<br/>
<Tabbed color="orange">
  <TabbedPane title="Tab 1">
    This is the first tab.
  </TabbedPane>
  <TabbedPane title="Tab 2">
    This is the second tab.
  </TabbedPane>
  <TabbedPane title="Tab 3">
    This is the third tab.
  </TabbedPane>
</Tabbed>
<br/>
<Tabbed color="purple">
  <TabbedPane title="Tab 1">
    This is the first tab.
  </TabbedPane>
  <TabbedPane title="Tab 2">
    This is the second tab.
  </TabbedPane>
  <TabbedPane title="Tab 3">
    This is the third tab.
  </TabbedPane>
</Tabbed>
<br/>
<Tabbed color="red">
  <TabbedPane title="Tab 1">
    This is the first tab.
  </TabbedPane>
  <TabbedPane title="Tab 2">
    This is the second tab.
  </TabbedPane>
  <TabbedPane title="Tab 3">
    This is the third tab.
  </TabbedPane>
</Tabbed>
<br/>
<Tabbed color="sand">
  <TabbedPane title="Tab 1">
    This is the first tab.
  </TabbedPane>
  <TabbedPane title="Tab 2">
    This is the second tab.
  </TabbedPane>
  <TabbedPane title="Tab 3">
    This is the third tab.
  </TabbedPane>
</Tabbed>
<br/>
<Tabbed color="yellow">
  <TabbedPane title="Tab 1">
    This is the first tab.
  </TabbedPane>
  <TabbedPane title="Tab 2">
    This is the second tab.
  </TabbedPane>
  <TabbedPane title="Tab 3">
    This is the third tab.
  </TabbedPane>
</Tabbed>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Tabbed color="blue" shade="light">
  <TabbedPane title="Tab 1">
    This is the first tab.
  </TabbedPane>
  <TabbedPane title="Tab 2">
    This is the second tab.
  </TabbedPane>
  <TabbedPane title="Tab 3">
    This is the third tab.
  </TabbedPane>
</Tabbed>
<br/>
<Tabbed color="blue">
  <TabbedPane title="Tab 1">
    This is the first tab.
  </TabbedPane>
  <TabbedPane title="Tab 2">
    This is the second tab.
  </TabbedPane>
  <TabbedPane title="Tab 3">
    This is the third tab.
  </TabbedPane>
</Tabbed>
<br/>
<Tabbed color="blue" shade="dark">
  <TabbedPane title="Tab 1">
    This is the first tab.
  </TabbedPane>
  <TabbedPane title="Tab 2">
    This is the second tab.
  </TabbedPane>
  <TabbedPane title="Tab 3">
    This is the third tab.
  </TabbedPane>
</Tabbed>
<br/>
<Tabbed color="blue" shade="darker">
  <TabbedPane title="Tab 1">
    This is the first tab.
  </TabbedPane>
  <TabbedPane title="Tab 2">
    This is the second tab.
  </TabbedPane>
  <TabbedPane title="Tab 3">
    This is the third tab.
  </TabbedPane>
</Tabbed>
```

You can invert the tabbed view to create non-white backgrounds for content.

```jsx { "props": { "className": "dark-background" } }
<Tabbed is-inverted>
  <TabbedPane title="Tab 1">
    <Paragraph is-inverted>This is the first tab.</Paragraph>
  </TabbedPane>
  <TabbedPane title="Tab 2">
    <Paragraph is-inverted>This is the second tab.</Paragraph>
  </TabbedPane>
  <TabbedPane title="Tab 3">
    <Paragraph is-inverted>This is the third tab.</Paragraph>
  </TabbedPane>
</Tabbed>
<br/>
<Tabbed color="magenta" shade="darker" is-inverted>
  <TabbedPane title="Tab 1">
    <Paragraph is-inverted>This is the first tab.</Paragraph>
  </TabbedPane>
  <TabbedPane title="Tab 2">
    <Paragraph is-inverted>This is the second tab.</Paragraph>
  </TabbedPane>
  <TabbedPane title="Tab 3">
    <Paragraph is-inverted>This is the third tab.</Paragraph>
  </TabbedPane>
</Tabbed>
```

### Style set

A tabbed view can be set to look very simplistic by getting rid of all borders.

```jsx
<Tabbed is-basic>
  <TabbedPane title="Tab 1">
    This is the first tab.
  </TabbedPane>
  <TabbedPane title="Tab 2">
    This is the second tab.
  </TabbedPane>
  <TabbedPane title="Tab 3">
    This is the third tab.
  </TabbedPane>
</Tabbed>
```

A tabbed view can be raised to look elevated above its surroundings.

```jsx
<Tabbed is-raised>
  <TabbedPane title="Tab 1">
    This is the first tab.
  </TabbedPane>
  <TabbedPane title="Tab 2">
    This is the second tab.
  </TabbedPane>
  <TabbedPane title="Tab 3">
    This is the third tab.
  </TabbedPane>
</Tabbed>
```

A tabbed view can take on a slightly more curved look instead of the usual 90° 
sharp cuts.

```jsx
<Tabbed is-rounded>
  <TabbedPane title="Tab 1">
    This is the first tab.
  </TabbedPane>
  <TabbedPane title="Tab 2">
    This is the second tab.
  </TabbedPane>
  <TabbedPane title="Tab 3">
    This is the third tab.
  </TabbedPane>
</Tabbed>
```

Styles can be combined.
