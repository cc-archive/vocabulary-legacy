<template>
  <span ref="emoji">
    <!-- @slot Content goes here -->
    <slot/>
  </span>
</template>

<script>
  import twemoji from 'twemoji'

  export default {
    name: 'Emoji',
    props: {
      /**
       * _the file format to use to render the emoji_
       *
       * ∈ {`'.png'`, `'.svg'`}
       */
      ext: {
        type: String,
        validator: val => ['.png', '.svg'].includes(val),
        default: '.svg'
      }
    },
    data: function () {
      return {
        baseHow: {
          className: 'vocab emoji'
        }
      }
    },
    computed: {
      how: function () {
        if (this.ext === '.svg') {
          return {
            ...this.baseHow,
            folder: 'svg',
            ext: '.svg'
          }
        } else {
          return this.baseHow
        }
      }
    },
    mounted () {
      twemoji.parse(this.$refs.emoji, this.how)
    }
  }
</script>

<style lang="stylus" src="./Emoji.styl">
</style>
