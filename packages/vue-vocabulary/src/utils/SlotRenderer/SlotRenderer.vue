<script>
  /**
   * ### SlotRenderer renders a VNode slot.
   *
   * SlotRenderer is used to render a given slot from a given VNode. It is a
   * render()-based functional component that creates a component using the
   * given tag containing the component passed to this VNode via a slot.
   *
   * @see Inspired by [SlotComponent@Buefy](https://github.com/buefy/buefy/blob/dev/src/utils/SlotComponent.js).
   */
  export default {
    name: 'SlotRenderer',
    props: {
      /**
       * _the VNode whose slot is being rendered_
       */
      component: {
        type: Object,
        required: true
      },
      /**
       * _the name of the slot to be rendered_
       *
       * This refers to the slot name as stored in `this.$slots`. If not
       * provided, `this.$slots.default` will be used.
       */
      name: {
        type: String,
        default: 'default'
      },
      /**
       * _whether the slot is scoped_
       */
      scoped: {
        type: Boolean,
        default: false
      },
      /**
       * _props to pass to the slot, in case the slot is a scoped one_
       */
      props: {
        type: Object
      },
      /**
       * _the parent tag in which to render the VNode slot_
       */
      tag: {
        type: String,
        default: 'div'
      },
      /**
       * _the list of classes to apply to the rendered tag_
       */
      classList: {
        type: Array,
        default: () => []
      },
      /**
       * _the event to listen to in order to update the rendered component_
       */
      event: {
        type: String,
        default: 'hook:updated'
      }
    },
    methods: {
      refresh () {
        this.$forceUpdate()
      },
      isVueComponent () {
        return this.component && this.component._isVue
      },
      getContent () {
        if (this.scoped && this.name in this.component.$scopedSlots) {
          return this.component.$scopedSlots[this.name](this.props)
        }
        if (!this.scoped && this.name in this.component.$slots) {
          return this.component.$slots[this.name]
        }
        return this.$slots.default
      }
    },
    created () {
      if (this.isVueComponent()) {
        this.component.$on(this.event, this.refresh)
      }
    },
    beforeDestroy () {
      if (this.isVueComponent()) {
        this.component.$off(this.event, this.refresh)
      }
    },
    render (createElement) {
      if (this.isVueComponent()) {
        return createElement(
          this.tag,
          {
            class: this.classList
          },
          [
            this.getContent()
          ]
        )
      }
      return null
    }
  }
</script>
