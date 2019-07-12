<template>
  <table class="vocab table" :class="tableClasses">
    <caption v-if="caption" class="caption">
      {{ caption }}
    </caption>

    <colgroup v-if="hasCols" class="cols">
      <!-- @slot Table columns go here -->
      <slot name="cols"/>
    </colgroup>

    <thead v-if="hasHead" class="head">
    <!-- @slot Table header goes here -->
    <slot name="head">
      <tr>
        <TableCell
          v-for="(key, index) in keys"
          :key="index"
          is-heading>
          {{ information.head[key].display }}
        </TableCell>
      </tr>
    </slot>
    </thead>

    <tbody v-if="hasBody" class="body">
    <!-- @slot Content goes here -->
    <slot>
      <tr
        v-for="(entry, counter) in information.body"
        :key="counter">
        <TableCell
          v-for="(key, index) in keys"
          :key="index"
          :label="`${information.head[key].display }:`"
          :is-heading="information.head[key].isHeading">
          {{ entry[key] }}
        </TableCell>
      </tr>
    </slot>
    </tbody>

    <tfoot v-if="hasFoot" class="foot">
    <!-- @slot Table footer goes here -->
    <slot name="foot">
      <tr
        v-for="(entry, counter) in information.foot"
        :key="counter">
        <TableCell
          v-for="(key, index) in keys"
          :key="index"
          :label="`${information.head[key].display }:`"
          :is-heading="information.head[key].isHeading">
          {{ entry[key] }}
        </TableCell>
      </tr>
    </slot>
    </tfoot>
  </table>
</template>

<script>
  import TableCell from '@/layouts/Table/TableCell'

  import Invertible from '@/mixins/invertible'
  import Colorable from '@/mixins/colorable'
  import Basicable from '@/mixins/basicable'

  /**
   * ## Tables show related data meaningfully.
   *
   * Tables render lots of related data in two dimensions using a grid of rows
   * and columns.
   */
  export default {
    name: 'Table',
    components: { TableCell },
    mixins: [
      Invertible,
      Colorable,
      Basicable
    ],
    props: {
      /**
       * _the data to render in the table_
       *
       * This can be skipped and slots can be used to populate the table.
       */
      information: {
        type: Object,
        default: () => ({})
      },
      /**
       * _whether to draw borders on all four sides of the table_
       */
      isBoxed: {
        type: Boolean,
        default: false
      },
      /**
       * _whether to draw borders on both sides of a row_
       */
      isSliced: {
        type: Boolean,
        default: false
      },
      /**
       * _whether to draw borders on both sides of a cell_
       */
      isCelled: {
        type: Boolean,
        default: false
      },
      /**
       * _whether to tint alternate rows_
       */
      isStriped: {
        type: Boolean,
        default: false
      },
      /**
       * _whether to use the fixed table-layout algorithm_
       *
       * This allocates the specified space to columns which define it and
       * distributes the remaining space equally amongst the rest.
       */
      isFixed: {
        type: Boolean,
        default: false
      },
      /**
       * _whether to limit width to what is necessary_
       */
      isCompact: {
        type: Boolean,
        default: false
      },
      /**
       * _whether to highlight the row that has mouseover_
       */
      isFollowing: {
        type: Boolean,
        default: false
      },
      /**
       * _the caption for the table_
       */
      caption: {
        type: String
      }
    },
    computed: {
      tableClasses: function () {
        return [
          this.color,
          this.shade,
          {
            'boxed': this.isBoxed,
            'sliced': this.isSliced,
            'celled': this.isCelled,
            'striped': this.isStriped,
            'fixed': this.isFixed,
            'basic': this.isBasic,
            'compact': this.isCompact,
            'following': this.isFollowing,
            'inverted': this.isInverted,
            'information-powered': this.isInformationPowered
          }
        ]
      },
      hasCols: function () {
        return this.$slots.cols
      },
      hasHead: function () {
        return this.$slots.head || this.isInformationPowered
      },
      hasBody: function () {
        return this.$slots.default || this.isInformationPowered
      },
      hasFoot: function () {
        return this.$slots.foot || this.information.foot
      },
      isInformationPowered: function () {
        return this.information.head && this.information.body
      },
      keys: function () {
        if (this.information && this.information.head) {
          return Object.keys(this.information.head)
        } else {
          return []
        }
      }
    }
  }
</script>

<style lang="stylus" src="./Table.styl">
</style>
