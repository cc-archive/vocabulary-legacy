<template>
  <div
    class="vocab switch-field"
    :class="switchFieldClasses"
    @click="flipSwitch">
    <div
      v-if="isLabelled"
      class="symbol off">
      <FontAwesomeIcon
        v-if="iconSet[0]"
        :icon="['fas', iconSet[0]]"
        fixed-width/>
      <div
        v-else
        class="text">
        <strong>O</strong>
      </div>
    </div>

    <div
      v-if="isLabelled"
      class="symbol on">
      <FontAwesomeIcon
        v-if="iconSet[1]"
        :icon="['fas', iconSet[1]]"
        fixed-width/>
      <div
        v-else
        class="text">
        <strong>I</strong>
      </div>
    </div>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import Colored from '@/mixins/colored'
  import Indicating from '@/mixins/indicating'
  import Rounded from '@/mixins/rounded'
  import Scaled from '@/mixins/scaled'
  import Simplified from '@/mixins/simplified'

  import Invertible from '@/mixins/invertible'
  import Unactionable from '@/mixins/unactionable'

  library.add(faCheck, faTimes)

  /**
   * ### What turns you on? A light switch.
   *
   * A switch indicates a toggleable value. It is different from a checkbox in
   * that while a checkbox is for choosing many out of many, a switch's job is
   * to indicate, and possibly change, the state of an item.
   */
  export default {
    name: 'SwitchField',
    components: {
      FontAwesomeIcon
    },
    mixins: [
      Colored,
      Indicating,
      Rounded,
      Scaled,
      Simplified,

      Invertible,
      Unactionable
    ],
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      /**
       * _an array specifying the off and on icon_
       *
       * Use '' to omit the icon.
       */
      iconSet: {
        type: Array,
        validator: val => val.length === 2,
        default: () => [null, null]
      },
      /**
       * _the initial state of the switch_
       */
      value: {
        type: Boolean,
        default: false
      },
      /**
       * _whether to display the I/O indicators on the switch_
       */
      isLabelled: {
        type: Boolean,
        default: false
      },
      /**
       * _the state to indicate the component in_
       *
       * ∈ {`'negative'`, `'positive'`, `'probably'`, `'conditional'`}
       */
      indication: {
        type: String,
        validator: val => [
          'negative',
          'positive',
          'probably',
          'conditional'
        ].includes(val)
      }
    },
    data: function () {
      return {
        isChecked: this.value
      }
    },
    computed: {
      switchFieldClasses: function () {
        return [
          ...this.coloredClasses,
          ...this.indicatingClasses,
          ...this.roundedClasses,
          ...this.scaledClasses,
          ...this.simplifiedClasses,

          ...this.invertibleClasses,
          ...this.unactionableClasses,

          {
            'checked': this.isChecked
          }
        ]
      }
    },
    methods: {
      flipSwitch: function () {
        if (!this.isDisabled && !this.isReadOnly) {
          this.isChecked = !this.isChecked
          /**
           * _event fired when the switch is flipped_
           *
           * The checked (`true`) or unchecked (`false`) state is passed back.
           *
           * @type {boolean}
           */
          this.$emit('input', this.isChecked)
        }
      }
    }
  }
</script>

<style lang="stylus" src="./SwitchField.styl">
</style>
