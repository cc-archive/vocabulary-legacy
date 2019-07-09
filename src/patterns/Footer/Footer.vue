<template>
  <footer class="vocab footer">
    <Container>
      <Grid>
        <GridCell :span-set="[12, 6, 4, 4, 4]" id="branding">
          <img
            src="@/assets/logo/wordmark_white.svg"
            alt="CC wordmark"
            class="logo">
          <div class="links">
            <ul class="link-list">
              <li v-for="(link, index) in links" :key="index">
                <a :href="link.href">
                  {{ $t(`links.${link.textKey}`) }}
                </a>
              </li>
            </ul>
          </div>
        </GridCell>
        <GridCell :span-set="[12, 6, 4, 4, 4]" id="contact">
          <a href="https://creativecommons.org/about/contact">
            <Heading :level="6" v-t="'lovetohear'"/>
          </a>
          <address class="address" v-html="$t('address')">
          </address>
          <ul class="contacts">
            <li v-for="(contact, index) in contacts" :key="index">
              <a :href="contact.href">
                {{ $t(`contacts.${contact.textKey}`) }}
              </a>
            </li>
          </ul>
        </GridCell>
        <GridCell :span-set="[12, 6, 4, 4, 4]" id="custom">
          <!-- @slot Content goes here -->
          <slot>
            <div>
              {{ $t('useless') }}
              <p>
                &mdash; {{ $t('picasso') }}
              </p>
            </div>
          </slot>
        </GridCell>
      </Grid>
    </Container>
  </footer>
</template>

<script>
  import Heading from '@/elements/Heading/Heading'
  import Container from '@/layouts/Container/Container'
  import Grid from '@/layouts/Grid/Grid'
  import GridCell from '@/layouts/Grid/GridCell'

  /**
   * ## Footer concludes the page.
   *
   * The footer displays information about the site such as its developers and
   * maintainers as well as licensing information.
   */
  export default {
    name: 'Footer',
    components: {
      Heading,
      Container,
      Grid,
      GridCell
    },
    data: function () {
      return {
        links: [
          {
            textKey: 'contact',
            href: 'https://creativecommons.org/about/contact/'
          },
          {
            textKey: 'privacy',
            href: 'https://creativecommons.org/privacy/'
          },
          {
            textKey: 'policies',
            href: 'https://creativecommons.org/policies'
          },
          {
            textKey: 'terms',
            href: 'https://creativecommons.org/terms/'
          }
        ],
        contacts: [
          {
            textKey: 'email',
            href: 'mailto:info@creativecommons.org'
          },
          {
            textKey: 'phone',
            href: 'tel:1-415-429-6753'
          },
          {
            textKey: 'faq',
            href: 'https://creativecommons.org/faq'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" src="./Footer.styl">
</style>

<i18n src="./lang.json">
</i18n>
