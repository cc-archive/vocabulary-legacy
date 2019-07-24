<template>
  <div>
    <!-- @slot Tab goes here -->
    <slot name="tab"/>
    <!-- @slot Content goes here -->
    <slot/>
  </div>
</template>

<script>
  /**
   * ## Panes are the content of tabbed views.
   *
   * A pane is a part of a tabbed view consisting of content in a
   * [Section](#/Layouts/Section) and a tab that allows switching to it. The
   * content of the pane is not visible unless it is activated by clicking on
   * its tab.
   *
   * @see For example usage, see [Tabbed](#/Layouts/Tabbed).
   */
  export default {
    name: 'TabbedPane',
    data: function () {
      return {
        isActive: false
      }
    },
    props: {
      /**
       * _the text that appears in the tab_
       *
       * This option is overridden if the slot `tab` is populated.
       */
      title: {
        type: String
      }
    },
    created: function () {
      this.$parent.tabPaneList.push(this)
    },
    beforeDestroy: function () {
      const index = this.$parent.tabPaneList.indexOf(this)
      if (index >= 0) {
        this.$parent.tabPaneList.splice(index, 1)
      }
    }
  }
</script>

<style lang="stylus" src="./TabbedPane.styl">
</style>
