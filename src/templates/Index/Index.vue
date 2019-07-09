<template>
  <div class="vocab index" :class="indexClasses">
    <main>
      <Hello
        v-if="isComputedEaster"
        is-inverted
        logoType="none">
        <Heading :level="4" is-inverted>{{ $t('welcome') }}!</Heading>
        <Heading :level="4" is-inverted>{{ $t('everythingisfine') }}</Heading>
      </Hello>
      <Hello
        v-else
        is-inverted/>
    </main>
    <Footer>
      <div class="panel">
        <div>
          <Heading :level="6">{{ $t('credits') }}</Heading>
          <i18n path="builtusing" tag="span">
            <a href="https://creativecommons.github.io/cc-vocabulary/">
              {{ $t('ccvocabulary') }}</a> <!-- for the fullstops -->
          </i18n>
          <br/>
          <i18n path="iconsby" tag="span">
            <a href="https://fontawesome.com/">
              {{ $t('fa') }}</a> <!-- for the fullstops -->
          </i18n>
        </div>
        <Locale/>
      </div>
    </Footer>
  </div>
</template>

<script>
  import Heading from '@/elements/Heading/Heading'

  import Hello from '@/patterns/Hello/Hello'
  import Footer from '@/patterns/Footer/Footer'
  import Locale from '@/patterns/Locale/Locale'

  /**
   * ## Index is the homepage of CC Vocabulary.
   *
   * When people visit the CC Vocabulary homepage, they will see this page.
   * Just to be clear, this is different from the styleguide.
   */
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
       * _whether to force Easter Egg mode on the component_
       *
       * This is useful in debugging but should not be enabled in practice.
       */
      isEaster: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      indexClasses: function () {
        return [
          {
            'easter-egg': this.isComputedEaster
          }
        ]
      },
      isComputedEaster: function () {
        let fraction = 0.01 // Lower value means rarer visibility
        return this.isEaster || Math.random() <= fraction
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Index.styl">
</style>

<i18n src="./lang.json">
</i18n>
