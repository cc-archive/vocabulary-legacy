<template>
  <div>
    <!-- @slot Add-ons go here -->
    <slot name="addons"/>
    <!-- @slot Content goes here -->
    <slot/>
  </div>
</template>

<script>
  /**
   * ### Links are the basis of navigation bars.
   *
   * A link points to a page in a site or a screen in an app, facilitating the
   * user to navigate during the course of their exploration.
   *
   * @see For example usage, see [Navigation](#/Patterns/Navigation).
   */
  export default {
    name: 'NavigationLink',
    inject: [
      'navigationLinkList'
    ],
    props: {
      /**
       * _the icon to show in the navigation link_
       */
      icon: {
        type: [String, Array]
      },
      /**
       * _the link that this link should point to_
       */
      link: {
        type: String
      }
    },
    created: function () {
      this.navigationLinkList.push(this)
    },
    beforeDestroy: function () {
      const index = this.navigationLinkList.indexOf(this)
      if (index >= 0) {
        this.navigationLinkList.splice(index, 1)
      }
    }
  }
</script>

<style lang="stylus" src="./NavigationLink.styl">
</style>
