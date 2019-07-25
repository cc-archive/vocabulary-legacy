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
              :icon="['fas', navigationLink.icon]"
              fixed-width/>
          </SlotRenderer>
          <SlotRenderer
            :component="navigationLink"
            tag="span"/>
        </a>
      </li>
    </ul>
    <div style="display: none;">
      <!-- @slot [`NavigationLink`](#/Patterns/NavigationLink) components go here -->
      <slot/>
    </div>
  </nav>
</template>

<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import SlotRenderer from '@/utils/SlotRenderer/SlotRenderer'

  import Colorable from '@/mixins/colorable'
  import Invertible from '@/mixins/invertible'

  /**
   * ## Navigation guides the user around an app.
   *
   * Navigation provides a collection of
   * [NavigationLink](#/Patterns/NavigationLink)s in a familiar interface to
   * facilitate exploration.
   */
  export default {
    name: 'Navigation',
    mixins: [
      Colorable,
      Invertible
    ],
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
          this.color,
          this.shade,
          {
            'inverted': this.isInverted
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" src="./Navigation.styl">
</style>
