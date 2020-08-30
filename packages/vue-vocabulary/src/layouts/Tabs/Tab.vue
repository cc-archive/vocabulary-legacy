<template>
  <div>
    <!-- @slot Tab goes here -->
    <slot name="tab"/>
    <!-- @slot Content goes here -->
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'Tab',
    inject: [
      'tabList'
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
      this.tabList.push(this)
    },
    beforeDestroy: function () {
      const index = this.tabList.indexOf(this)
      if (index >= 0) {
        this.tabList.splice(index, 1)
      }
    }
  }
</script>
