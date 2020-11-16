<template>
  <component :is="component" type="button" :class="classes" :href="href" v-on="$listeners">
    <!-- @slot button content -->
    <slot default />
  </component>
</template>

<script>
  import { sized } from '@/mixins/sized'
  import { theme } from '@/utils/values'

  export default {
    name: 'VButton',
    mixins: [sized],
    props: {
      theme: {
        type: String,
        required: false,
        validator (value) {
          return theme.includes(value)
        }
      },
      /**
       * Buttons with an 'href' will be rendered as anchor tags
       */
      href: {
        type: String,
        required: false
      }
    },

    computed: {
      component () {
        return this.href ? 'a' : 'button'
      },
      classes () {
        return {
          button: true,
          [`is-${this.theme}`]: this.theme,
          ...this.sizeClasses
        }
      }
    }
  }
</script>
