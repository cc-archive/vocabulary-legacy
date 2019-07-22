<template>
  <div class="vocab card" :class="cardClasses">
    <Section
      v-bind="$attrs"
      :is-inverted="isInverted"
      :is-rounded="isRounded"
      :color="color"
      :shade="shade"
      colorSide="bottom"
      is-clingy>
      <div class="feature">
        <!-- @slot Featured content goes here -->
        <slot name="feature">
          <img
            :alt="featuredImageAlt"
            v-if="featuredImageSource"
            :src="featuredImageSource">
        </slot>
      </div>
      <div class="head" v-if="hasHead">
        <!-- @slot Card header goes here -->
        <slot name="head">
          <div class="heading">{{ heading }}</div>
          <div class="subheading">{{ subheading }}</div>
        </slot>
      </div>
      <div class="body">
        <!-- @slot Content goes here -->
        <slot/>
      </div>
      <div class="foot" v-if="$slots.foot">
        <!-- @slot Card footer goes here -->
        <slot name="foot"/>
      </div>
    </Section>
  </div>
</template>

<script>
  import Section from '@/layouts/Section/Section'

  import Colorable from '@/mixins/colorable'
  import Invertible from '@/mixins/invertible'
  import Roundable from '@/mixins/roundable'
  import Raisable from '@/mixins/raisable'

  /**
   * ## Cards describe singular subjects.
   *
   * Cards are surfaces that display content, information and actions on a
   * single topic. They are easy to scan. Cards are the basis of responsive
   * design.
   */
  export default {
    name: 'Card',
    inheritAttrs: false,
    mixins: [
      Colorable,
      Invertible,
      Roundable,
      Raisable
    ],
    components: {
      Section
    },
    props: {
      /**
       * _whether the card appears alongside other cards in a Grid_
       */
      isDecked: {
        type: Boolean,
        default: false
      },
      /**
       * _the source of the featured image_
       *
       * This must point to a valid image URL.
       */
      featuredImageSource: {
        type: String
      },
      /**
       * _the alternative text for the featured image_
       *
       * This text is read by screen-readers and appears when image could not
       * be loaded.
       */
      featuredImageAlt: {
        type: String,
        default: 'Featured image'
      },
      /**
       * _the heading for the card_
       */
      heading: {
        type: String
      },
      /**
       * _the subheading for the card_
       */
      subheading: {
        type: String
      }
    },
    computed: {
      cardClasses: function () {
        return [
          this.color,
          this.shade,
          {
            'decked': this.isDecked,
            'inverted': this.isInverted,
            'rounded': this.isRounded,
            'raised': this.isRaised
          }
        ]
      },
      hasHead: function () {
        return this.$slots.head || this.heading || this.subheading
      }
    }
  }
</script>

<style lang="stylus" src="./Card.styl">
</style>
