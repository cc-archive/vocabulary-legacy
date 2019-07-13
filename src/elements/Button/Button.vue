<template>
  <button
    v-on="buttonListeners"
    class="vocab button"
    :class="buttonClasses"
    :disabled="isDisabled">
    <div class="addons" v-if="hasAddons">
      <!-- @slot Addons go here -->
      <slot name="addons">
        <FontAwesomeIcon
          v-if="hasIcon"
          :icon="['fas', icon]"
          fixed-width/>
      </slot>
    </div>
    <div v-if="$slots.default" class="content" :class="contentClasses">
      <!-- @slot Content goes here -->
      <slot/>
    </div>
  </button>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faHandPointUp } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import Colorable from '@/mixins/colorable'
  import Resizable from '@/mixins/resizable'
  import Basicable from '@/mixins/basicable'
  import Disableable from '@/mixins/disableable'
  import Indicatable from '@/mixins/indicatable'
  import Roundable from '@/mixins/roundable'

  library.add(faHandPointUp)

  /**
   * ## Buttons inspire action.
   *
   * A button makes a web app interactive. When you see a button, it can evoke
   * in you an urge to click it. Buttons can either enhance or subdue this
   * feeling.
   */
  export default {
    name: 'Button',
    mixins: [
      Colorable,
      Resizable,
      Basicable,
      Disableable,
      Indicatable,
      Roundable
    ],
    components: {
      FontAwesomeIcon
    },
    props: {
      /**
       * _an icon to use as an add-on for the button_
       */
      icon: {
        type: String,
        default: ''
      }
    },
    computed: {
      buttonClasses: function () {
        return [
          this.color,
          this.shade,
          this.size,
          this.indication,
          {
            'basic': this.isBasic,
            'rounded': this.isRounded,
            'disabled': this.isDisabled
          }
        ]
      },
      hasIcon: function () {
        return this.icon !== ''
      },
      hasAddons: function () {
        return this.hasIcon || this.$slots.addons
      },
      contentClasses: function () {
        return {
          'has-addons': this.hasAddons
        }
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
