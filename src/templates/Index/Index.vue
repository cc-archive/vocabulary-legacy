<template>
  <div class="index" :class="{'easter-egg': isEasterEggMode}">
    <main>
      <Hello
        v-if="isEasterEggMode"
        inverted
        heading="Welcome!"
        tagline=" "
        logoType="none"
        title=";-)">
        <Heading :level="4" inverted>Everything is fine.</Heading>
      </Hello>
      <Hello
        v-else
        inverted/>
    </main>
    <Footer>
      <Heading :level="6">Let's talk freely!</Heading>
      <Locale/>
    </Footer>
  </div>
</template>

<script>
  import Heading from '@/elements/Heading/Heading'

  import Hello from '@/patterns/Hello/Hello'
  import Footer from '@/patterns/Footer/Footer'
  import Locale from '@/patterns/Locale/Locale'

  export default {
    name: 'Index',
    components: {
      Locale,
      Heading,
      Hello,
      Footer
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
