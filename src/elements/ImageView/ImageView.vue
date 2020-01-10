<template>
  <div class="vocab image-view" :class="imageViewClasses">
    <img
      v-bind="$attrs"
      :alt="alternateText"
      :src="source"/>
    <div
      v-if="isHoverable && hasTopAddons"
      class="addons top">
      <div class="pad">
        <!-- @slot Top add-ons go here -->
        <slot name="topAddons"/>
      </div>
    </div>
    <div
      v-if="isHoverable && hasBottomAddons"
      class="addons bottom">
      <div class="pad">
        <!-- @slot Bottom add-ons go here -->
        <slot name="bottomAddons">
          {{ title }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
  import Scaled from '@/mixins/scaled'

  import Circleable from '@/mixins/circleable'

  /**
   * ### An image speaks a thousand words.
   *
   * An image is a better way to convey an idea, a message or any piece of
   * information for that matter. Images create an impact deeper than text and
   * are easier to remember.
   */
  export default {
    name: 'ImageView',
    mixins: [
      Scaled,

      Circleable
    ],
    inheritAttrs: false,
    props: {
      /**
       * _the source of the image_
       *
       * This must point to a valid image URL.
       */
      source: {
        type: String,
        required: true
      },
      /**
       * _the alternative text for the image_
       *
       * This text is read by screen-readers and appears when image could not
       * be loaded.
       */
      alternateText: {
        type: String,
        required: true
      },
      /**
       * _the title of the image_
       *
       * This is shown in the bottom add-on section if `isHoverable` is `true`.
       */
      title: {
        type: String
      },
      /**
       * _dimension along which size is primarily constrained_
       *
       * ∈ {`'height'`, `'width`'}
       */
      primaryDimension: {
        type: String,
        default: 'height',
        validator: val => ['height', 'width'].includes(val)
      },
      /**
       * _whether to center the image when inline with text_
       */
      isCentered: {
        type: Boolean,
        default: false
      },
      /**
       * _whether to reveal information in top and bottom black bars_
       */
      isHoverable: {
        type: Boolean,
        default: false
      },
      size: {
        default: '' // Overrides the default to not be `'normal'`
      }
    },
    computed: {
      imageViewClasses: function () {
        return [
          ...this.scaledClasses,

          ...this.circleableClasses,

          {
            'centered': this.isCentered,
            'hoverable': this.isHoverable
          },
          this.primaryDimension ? `${this.primaryDimension}-constrained` : ''
        ]
      },

      hasTopAddons: function () {
        return this.$slots.topAddons
      },
      hasBottomAddons: function () {
        return this.title || this.$slots.bottomAddons
      }
    }
  }
</script>

<style src="@creativecommons/vocabulary/css/elements/ImageView.css">
</style>
