<template>
  <div>
    <!-- @slot Tab goes here -->
    <slot name="tab"/>
    <!-- @slot Content goes here -->
    <slot default />
  </div>
</template>

<script>
  export default {
    name: 'Tab',
    inject: ['tabList'],
    props: {
      /**
       * The text that appears in the tab.
       * This option is overridden if the `tab` slot is populated.
       */
      title: {
        type: String
      }
    },
    data () {
      return {
        isActive: false
      }
    },
    created () {
      this.tabList.push(this)
    },
    beforeDestroy () {
      const index = this.tabList.indexOf(this)
      if (index >= 0) {
        this.tabList.splice(index, 1)
      }
    }
  }
</script>
