<template>
  <div class="vocab rating" :class="ratingClasses">
    <FontAwesomeIcon
      v-if="!isToggleable"
      class="icon dot"
      :icon="['fas', 'circle']"
      v-on:click="changeRating(0)"
      fixed-width/>
    <FontAwesomeIcon
      v-for="index in max"
      :key="index"
      class="icon unit"
      :class="{active: index <= rating}"
      :icon="['fas', icon]"
      v-on:click="changeRating(index)"
      fixed-width/>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faCircle, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import Colorable from '@/mixins/colorable'
  import Indicatable from '@/mixins/indicatable'

  library.add(faCircle, faStar, faHeart)

  export default {
    name: 'Rating',
    mixins: [
      Colorable,
      Indicatable
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
       * _the icon to use for the ratings_
       */
      icon: {
        type: String,
        default: 'star'
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
      }
    },
    computed: {
      ratingClasses: function () {
        return [
          this.color,
          this.shade,
          this.indication
        ]
      }
    },
    methods: {
      changeRating: function (index) {
        if (this.isToggleable && index === this.rating) {
          this.rating = 0
        } else {
          this.rating = index
        }
        this.$emit('input', this.rating)
      }
    }
  }
</script>

<style lang="stylus" src="./Rating.styl">
</style>
