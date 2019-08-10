<template>
  <button
    v-on="buttonListeners"
    class="vocab button"
    :class="buttonClasses"
    :disabled="isDisabled">
    <div
      v-if="hasAddons"
      class="addons">
      <!-- @slot Addons go here -->
      <slot name="addons">
        <FontAwesomeIcon
          v-if="icon"
          :icon="['fas', icon]"
          fixed-width/>
      </slot>
    </div>

    <div
      v-if="$slots.default"
      class="content"
      :class="contentClasses">
      <!-- @slot Content goes here -->
      <slot/>
    </div>
  </button>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faHandPointUp } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import Colored from '@/mixins/colored'
  import Indicating from '@/mixins/indicating'
  import Invertible from '@/mixins/invertible'
  import Resizable from '@/mixins/resizable'
  import Roundable from '@/mixins/roundable'
  import Simplifiable from '@/mixins/simplifiable'
  import Unactionable from '@/mixins/unactionable'

  library.add(faHandPointUp)

  /**
   * ### Buttons inspire action.
   *
   * A button makes a web app interactive. When you see a button, it intuitively
   * informs the user of the possibility of an interaction. Buttons, by their
   * very nature, are the fundamental instruments of interactivity.
   */
  export default {
    name: 'Button',
    components: {
      FontAwesomeIcon
    },
    mixins: [
      Colored,
      Indicating,
      Invertible,
      Resizable,
      Roundable,
      Simplifiable,
      Unactionable
    ],
    props: {
      /**
       * _an icon to use as an add-on for the button_
       */
      icon: {
        type: String
      },
      /**
       * _whether a button is a call to action button_
       */
      isCallToAction: {
        type: Boolean,
        default: false
      },
      /**
       * _whether to round the button into a pill shape_
       */
      isPillShaped: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      buttonClasses: function () {
        return [
          ...this.coloredClasses,
          ...this.indicatingClasses,
          ...this.invertibleClasses,
          ...this.resizableClasses,
          ...this.roundableClasses,
          ...this.simplifiableClasses,
          ...this.unactionableClasses,

          {
            'call-to-action': this.isCallToAction,
            'pill-shaped': this.isPillShaped
          }
        ]
      },
      contentClasses: function () {
        return [
          {
            'has-addons': this.hasAddons
          }
        ]
      },

      hasAddons: function () {
        return this.icon || this.$slots.addons
      },

      buttonListeners: function () {
        let vm = this
        return Object.assign(
          {},
          vm.$listeners,
          {
            click: function (event) {
              vm.$emit('click', event.target.value)
            }
          }
        )
      }
    }
  }
</script>

<style lang="stylus" src="./Button.styl">
</style>
