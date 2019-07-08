<template>
  <div class="vocab shield" :class="shieldClasses">
    <div class="label">{{ label }}</div>
    <div class="message">{{ message }}</div>
  </div>
</template>

<script>
  import Colorable from '@/mixins/colorable'
  import Resizeable from '@/mixins/resizable'

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
