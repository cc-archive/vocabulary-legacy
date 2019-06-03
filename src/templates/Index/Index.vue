<template>
  <div :class="isEasterEggMode? 'index--easter-egg': 'index'">
    <Hello
      v-if="isEasterEggMode"
      inverted
      heading="Welcome!"
      tagline=" "
      :show-logo="false"
      title=";-)">
      <Heading :level="4" inverted>Everything is fine.</Heading>
    </Hello>
    <Hello
      v-else
      inverted/>
  </div>
</template>

<script>
  import Heading from '@/elements/Heading/Heading'
  import Hello from '@/patterns/Hello/Hello'

  export default {
    name: 'Index',
    components: {
      Heading,
      Hello
    },
    props: {
      /**
       * whether to force Easter Egg mode on the component
       *
       * This is useful in debugging but should not be enabled in practice.
       */
      forceEasterEggMode: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      isEasterEggMode: function () {
        let fraction = 0.01 // Lower value means rarer visibility
        return this.forceEasterEggMode || Math.random() <= fraction
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Index.styl">
</style>
