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
            click: function () {
              vm.isVisible = !vm.isVisible
            }
          }
        } else { // this.action === 'hover'
          return {
            mouseover: function () {
              vm.isVisible = true
            },
            mouseleave: function () {
              vm.isVisible = false
            }
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

<style lang="stylus" src="./Popup.styl">
</style>
