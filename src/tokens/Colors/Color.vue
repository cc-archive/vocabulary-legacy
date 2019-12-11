<template>
  <Card
    class="vocab color"
    :heading="properSubcategory"
    is-raised>
    <Table is-fixed>
      <template #head>
        <tr>
          <TableCell is-heading>
            Demo
          </TableCell>
          <TableCell is-heading>
            Value
          </TableCell>
          <TableCell is-heading>
            Style name
          </TableCell>
        </tr>
      </template>
      <tr
        v-for="(color, index) in sortedColors"
        :key="index">
        <TableCell
          class="swatch"
          :style="swatchStyles(color)">
        </TableCell>
        <TableCell>
          <code>{{ color.value }}</code>
        </TableCell>
        <TableCell>
          <code>${{ styleName(color) }}</code>
        </TableCell>
      </tr>
    </Table>
  </Card>
</template>

<script>
  import startCase from 'lodash/startCase'
  import sortBy from 'lodash/sortBy'

  import Card from '@/patterns/Card/Card'
  import Table from '@/layouts/Table/Table'
  import TableCell from '@/layouts/Table/TableCell'

  export default {
    name: 'Color',
    components: {
      Card,
      Table,
      TableCell
    },
    data: function () {
      return {}
    },
    props: {
      /**
       * _the category of the color being showcased_
       */
      category: {
        type: String,
        required: true
      },
      /**
       * _the subcategory of the colours being showcased_
       */
      subcategory: {
        type: String,
        required: true
      },
      /**
       * _the list of colors being showcased_
       */
      colors: {
        type: Array,
        required: true
      }
    },
    computed: {
      /**
       * the sorted list of colors being showcased_
       */
      sortedColors: function () {
        return sortBy(this.colors, ['name'])
      },
      /**
       * the capitalised name to show to the viewer
       */
      properSubcategory: function () {
        return startCase(this.subcategory)
      }
    },
    methods: {
      /**
       * the JSS style dictionary to apply to the swatch
       */
      swatchStyles: function (color) {
        let styleDict = {}
        if (this.category !== 'overlay') {
          styleDict.backgroundColor = color.value
        } else {
          styleDict.backgroundColor = 'rgb(0, 38, 77)'
          styleDict.backgroundImage = 'linear-gradient(' +
            '90deg,' +
            `transparent 50%, ` +
            `${color.value} 50%` +
            ')'
        }
        return styleDict
      },
      /**
       * the stylesheet variable name for this color
       */
      styleName: function (color) {
        return color.name.replace(/_/g, '-')
      }
    }
  }
</script>

<style lang="stylus" src="./Color.styl">
</style>
