<template>
  <div class="vocab rating" :class="ratingClasses">
    <FontAwesomeIcon
      v-if="!isToggleable && !isDisabled"
      class="icon dot"
      :icon="['fas', 'circle']"
      v-on:click="changeRating(0)"
      fixed-width/>
    <FontAwesomeIcon
      v-for="index in max"
      :key="index"
      class="icon unit"
      :class="iconClasses(index)"
      :icon="['fas', computedIcons[index-1]]"
      v-on:click="changeRating(index)"
      fixed-width/>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faCircle, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import Colorable from '@/mixins/colorable'
  import Disableable from '@/mixins/disableable'
  import Indicatable from '@/mixins/indicatable'
  import Resizable from '@/mixins/resizable'

  library.add(faCircle, faStar, faHeart)

  /**
   * ## Ratings establish the quality of content.
   *
   * A rating is a quantity that maps to the quality of content. It is a way to
   * pictorially represent if some entity was good or bad, and to what extent
   * so as a guide to future visitors or site moderators.
   */
  export default {
    name: 'Rating',
    mixins: [
      Colorable,
      Disableable,
      Indicatable,
      Resizable
    ],
    components: {
      FontAwesomeIcon
    },
    data: function () {
      return {
        rating: this.value
      }
    },
    props: {
      /**
       * _the maximum value to which the ratings can go_
       */
      max: {
        type: Number,
        default: 5
      },
      /**
       * _an array of icons to use for the ratings_
       *
       * If this number is less than max, the last icon will be repeated as many
       * times as is necessary. If more, the array will be clipped.
       */
      iconSet: {
        type: Array,
        default: () => ['star']
      },
      /**
       * _the initial value to set for the ratings_
       */
      value: {
        type: Number,
        default: 0,
        validator: val => val >= 0
      },
      /**
       * _whether to clear the rating if clicked on the current value_
       *
       * This removes the dot and allows the user to clear the rating by
       * selecting the same value again.
       */
      isToggleable: {
        type: Boolean,
        default: false
      },
      /**
       * _whether only the rating icon should be highlighted_
       *
       * This means that if the rating is 3, only the third icon will be
       * highlighted, not the first and the second.
       */
      isSingleSelect: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      ratingClasses: function () {
        return [
          this.size,
          this.color,
          this.shade,
          this.indication,
          {
            'disabled': this.isDisabled
          }
        ]
      },
      computedIcons: function () {
        let arrayLength = this.iconSet.length
        if (arrayLength < this.max) {
          let addendumLength = this.max - arrayLength
          return this.iconSet.concat(
            Array(addendumLength).fill(this.iconSet[arrayLength - 1])
          )
        } else {
          return this.iconSet.slice(0, this.max)
        }
      }
    },
    methods: {
      iconClasses: function (index) {
        let active = false
        if (this.isSingleSelect) {
          if (index === this.rating) {
            active = true
          }
        } else {
          if (index <= this.rating) {
            active = true
          }
        }
        return [
          {
            'active': active
          }
        ]
      },
      changeRating: function (index) {
        if (!this.isDisabled) {
          if (this.isToggleable && index === this.rating) {
            this.rating = 0
          } else {
            this.rating = index
          }
          this.$emit('input', this.rating)
        }
      }
    }
  }
</script>

<style lang="stylus" src="./Rating.styl">
</style>
