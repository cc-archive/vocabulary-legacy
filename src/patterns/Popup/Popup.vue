<template>
  <div
    class="vocab popup"
    ref="popup"
    v-on="triggerListeners">
    <div class="trigger" ref="trigger">
      <!-- @slot Content goes here -->
      <slot/>
    </div>

    <Section
      v-show="isVisible"
      v-bind="$attrs"
      class="content"
      :class="contentClasses"
      is-compact>
      <!-- #slot Popup content goes here -->
      <slot name="popup"/>
    </Section>
  </div>
</template>

<script>
  import { debounce } from 'lodash'

  import Section from '@/layouts/Section/Section'

  /**
   * ### Popups reveal hidden content.
   *
   * A popup presents content that is normally hidden but makes itself visible
   * when a specific action is performed.
   */
  export default {
    name: 'Popup',
    components: {
      Section
    },
    props: {
      /**
       * _the direction in which the popup should appear_
       *
       * ∈ {`'top'`, `'right'`, `'bottom'`, `'left'`}
       */
      to: {
        type: String,
        default: 'top',
        validator: val => [
          'top',
          'right',
          'bottom',
          'left'
        ].includes(val)
      },
      /**
       * _the action which should reveal the popup_
       *
       * ∈ {`'hover'`, `'click'`}
       */
      action: {
        type: String,
        default: 'hover',
        validator: val => [
          'hover',
          'click'
        ].includes(val)
      },
      /**
       * _the number of milliseconds by which to delay the popup state change_
       */
      delay: {
        type: Number,
        default: 0,
        validator: val => (val >= 0)
      }
    },
    data: function () {
      return {
        isVisible: false
      }
    },
    computed: {
      triggerListeners: function () {
        let vm = this

        if (this.action === 'click') {
          return {
            click: debounce(() => {
              vm.isVisible = !vm.isVisible
            }, this.delay)
          }
        } else { // this.action === 'hover'
          return {
            mouseover: debounce(() => {
              vm.isVisible = true
            }, this.delay),
            mouseleave: debounce(() => {
              vm.isVisible = false
            }, this.delay)
          }
        }
      },
      contentClasses: function () {
        return [
          `to-${this.to}`
        ]
      }
    }
  }
</script>

<style src="@creativecommons/vocabulary/css/patterns/Popup.css">
</style>
