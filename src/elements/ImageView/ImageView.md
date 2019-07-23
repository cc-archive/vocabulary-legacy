## Examples

Here is some example images.

```jsx
let source = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/7weeks_old.JPG/1024px-7weeks_old.JPG";

<ImageView
  :source="source"
  alternateText="7 weeks old"
  title="7 weeks old"
  height="64"
  width="64"
  is-centered
  is-rounded/>
<br/><br/>
<ImageView
  :source="source"
  alternateText="7 weeks old"
  title="7 weeks old"
  height="128"
  width="128"
  is-centered
  is-rounded/>
<br/><br/>
<ImageView
  :source="source"
  alternateText="7 weeks old"
  title="7 weeks old"
  height="256"
  width="256"
  is-centered
  is-rounded/>
```

### Style set

An image can be vertically centered to sit well with text.

```jsx
let source = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/7weeks_old.JPG/1024px-7weeks_old.JPG";

<Heading color="green" shade="dark" :level="1">
  Who's a good boi?
</Heading>
<Paragraph>
  <ImageView 
    :source="source"
    alternateText="7 weeks old"
    size="big"
    is-centered/>:
  <em>*barks*</em> (I am!)
</Paragraph>
```

An image may be rounded off, as you would see in profile pictures for example.
Non-square images leave spaces around the sides when cropped, the solution being
to specify `height` and `width` attributes in pixels instead of the `size` prop.

```jsx
let dhruvSource = "https://avatars0.githubusercontent.com/u/16580576";
let pupperSource = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/7weeks_old.JPG/1024px-7weeks_old.JPG";

<ImageView
  :source="dhruvSource"
  alternateText="Dhruv Bhanushali"
  size="large"
  is-rounded/>
<ImageView
  :source="pupperSource"
  alternateText="7 weeks old"
  title="7 weeks old"
  height="128"
  width="128"
  is-rounded/>
```

Styles may be combined.

### Add-on set

An image may display information about it on hover. This information can be set
partly via the `title` prop and partly via the `topAddons` slot. Or you can go
all out and just populate the `bottomAddons` slot too.

```jsx
import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faImage, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.component('FontAwesomeIcon', FontAwesomeIcon); 

library.add(faImage, faUserCircle);

let source = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/7weeks_old.JPG/1024px-7weeks_old.JPG";

<ImageView
  :source="source"
  alternateText="7 weeks old"
  title="7 weeks old"
  size="huge"
  is-hoverable>
  <template v-slot:topAddons>
    <FontAwesomeIcon
      :icon="['fas', 'user-circle']"/>
    Bodlina
  </template>
  <template v-slot:bottomAddons>
    7 weeks old
    <LicenseIconography :iconList="['', 'by', 'sa']"/>
  </template>
<ImageView>
```

### Size set

Images come in all sizes, from small to mega.

```jsx { "props": { "className": "contain-content" } }
let source = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Mausoleo_de_Baha-ud-Din_Naqshbandi_07.jpg/768px-Mausoleo_de_Baha-ud-Din_Naqshbandi_07.jpg";

<ImageView
  :source="source"
  alternateText="Small"
  size="small"/>
<br/><br/>
<ImageView
  :source="source"
  alternateText="Normal"
  size="normal"/>
<br/><br/>
<ImageView
  :source="source"
  alternateText="Big"
  size="big"/>
<br/><br/>
<ImageView
  :source="source"
  alternateText="Large"
  size="large"/>
<br/><br/>
<ImageView
  :source="source"
  alternateText="Huge"
  size="huge"/>
<br/><br/>
<ImageView
  :source="source"
  alternateText="Enormous"
  size="enormous"/>
<br/><br/>
<ImageView
  :source="source"
  alternateText="Gigantic"
  size="gigantic"/>
<br/><br/>
<ImageView
  :source="source"
  alternateText="Mega"
  size="mega"/>
```
