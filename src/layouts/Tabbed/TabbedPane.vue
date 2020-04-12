<template>
  <div>
    <!-- @slot Tab goes here -->
    <slot name="tab"/>
    <!-- @slot Content goes here -->
    <slot/>
  </div>
</template>

<script>
  import Branded from '@/mixins/branded'
  import Colored from '@/mixins/colored'
  import Indicating from '@/mixins/indicating'

  /**
   * ### Panes are the content of tabbed views.
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
    mixins: [
      Branded,
      Colored,
      Indicating
    ],
    inject: [
      'tabPaneList'
    ],
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
    data: function () {
      return {
        isActive: false
      }
    },
    created: function () {
      this.tabPaneList.push(this)
    },
    beforeDestroy: function () {
      const index = this.tabPaneList.indexOf(this)
      if (index >= 0) {
        this.tabPaneList.splice(index, 1)
      }
    }
  }
</script>
