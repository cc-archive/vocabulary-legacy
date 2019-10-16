<template>
  <div class="vocab index">
    <main>
      <Container>
        <Definition
          :pronunciation="$t('pronunciation')"
          :part-of-speech="$t('definition.noun')">
          <template #word>
            {{ $t('vo_cab_u_lar_y') }}
          </template>
          <ul>
            <li class="unimportant">
              {{ $t('definition.unimportant') }}
            </li>
            <li>
              <i18n path="definition.cohesive" tag="span">
                {{ $t('creativecommons') }}
              </i18n>
            </li>
          </ul>
          <template #seeAlso>
            <a :href="styleguideHref">
              {{ $t('definition.seealso.styleguide') }}</a>,
            <a :href="storybookHref">
              {{ $t('definition.seealso.storybook') }}</a>
          </template>
        </Definition>
      </Container>
    </main>

    <Footer>
      <template #logo>
        <span class="logo">
          <BrandImagery
            type="lettermark"
            color="white"
            size="small"
            is-centered/>
          &nbsp;
          <BrandImagery
            brand="vocabulary"
            color="white"
            size="small"
            is-centered/>
        </span>
      </template>

      <template #links>
        <ul>
          <li
            v-for="(link, index) in alternativeLinks"
            :key="index">
            <a :href="link.href">
              {{ $t(link.key) }}
            </a>
          </li>
        </ul>
      </template>

      <template #communication>
        <Quote
          :attribution="$t('communication.rumi')">
          <span v-html="$t('communication.quote')"></span>
        </Quote>
        <Paragraph>
          {{ $t('communication.ie') }}
        </Paragraph>
      </template>

      <template #contacts>
        <ul>
          <li
            v-for="(contact, index) in alternativeContacts"
            :key="index">
            <a :href="contact.href">
              {{ $t(contact.key) }}
            </a>
          </li>
        </ul>
      </template>

      <div class="panel">
        <div>
          <Heading :level="6">{{ $t('panel.credits') }}</Heading>
          <i18n path="panel.builtusing" tag="span">
            <a href="https://creativecommons.github.io/cc-vocabulary/">
              {{ $t('vocabulary') }}</a> <!-- for the fullstops -->
          </i18n>
          <br/>
          <i18n path="panel.deploysby" tag="span">
            <a href="https://netlify.com/">
              {{ $t('panel.netlify') }}</a> <!-- for the fullstops -->
          </i18n>
          <br/>
          <i18n path="panel.iconsby" tag="span">
            <a href="https://fontawesome.com/">
              {{ $t('panel.fa') }}</a> <!-- for the fullstops -->
          </i18n>
          <br/>
          <i18n path="panel.imagesby" tag="span">
            <a href="https://commons.wikimedia.org/">
              {{ $t('panel.wikimedia') }}</a> <!-- for the fullstops -->
          </i18n>
        </div>
        <Locale/>
      </div>
    </Footer>
  </div>
</template>

<script>
  import Heading from '@/elements/Heading/Heading'
  import Paragraph from '@/elements/Paragraph/Paragraph'

  import Container from '@/layouts/Container/Container'

  import BrandImagery from '@/patterns/BrandImagery/BrandImagery'
  import Definition from '@/patterns/Definition/Definition'
  import Footer from '@/patterns/Footer/Footer'
  import Locale from '@/patterns/Locale/Locale'
  import Quote from '@/patterns/Quote/Quote'

  /**
   * ### Index is the homepage of CC Vocabulary.
   *
   * When people visit the CC Vocabulary homepage, they will see this page.
   */
  export default {
    name: 'Index',
    components: {
      Heading,
      Paragraph,
      Container,
      BrandImagery,
      Definition,
      Footer,
      Locale,
      Quote
    },
    data: function () {
      const styleguideHref = 'styleguide'
      const storybookHref = 'storybook'

      let alternativeLinks = [
        {
          key: 'links.github',
          href: 'https://github.com/creativecommons/cc-vocabulary'
        },
        {
          key: 'links.umd',
          href: 'https://codepen.io/dhruvkb/pen/dxRJYV'
        },
        {
          key: 'links.css',
          href: 'https://codepen.io/dhruvkb/pen/bXmmZE'
        }
      ]
      let alternativeContacts = [
        {
          key: 'contacts.report',
          href: 'https://github.com/creativecommons/cc-vocabulary/issues/new?labels=improvement%3A+bug&template=bug_report.md&title='
        },
        {
          key: 'contacts.request',
          href: 'https://github.com/creativecommons/cc-vocabulary/issues/new?labels=improvement%3A+feature&template=feature_request.md&title='
        }
      ]
      return {
        styleguideHref,
        storybookHref,
        alternativeLinks,
        alternativeContacts
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Index.styl">
</style>

<i18n src="./lang.json">
</i18n>
