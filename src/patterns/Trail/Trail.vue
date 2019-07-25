<template>
  <div class="vocab trail" :class="trailClasses">
    <ul class="crumbs">
      <li
        v-for="(trailCrumb, index) in trailCrumbList"
        :key="index"
        class="crumb">
        <span
          v-for="loop in index"
          :key="loop"
          class="spacing">
          <template v-if="loop === index">↳</template>
        </span>
        <a :href="trailCrumb.link">
          <SlotRenderer
            :component="trailCrumb"
            name="addons"
            tag="span">
            <FontAwesomeIcon
              :icon="['fas', trailCrumb.icon]"
              fixed-width/>
          </SlotRenderer>
          <SlotRenderer
            :component="trailCrumb"
            tag="span"/>
        </a>
        <FontAwesomeIcon
          class="separator"
          :icon="['fas', icon]"
          fixed-width/>
      </li>
    </ul>
    <div style="display: none;">
      <!-- @slot [`TrailCrumb`](#/Patterns/TrailCrumb) components go here -->
      <slot/>
    </div>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import SlotRenderer from '@/utils/SlotRenderer/SlotRenderer'

  import Colorable from '@/mixins/colorable'
  import Invertible from '@/mixins/invertible'

  library.add(faAngleRight)

  /**
   * ## Trail crumbs help you go back.
   *
   * Trail provides a collection of
   * [TrailCrumb](#/Patterns/TrailCrumbs)s in a familiar interface to
   * facilitate exploration.
   */
  export default {
    name: 'Trail',
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
        trailCrumbList: []
      }
    },
    props: {
      /**
       * _the icon to use as the separator between crumbs_
       */
      icon: {
        type: String,
        default: 'angle-right'
      }
    },
    computed: {
      trailClasses: function () {
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

<style lang="stylus" src="./Trail.styl">
</style>
