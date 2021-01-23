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
            :aria-label="ariaCloseLabel"
            @click="$emit('close')"
          >
            <span class="icon has-color-gray is-size-4 is-size-6-touch">
              <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M18.9094 15L24.7729 9.13652C25.4924 8.41699 25.4924 7.25039 24.7729 6.53027L23.4697 5.22715C22.7502 4.50762 21.5836 4.50762 20.8635 5.22715L15 11.0906L9.13652 5.22715C8.41699 4.50762 7.25039 4.50762 6.53027 5.22715L5.22715 6.53027C4.50762 7.2498 4.50762 8.41641 5.22715 9.13652L11.0906 15L5.22715 20.8635C4.50762 21.583 4.50762 22.7496 5.22715 23.4697L6.53027 24.7729C7.2498 25.4924 8.41699 25.4924 9.13652 24.7729L15 18.9094L20.8635 24.7729C21.583 25.4924 22.7502 25.4924 23.4697 24.7729L24.7729 23.4697C25.4924 22.7502 25.4924 21.5836 24.7729 20.8635L18.9094 15Z" fill="currentColor"/></svg>
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

  export default {
    name: 'AppModal',
    components: {
      FocusTrap
    },
    props: {
      /** Required for titlebar AND close button to show */
      title: String,
      ariaCloseLabel: {
        type: String,
        default: 'close'
      }
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
@import '~@creativecommons/vocabulary/scss/color.scss';
//@import '~@creativecommons/vocabulary/dist/scss/modal.scss';
@import 'bulma/sass/utilities/_all';

.modal {
  position: relative;
  margin: 0px auto;
  max-width: 85vw;
  max-height: 85vh;
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 2px;
  box-shadow: 0 2px 8px 3px;
  background-color: #fff;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 600;
  background: #00000094;
}

.has-color-gray {
  color: rgb(176, 176, 176);
}

.modal-header {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
}

.close-button {
  appearance: none;
  border: none;
  height: auto;
  margin: -20px -20px -20px auto;
  padding: 20px;
  background-color: transparent;
  line-height: 1;
  cursor: pointer;
  .has-color-gray {
    color: #{$color-gray};
  }
  .icon {
    display:inline-block;
    &.is-size-4 {
      height: 1rem;
    }
    &.is-size-6-touch {
      height: 1.43rem;
    }
    svg {
      height: 100%;
    }
  }
  &:hover {
    color: rgb(120, 120, 120);
  }
}

</style>
