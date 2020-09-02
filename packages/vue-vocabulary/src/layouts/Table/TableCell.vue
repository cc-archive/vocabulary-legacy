<template>
  <div
    :is="tag"
    class="cell"
    :class="cellClasses">
    <span class="label">
      {{ label }}
    </span>
    <!-- Content goes here -->
    <slot/>
  </div>
</template>

<script>
  import Indicating from '@/mixins/indicating'

  /**
   * ### Cells are the pillars of tables.
   *
   * A cell is the intersection of a row and a column and represents on unit of
   * data. A collection of cells forms a table.
   *
   * @see For example usage, see [Table](#/Layouts/Table).
   */
  export default {
    name: 'TableCell',
    mixins: [
      Indicating
    ],
    props: {
      /**
       * _the label for the content of the cell_
       */
      label: {
        type: String
      },
      /**
       * _whether the cell is of a heading type_
       *
       * This switches the component to the `th` tag instead of the default `td`
       * tag.
       */
      isHeading: {
        type: Boolean,
        default: false
      },
      /**
       * _whether the cell does something on click_
       */
      isActionable: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      cellClasses: function () {
        return [
          ...this.indicatingClasses,
          {
            actionable: this.isActionable
          }
        ]
      },

      tag: function () {
        return this.isHeading ? 'th' : 'td'
      }
    }
  }
</script>
