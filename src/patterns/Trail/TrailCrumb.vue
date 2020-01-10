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
   * ### Crumbs are the basis of trails.
   *
   * A crumb represents a level in the hierarchy of the page, site or
   * application that facilitates a user to go upwards and backwards during the
   * course of their exploration.
   *
   * @see For example usage, see [Trail](#/Patterns/Trail).
   */
  export default {
    name: 'TrailCrumb',
    inject: [
      'trailCrumbList'
    ],
    props: {
      /**
       * _the icon to show in the trail crumb_
       */
      icon: {
        type: [String, Array]
      },
      /**
       * _the link that this crumb should point to_
       */
      link: {
        type: String
      }
    },
    created: function () {
      this.trailCrumbList.push(this)
    },
    beforeDestroy: function () {
      const index = this.trailCrumbList.indexOf(this)
      if (index >= 0) {
        this.trailCrumbList.splice(index, 1)
      }
    }
  }
</script>

<style src="@creativecommons/vocabulary/css/patterns/TrailCrumb.css">
</style>
