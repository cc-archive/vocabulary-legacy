<template>
  <Section
    v-bind="$attrs"
    class="card"
    :class="cardClasses"
    color-side="bottom"
    is-clingy>
    <div class="content">
      <div
        v-if="hasFeature"
        class="feature">
        <!-- @slot Featured content goes here -->
        <slot name="feature">
          <ImageView
            v-if="featuredImageSource"
            :source="featuredImageSource"
            :alternateText="featuredImageAlternateText"/>
        </slot>
      </div>

      <div
        v-if="hasHead"
        class="head">
        <!-- @slot Card header goes here -->
        <slot name="head">
          <div class="heading">{{ heading }}</div>
          <div class="subheading">{{ subheading }}</div>
        </slot>
      </div>

      <div
        v-if="$slots.default"
        class="body">
        <!-- @slot Content goes here -->
        <slot/>
      </div>

      <div
        v-if="$slots.foot"
        class="foot">
        <!-- @slot Card footer goes here -->
        <slot name="foot"/>
      </div>
    </div>
  </Section>
</template>

<script>
  import ImageView from '@/elements/ImageView/ImageView'

  import Section from '@/layouts/Section/Section'

  /**
   * ### Cards describe singular subjects.
   *
   * Cards are surfaces that display content, information and actions on a
   * single topic. They are easy to scan. Cards are the basis of responsive
   * design.
   */
  export default {
    name: 'Card',
    components: {
      ImageView,
      Section
    },
    props: {
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
      featuredImageAlternateText: {
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
      },
      /**
       * _whether the card appears alongside other cards in a Grid_
       */
      isDecked: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      cardClasses: function () {
        return [
          {
            'decked': this.isDecked
          }
        ]
      },

      hasFeature: function () {
        return this.$slots.feature || this.featuredImageSource
      },
      hasHead: function () {
        return this.$slots.head || this.heading || this.subheading
      }
    }
  }
</script>

<style lang="stylus" src="./Card.styl">
</style>
