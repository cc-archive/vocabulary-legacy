import Grid from '@/layouts/Grid/Grid'
import GridCell from '@/layouts/Grid/GridCell'
import { number } from '@storybook/addon-knobs'

export default { title: 'Layouts|GridCell' }

export const concept = () => ({
  components: { Grid, GridCell },
  template: `
    <Grid>
      <GridCell
        v-for="index in 12"
        :key="index"
        style="backgroundColor: #1864ab; color: white; padding: 0.125em;"
        :span-set="[12, 6, 4, 3, 2]">
        {{ index }}
      </GridCell>
    </Grid>
  `
})

export const spans = () => ({
  components: { Grid, GridCell },
  props: {
    span: {
      default: number('Span', 1, {
        range: true,
        min: 1,
        max: 11,
        step: 1
      })
    }
  },
  template: `
    <Grid>
      <GridCell
        style="backgroundColor: #1864ab; color: white; padding: 0.125em;"
        :span-set="[span, span]">
        {{ span }}
      </GridCell>
      <GridCell
        style="backgroundColor: #c92a2a; color: white; padding: 0.125em;"
        :span-set="[12 - span, 12 - span]">
        {{ 12 - span }}
      </GridCell>
    </Grid>
  `
})
