import Grid from '@/layouts/Grid/Grid'
import GridCell from '@/layouts/Grid/GridCell'

import { select } from '@storybook/addon-knobs'

export default { title: 'Layouts|Grid' }

export const concept = () => ({
  components: { Grid, GridCell },
  template: `
    <Grid>
      <GridCell
        v-for="index in 12"
        :key="index"
        style="backgroundColor: #1864ab; color: white; padding: 0.125em;"
        :span-set="[1, 1]">
        {{ index }}
      </GridCell>
    </Grid>
  `
})

export const densities = () => ({
  components: { Grid, GridCell },
  props: {
    density: {
      default: select(
        'Density',
        {
          Full: 'full',
          Denser: 'denser',
          Dense: 'dense',
          Normal: 'normal',
          Sparse: 'sparse',
          Sparser: 'sparser'
        },
        'normal'
      )
    }
  },
  template: `
    <Grid :density="density">
      <GridCell
        v-for="index in 2"
        :key="index"
        style="backgroundColor: #1864ab; color: white; padding: 0.125em;"
        :span-set="[12, 6]">
        {{ index }}
      </GridCell>
    </Grid>
  `
})
