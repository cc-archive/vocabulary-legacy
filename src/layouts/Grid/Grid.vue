<template>
  <div class="vocab grid" :class="gridClasses">
    <!-- @slot [`GridCell`](#/Layouts/GridCell) components go here -->
    <slot/>
  </div>
</template>

<script>
  /**
   * ### Grids organise content on a 2D surface.
   *
   * A grid is typically organised into rows and columns made up of cells of
   * equal size, which makes it different from a masonry layout where cells have
   * the same width but different heights based on their content.
   */
  export default {
    name: 'Grid',
    props: {
      /**
       * _whether the gutter space should be more or less than is default_
       *
       * ∈ {`'sparser'`, `'sparse'`, `'dense'`, `'denser'`, `'full'`}
       */
      density: {
        type: String,
        validator: val => [
          'sparser',
          'sparse',
          'dense',
          'denser',
          'full'
        ].includes(val)
      }
    },
    computed: {
      gridClasses: function () {
        return [
          this.density ? `${this.density}-packed` : ''
        ]
      }
    }
  }
</script>

<style lang="stylus" src="./Grid.styl">
</style>
