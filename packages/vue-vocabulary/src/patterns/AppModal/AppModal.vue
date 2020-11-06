<template>
  <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
  <div ref="modal" class="overlay app-modal" @click.self="$emit('close')">
    <FocusTrap :active="true">
      <div class="modal relative" aria-modal="true" role="dialog">
        <header
          v-if="title"
          class="modal-header padding-top-bigger padding-left-bigger padding-right-normal padding-bottom-small"
        >
          <slot name="header">
            <h3>{{ title }}</h3>
          </slot>
          <button
            type="button"
            class="close-button has-color-gray is-size-6 is-size-4-touch"
            :aria-label="$t('browse-page.aria.close')"
            @click="$emit('close')"
          >
            <span class="icon has-color-gray is-size-4 is-size-6-touch">
              <Cross />
            </span>
          </button>
        </header>
        <slot default />
      </div>
    </FocusTrap>
  </div>
</template>

<script>
  import { FocusTrap } from 'focus-trap-vue'
  import Cross from '@creativecommons/fonts/src/assets/svg/symbols/times.svg?inline'

  export default {
    name: 'AppModal',
    components: {
      FocusTrap,
      Cross
    },
    props: {
      /** Required for titlebar AND close button to show */
      title: String
    },
    mounted () {
      document.addEventListener('keyup', this.closeOnEsc)
    },
    destroyed () {
      document.removeEventListener('keyup', this.closeOnEsc)
    },
    methods: {
      closeOnEsc (e) {
        if (e.keyCode === 27) {
          this.$emit('close')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '~@creativecommons/vocabulary/dist/scss/color.scss';
@import '~@creativecommons/vocabulary/dist/scss/modal.scss';
</style>
