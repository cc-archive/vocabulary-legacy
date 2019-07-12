<template>
  <div class="vocab shield" :class="shieldClasses">
    <div class="label">{{ label }}</div>
    <div class="message">{{ message }}</div>
  </div>
</template>

<script>
  import Colorable from '@/mixins/colorable'
  import Resizeable from '@/mixins/resizable'

  /**
   * ## Shields are informative badges.
   *
   * A shield conveys two bits of information, a key-value pair if you will in
   * an easy-to-digest badge form. This has made it immensely popular in the
   * development ecosystem to adorn `README.md` files.
   */
  export default {
    name: 'Shield',
    mixins: [
      Colorable,
      Resizeable
    ],
    props: {
      /**
       * _the value displayed on the left side of the shield_
       */
      label: {
        type: String,
        required: true
      },
      /**
       * _the value displayed on the right side of the shield_
       */
      message: {
        type: String,
        required: true
      }
    },
    computed: {
      shieldClasses: function () {
        return [
          this.color,
          this.shade,
          this.size
        ]
      }
    }
  }
</script>

<style lang="stylus" src="./Shield.styl">
</style>
