<template>
  <div class="vocab index">
    <GitHubCorner
      :repo="repoSlug"
      position="absolute"/>

    <main>
      <Container>
        <Definition
          :pronunciation="$t('pronunciation')"
          :part-of-speech="$t('definition.noun')">
          <template #word>
            {{ $t('vue').toLocaleLowerCase() }}-{{ $t('vo_cab_u_lar_y') }}
          </template>
          <ul>
            <li>
              <i18n path="definition.cohesive" tag="span">
                <template #vue>{{ $t('vue') }}</template>
                <template #creativecommons>{{ $t('creativecommons') }}</template>
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
        <a :href="baseLibraryHref">
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
        </a>
      </template>

      <template #links>
        <ul>
          <li
            v-for="(link, index) in links"
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
          <span v-html="$t('communication.quote')"/>
        </Quote>
        <Paragraph>
          {{ $t('communication.ie') }}
        </Paragraph>
      </template>

      <template #contacts>
        <ul>
          <li
            v-for="(contact, index) in contacts"
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
            <a :href="vueLibraryHref">
              {{ $t('vue') }} {{ $t('vocabulary') }}</a> <!-- for the fullstops -->
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
  import GitHubCorner from '@/elements/GitHubCorner/GitHubCorner'
  import Heading from '@/elements/Heading/Heading'
  import Paragraph from '@/elements/Paragraph/Paragraph'

  import Container from '@/layouts/Container/Container'

  import BrandImagery from '@/patterns/BrandImagery/BrandImagery'
  import Definition from '@/patterns/Definition/Definition'
  import Footer from '@/patterns/Footer/Footer'
  import Locale from '@/patterns/Locale/Locale'
  import Quote from '@/patterns/Quote/Quote'

  /**
   * ### Index is the homepage of Vocabulary.
   *
   * When people visit the Vocabulary homepage, they will see this page.
   */
  export default {
    name: 'Index',
    components: {
      GitHubCorner,
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

      const baseLibraryHref = 'https://creativecommons.github.io/cc-vocabulary'
      const vueLibraryHref = 'https://creativecommons.github.io/cc-vue-vocabulary/'

      const repoSlug = 'creativecommons/vue-vocabulary'
      const repoHref = `https://github.com/${repoSlug}`

      let links = [
        {
          key: 'links.github',
          href: repoHref
        },
        {
          key: 'vo_cab_u_lar_y',
          href: baseLibraryHref
        }
      ]
      let contacts = [
        {
          key: 'contacts.report',
          href: `${repoHref}/issues/new?labels=improvement%3Abug&template=bug_report.md&title=`
        },
        {
          key: 'contacts.request',
          href: `${repoHref}/issues/new?labels=improvement%3Afeature&template=feature_request.md&title=`
        }
      ]
      return {
        styleguideHref,
        storybookHref,
        baseLibraryHref,
        vueLibraryHref,
        repoSlug,
        repoHref,
        links,
        contacts
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Index.styl">
</style>

<i18n src="./lang.json">
</i18n>
