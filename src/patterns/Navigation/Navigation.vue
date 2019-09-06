<template>
  <nav class="vocab navigation" :class="navigationClasses">
    <ul class="links">
      <li
        v-for="(navigationLink, index) in navigationLinkList"
        :key="index"
        class="link">
        <a :href="navigationLink.link">
          <SlotRenderer
            :component="navigationLink"
            name="addons"
            tag="span">
            <FontAwesomeIcon
              v-if="navigationLink.icon"
              :icon="['fas', navigationLink.icon]"
              fixed-width/>
          </SlotRenderer>
          <SlotRenderer
            :component="navigationLink"
            tag="span"/>
        </a>
      </li>
    </ul>
    <div v-show="false">
      <!-- @slot [`NavigationLink`](#/Patterns/NavigationLink) components go here -->
      <slot/>
    </div>
  </nav>
</template>

<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import SlotRenderer from '@/utils/SlotRenderer/SlotRenderer'

  import Colored from '@/mixins/colored'

  import Invertible from '@/mixins/invertible'

  /**
   * ### Navigation guides the user around an app.
   *
   * Navigation provides a collection of
   * [NavigationLink](#/Patterns/NavigationLink)s in a familiar interface to
   * facilitate exploration.
   */
  export default {
    name: 'Navigation',
    mixins: [
      Colored,

      Invertible
    ],
    provide: function () {
      return {
        navigationLinkList: this.navigationLinkList
      }
    },
    components: {
      SlotRenderer,
      FontAwesomeIcon
    },
    data: function () {
      return {
        navigationLinkList: []
      }
    },
    computed: {
      navigationClasses: function () {
        return [
          ...this.coloredClasses,

          ...this.invertibleClasses
        ]
      }
    }
  }
</script>

<style lang="stylus" src="./Navigation.styl">
</style>
