<template>
  <div class="vocab select-field" :class="selectFieldClasses">
    <!-- Attach label with ID when using -->
    <select
      v-bind="$attrs"
      v-on="selectListeners"
      class="field"
      :class="fieldClasses"
      :disabled="isDisabled || isReadOnly"
      :value="value"
      @focus="toggleDropdown"
      @blur="toggleDropdown">
      <option
        disabled
        value="">
        {{ $t('select') }}
      </option>
      <option
        v-for="(option, index) in optionList"
        :key="index"
        :value="option.value">
        {{ option.text }}
      </option>
    </select>

    <div class="addons" v-if="hasAddons">
      <!-- @slot Addons go here -->
      <slot name="addons">
        <FontAwesomeIcon
          v-if="icon"
          :icon="icon"
          fixed-width/>
      </slot>
    </div>

    <div class="caret">
      <FontAwesomeLayers class="icon-group">
        <template v-if="!isDisabled && !isReadOnly">
          <FontAwesomeIcon
            class="icon"
            :class="{active: isContentVisible}"
            :icon="['fas', 'angle-up']"
            fixed-width/>
          <FontAwesomeIcon
            class="icon"
            :class="{active: !isContentVisible}"
            :icon="['fas', 'angle-down']"
            fixed-width/>
        </template>
        <template v-else>
          <FontAwesomeIcon
            v-if="isDisabled"
            :icon="['fas', 'ban']"
            fixed-width/>
          <FontAwesomeIcon
            v-if="isReadOnly"
            :icon="['fas', 'eye']"
            fixed-width/>
        </template>
      </FontAwesomeLayers>
    </div>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faAngleDown, faAngleUp, faBan, faEye, faVoteYea } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'

  import Branded from '@/mixins/branded'
  import Colored from '@/mixins/colored'
  import Indicating from '@/mixins/indicating'
  import Rounded from '@/mixins/rounded'
  import Scaled from '@/mixins/scaled'
  import Simplified from '@/mixins/simplified'
  import Toned from '@/mixins/toned'

  import Invertible from '@/mixins/invertible'
  import Unactionable from '@/mixins/unactionable'

  library.add(faVoteYea, faAngleDown, faAngleUp, faBan, faEye)

  /**
   * ### Select fields offer a choice between many options.
   *
   * A select field allows a user to choose one or more options from many.
   * It presents a standard alternative to radio buttons if choosing one and to
   * checkboxes if choosing many.
   */
  export default {
    name: 'SelectField',
    components: {
      FontAwesomeIcon,
      FontAwesomeLayers
    },
    mixins: [
      Branded,
      Colored,
      Indicating,
      Rounded,
      Scaled,
      Simplified,
      Toned,

      Invertible,
      Unactionable
    ],
    inheritAttrs: false,
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      /**
       * _an icon to use in the dropdown_
       */
      icon: {
        type: [String, Array]
      },
      /**
       * _the list of options to choose from_
       */
      optionList: {
        type: Array,
        required: true
      },
      /**
       * _the value of this field_
       *
       * The option that matches this value will be shown as the selected
       * option.
       */
      value: {
        type: String
      }
    },
    data: function () {
      return {
        isContentVisible: false
      }
    },
    computed: {
      selectFieldClasses: function () {
        return [
          ...this.brandedClasses,
          ...this.coloredClasses,
          ...this.indicatingClasses,
          ...this.roundedClasses,
          ...this.scaledClasses,
          ...this.simplifiedClasses,
          ...this.tonedClasses,

          ...this.invertibleClasses,
          ...this.unactionableClasses
        ]
      },
      fieldClasses: function () {
        return {
          'has-addons': this.hasAddons
        }
      },

      hasAddons: function () {
        return this.icon || this.$slots.addons
      },

      selectListeners: function () {
        let vm = this
        return Object.assign(
          {},
          vm.$listeners,
          {
            change: function (event) {
              vm.$emit('change', event.target.value)
            }
          }
        )
      }
    },
    methods: {
      toggleDropdown: function () {
        this.isContentVisible = !this.isContentVisible
      }
    }
  }
</script>

<style lang="stylus" src="./SelectField.styl">
</style>

<i18n src="./lang.json">
</i18n>
