<template>
  <div class="cell" :class="cellClasses">
    <!-- @slot Content goes here -->
    <slot>
      &nbsp;
    </slot>
  </div>
</template>

<script>
  /**
   * ### Cells are the pillars of grids.
   *
   * A cell is a block of content, a collection of which forms the grid layout
   * that powers the responsive web. Cells can be stacked based on their
   * fractional width in the grid.
   *
   * @see For example usage, see [Grid](#/Layouts/Grid).
   */
  export default {
    name: 'GridCell',
    props: {
      /**
       * _the number of slices this column should span on different devices_
       *
       * Note that in a 12-slice grid, number of columns that can be
       * accommodated is `12 / span`.
       *
       * Other than desktop, all values have a default and will be resolved as
       * follows. On phones and tablets in portrait orientation, the cell
       * occupies all twelve slices. Tablets in landscape orientation and big
       * desktops fall back to the slices configured for the standard desktop.
       *
       * With these fallbacks in mind, depending on the length of the array,
       * the values are interpreted differently.
       *
       * ```
       * [desktop]
       * [phone, desktop]
       * [phone, desktop, big desktop]
       * [phone, tablet, desktop, big desktop]
       * [phone, tablet-portrait, tablet-landscape, desktop, big-desktop]
       * ```
       */
      spanSet: {
        type: Array,
        required: true,
        validator: val => val.length >= 1 && val.length <= 5 && val.every(
          span => span >= 1 && span <= 12
        )
      }
    },
    computed: {
      spans: function () {
        let phone = null
        let tablet = null
        let tabletPortrait = null
        let tabletLandscape = null
        let desktop = null
        let bigDesktop = null

        let spanSet = this.spanSet
        let count = spanSet.length

        // Prop processing
        switch (count) {
          case 1:
            [
              desktop
            ] = spanSet
            break
          case 2:
            [
              phone,
              desktop
            ] = spanSet
            break
          case 3:
            [
              phone,
              desktop,
              bigDesktop
            ] = spanSet
            break
          case 4:
            [
              phone,
              tablet,
              desktop,
              bigDesktop
            ] = spanSet
            break
          case 5:
            [
              phone,
              tabletPortrait,
              tabletLandscape,
              desktop,
              bigDesktop
            ] = spanSet
            break
        }

        // Defaults
        phone = phone || 12
        tabletPortrait = tabletPortrait || tablet || phone
        tabletLandscape = tabletLandscape || tablet || desktop
        bigDesktop = bigDesktop || desktop

        return {
          phone,
          tabletPortrait,
          tabletLandscape,
          desktop,
          bigDesktop
        }
      },
      cellClasses: function () {
        return [
          `phone-${this.spans.phone}-wide`,
          `tablet-portrait-${this.spans.tabletPortrait}-wide`,
          `tablet-landscape-${this.spans.tabletLandscape}-wide`,
          `desktop-${this.spans.desktop}-wide`,
          `big-desktop-${this.spans.bigDesktop}-wide`
        ]
      }
    }
  }
</script>

<style src="@creativecommons/vocabulary/css/layouts/GridCell.css">
</style>
