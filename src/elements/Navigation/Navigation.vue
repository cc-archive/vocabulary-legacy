<template>
  <nav class="vocab navigation" :class="navigationClasses">
    <ul>
      <li v-for="(link, index) in linkList" :key="index">
        <a :href="link.href">{{ link.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
  import Invertible from '@/mixins/invertible'

  /**
   * ## Navigation guides the user around an app.
   *
   * Navigation provides a familiar way for users to explore a site, providing
   * links to other top-level pages.
   */
  export default {
    name: 'Navigation',
    mixins: [
      Invertible
    ],
    props: {
      /**
       * _the list of navigation links_
       */
      linkList: {
        type: Array,
        validator: val => val.every(
          link => {
            let keys = ['text', 'href']
            return keys.every(key => key in link)
          }
        )
      }
    },
    computed: {
      navigationClasses: function () {
        return [
          {
            'inverted': this.isInverted
          }
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Navigation.styl">
</style>
