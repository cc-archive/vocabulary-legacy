import Card from '@/patterns/Card/Card'
import Grid from '@/layouts/Grid/Grid'
import GridCell from '@/layouts/Grid/GridCell'

import { boolean, text } from '@storybook/addon-knobs'

export default { title: 'Patterns|Card' }

const widthLimit = () => ({ template: `<div style="width: 15em;"><story/></div>` })

export const headed = () => ({
  components: { Card },
  props: {
    heading: {
      default: () => text('Heading', 'Vocabulary')
    },
    subheading: {
      default: () => text('Subheading', 'Creative Commons')
    }
  },
  template: `
    <Card :heading="heading" :subheading="subheading"/>
  `
})
headed.story = {
  decorators: [widthLimit]
}

export const featured = () => ({
  components: { Card },
  props: {
    featuredImageSource: {
      default: () => text('Image source', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Hummingbird.jpg/640px-Hummingbird.jpg')
    },
    featuredImageAlternateText: {
      default: () => text('Image alt text', 'Costa\'s hummingbird')
    }
  },
  template: `
    <Card
      :featured-image-source="featuredImageSource"
      :featured-image-alternate-text="featuredImageAlternateText"
      heading="Featured"/>
  `
})
featured.story = {
  decorators: [widthLimit]
}

export const decked = () => ({
  components: { Card, Grid, GridCell },
  props: {
    isDecked: {
      default: () => boolean('Is decked?', true)
    }
  },
  template: `
    <Grid>
      <GridCell :span-set="[12, 6, 6, 6, 6]">
        <Card>
          Delusion arises from anger.<br/>
          The mind is bewildered by delusion.<br/>
          Reasoning is destroyed when the mind is bewildered.<br/>
          One falls down when reasoning is destroyed.
          <template #foot>
            The Bhagvad Gita
          </template>
        </Card>
      </GridCell>

      <GridCell :span-set="[12, 6, 6, 6, 6]">
        <Card :is-decked="isDecked">
          Set thy heart upon thy work but never its reward.
          <template #foot>
            The Bhagvad Gita
          </template>
        </Card>
      </GridCell>
    </Grid>

  `
})
