<template>
  <button
    v-on="buttonListeners"
    class="vocab button"
    :class="buttonClasses"
    :disabled="isDisabled">
    <div
      v-if="hasAddons"
      class="addons"
      :class="addonClasses">
      <!-- @slot Addons go here -->
      <slot name="addons">
        <FontAwesomeIcon
          v-if="icon"
          :icon="icon"
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

  import Branded from '@/mixins/branded'
  import Colored from '@/mixins/colored'
  import Indicating from '@/mixins/indicating'
  import Joined from '@/mixins/joined'
  import Rounded from '@/mixins/rounded'
  import Scaled from '@/mixins/scaled'
  import Simplified from '@/mixins/simplified'

  import Invertible from '@/mixins/invertible'
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
      Branded,
      Colored,
      Joined,
      Rounded,
      Scaled,
      Simplified,

      Indicating,

      Invertible,
      Unactionable
    ],
    props: {
      /**
       * _an icon to use as an add-on_
       */
      icon: {
        type: [String, Array]
      },
      /**
       * _whether to pad the add-on_
       */
      isAddonPadded: {
        type: Boolean,
        default: true
      },
      /**
       * _whether a button is a call to action button_
       */
      isCallToAction: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      buttonClasses: function () {
        return [
          ...this.brandedClasses,
          ...this.coloredClasses,
          ...this.indicatingClasses,
          ...this.joinClasses,
          ...this.roundedClasses,
          ...this.scaledClasses,
          ...this.simplifiedClasses,

          ...this.invertibleClasses,
          ...this.unactionableClasses,

          {
            'call-to-action': this.isCallToAction
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
      addonClasses: function () {
        return [
          {
            'padded': this.isAddonPadded
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
