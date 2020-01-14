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
            <div class="font">
              {{ $t('fonts').toLocaleLowerCase() }}
            </div>
          </template>
          <ul>
            <li>
              <i18n path="definition.personality" tag="span">
                <template #creativecommons>{{ $t('creativecommons') }}</template>
              </i18n>
            </li>
          </ul>
          <template #seeAlso>
            <a :href="baseVocabularyHref">
              {{ $t('vo_cab_u_lar_y') }}</a>
          </template>
        </Definition>
      </Container>
    </main>

    <Footer>
      <template #logo>
        <a :href="baseVocabularyHref">
          <span class="logo">
            <BrandImagery
              type="lettermark"
              color="white"
              size="small"
              is-centered/>
            &nbsp;
            <BrandImagery
              brand="fonts"
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
            <a :href="vueVocabularyHref">
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
        </div>
        <Locale/>
      </div>
    </Footer>
  </div>
</template>

<script>
  import {
    Heading,
    Paragraph,
    Container,
    BrandImagery,
    Definition,
    Footer,
    GitHubCorner,
    Locale,
    Quote
  } from '@creativecommons/vue-vocabulary'

  import '@creativecommons/vocabulary/css/index.css'

  /**
   * ### Index is the homepage of Fonts.
   *
   * When people visit the Fonts homepage, they will see this page.
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
      GitHubCorner,
      Locale,
      Quote
    },
    data: function () {
      const libraryHref = 'https://creativecommons.github.io/cc-fonts'

      const baseVocabularyHref = 'https://creativecommons.github.io/cc-vocabulary'
      const vueVocabularyHref = 'https://creativecommons.github.io/cc-vue-vocabulary/'

      const repoSlug = 'creativecommons/fonts'
      const repoHref = `https://github.com/${repoSlug}`

      let links = [
        {
          key: 'links.github',
          href: repoHref
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
        libraryHref,
        baseVocabularyHref,
        vueVocabularyHref,
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
