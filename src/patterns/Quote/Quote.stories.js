import Quote from '@/patterns/Quote/Quote'
import Grid from '@/layouts/Grid/Grid'
import GridCell from '@/layouts/Grid/GridCell'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'

import Invertible from '@/knobs/invertible'

import { boolean } from '@storybook/addon-knobs'

export default { title: 'Patterns|Quote' }

export const branded = () => ({
  mixins: [Branded],
  components: { Quote },
  template: `
    <Quote :brand="brand" attribution="Douglas Adams">
      A common mistake that people make when trying<br/>
      to design something completely foolproof is<br/>
      to underestimate the ingenuity of complete fools.
    </Quote>
  `
})

export const colored = () => ({
  mixins: [Colored],
  components: { Quote },
  template: `
    <Quote :color="color" attribution="Douglas Adams">
      A common mistake that people make when trying<br/>
      to design something completely foolproof is<br/>
      to underestimate the ingenuity of complete fools.
    </Quote>
  `
})

export const invertible = () => ({
  mixins: [Invertible],
  components: { Quote },
  template: `
    <Quote :is-inverted="isInverted" attribution="Douglas Adams">
      A common mistake that people make when trying<br/>
      to design something completely foolproof is<br/>
      to underestimate the ingenuity of complete fools.
    </Quote>
  `
})
invertible.story = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }]
  }
}

export const lineable = () => ({
  components: { Quote },
  props: {
    isLined: {
      default: () => boolean('Is lined?', true)
    }
  },
  template: `
    <Quote :is-lined="isLined" attribution="Douglas Adams">
      A common mistake that people make when trying<br/>
      to design something completely foolproof is<br/>
      to underestimate the ingenuity of complete fools.
    </Quote>
  `
})

export const analectable = () => ({
  components: { Quote, Grid, GridCell },
  props: {
    isAnalected: {
      default: () => boolean('Is analected?', true)
    }
  },
  template: `
    <Grid>
      <GridCell :span-set="[12, 6, 6, 6, 6]">
        <Quote attribution="The Bhagvad Gita" is-lined>
          Delusion arises from anger.<br/>
          The mind is bewildered by delusion.<br/>
          Reasoning is destroyed when the mind is bewildered.<br/>
          One falls down when reasoning is destroyed.
        </Quote>
      </GridCell>

      <GridCell :span-set="[12, 6, 6, 6, 6]">
        <Quote attribution="The Bhagvad Gita" is-lined :is-analected="isAnalected">
          Set thy heart upon thy work but never its reward.
        </Quote>
      </GridCell>
    </Grid>
  `
})
