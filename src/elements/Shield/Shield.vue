<template>
  <div class="vocab shield" :class="shieldClasses">
    <div class="bit label" :class="bitClasses(0)">
      <!-- @slot Label goes here -->
      <slot name="label">
        {{ label }}
      </slot>
    </div>

    <div class="bit message" :class="bitClasses(1)">
      <!-- @slot Content goes here -->
      <slot>
        {{ message }}
      </slot>
    </div>
  </div>
</template>

<script>
  import Colored from '@/mixins/colored'
  import Invertible from '@/mixins/invertible'
  import Indicating from '@/mixins/indicating'
  import Resizeable from '@/mixins/resizable'

  /**
   * ### Shields are informative badges.
   *
   * A shield conveys two bits of information, a key-value pair if you will in
   * an easy-to-digest badge form. This has made it immensely popular in the
   * development ecosystem to adorn `README.md` files.
   */
  export default {
    name: 'Shield',
    mixins: [
      Colored,
      Invertible,
      Indicating,
      Resizeable
    ],
    props: {
      /**
       * _the value displayed on the left side of the shield_
       */
      label: {
        type: String
      },
      /**
       * _the value displayed on the right side of the shield_
       */
      message: {
        type: String
      },
      /**
       * _whether to lowercase the contents of label and message respectively_
       */
      lowercaseSet: {
        type: Array,
        default: () => [true, false]
      }
    },
    computed: {
      shieldClasses: function () {
        return [
          ...this.coloredClasses,
          ...this.indicatingClasses,
          ...this.invertibleClasses,
          ...this.resizableClasses
        ]
      }
    },
    methods: {
      bitClasses: function (index) {
        return [
          {
            'lowercased': this.lowercaseSet[index]
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" src="./Shield.styl">
</style>
