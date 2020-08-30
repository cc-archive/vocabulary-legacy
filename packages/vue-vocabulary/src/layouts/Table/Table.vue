<template>
  <table class="vocab table" :class="tableClasses">
    <caption
      v-if="caption"
      class="caption">
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

  import Branded from '@/mixins/branded'
  import Colored from '@/mixins/colored'
  import Simplified from '@/mixins/simplified'

  import Invertible from '@/mixins/invertible'

  /**
   * ### Tables show related data meaningfully.
   *
   * Tables render lots of related data in two dimensions using a grid of rows
   * and columns.
   */
  export default {
    name: 'Table',
    components: { TableCell },
    mixins: [
      Branded,
      Colored,
      Simplified,

      Invertible
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
       * _the caption for the table_
       */
      caption: {
        type: String
      },
      /**
       * _the list of borders to draw on the table_
       *
       * ⊂ {`'column'`, `'row'`, `'edge'`}
       */
      borderList: {
        type: Array,
        default: () => []
      },
      /**
       * _whether to tint alternate rows_
       *
       * This makes rows easier to follow in case of large data sets.
       */
      isStriped: {
        type: Boolean,
        default: false
      },
      /**
       * _whether to highlight the row that has mouseover_
       *
       * This colors the row that current has a mouse over it.
       */
      isFollowing: {
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
       *
       * This replaces the default behaviour which is to have 100% width.
       */
      isCompact: {
        type: Boolean,
        default: false
      },
      /**
       * _whether to have curvature on the vertices of the component_
       */
      isRounded: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      tableClasses: function () {
        return [
          ...this.brandedClasses,
          ...this.coloredClasses,
          ...this.simplifiedClasses,

          ...this.invertibleClasses,

          ...this.borderList.map(aspect => `${aspect}-bordered`),
          {
            'striped': this.isStriped,
            'fixed': this.isFixed,
            'compact': this.isCompact,
            'following': this.isFollowing,
            'rounded': this.isRounded
          }
        ]
      },

      hasCols: function () {
        return this.$slots.cols
      },
      hasHead: function () {
        return this.$slots.head || this.information.head
      },
      hasBody: function () {
        return this.$slots.default || this.information.body
      },
      hasFoot: function () {
        return this.$slots.foot || this.information.foot
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
