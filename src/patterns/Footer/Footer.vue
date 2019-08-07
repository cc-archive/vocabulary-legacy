<template>
  <footer class="vocab footer">
    <Container>
      <Grid density="sparser">
        <GridCell :span-set="[12, 12, 4, 4, 4]" id="branding-column">
          <div class="logo">
            <!-- @slot Logo goes here -->
            <slot name="logo">
              <BrandImagery color="white"/>
            </slot>
          </div>

          <div class="links">
            <ul class="link-list">
              <li
                v-for="(link, index) in links"
                :key="index">
                <a :href="link.href">
                  {{ link.text }}
                </a>
              </li>
            </ul>
          </div>
        </GridCell>

        <GridCell :span-set="[12, 6, 4, 4, 4]" id="contact-column">
          <Heading :level="6">{{ $t('lovetohear') }}</Heading>

          <div class="communication">
            <slot name="communication">
              <address v-html="$t('address')"></address>
            </slot>
          </div>

          <ul class="contacts">
            <li v-for="(contact, index) in contacts" :key="index">
              <a :href="contact.href">
                {{ contact.text }}
              </a>
            </li>
          </ul>
        </GridCell>

        <GridCell :span-set="[12, 6, 4, 4, 4]" id="custom">
          <!-- @slot Content goes here -->
          <slot>
            <div>
              <Paragraph>
                {{ $t('useless') }}
              </Paragraph>
              <Paragraph>
                &mdash; {{ $t('picasso') }}
              </Paragraph>
            </div>
          </slot>
        </GridCell>
      </Grid>
    </Container>
  </footer>
</template>

<script>
  import BrandImagery from '@/elements/BrandImagery/BrandImagery'
  import Heading from '@/elements/Heading/Heading'
  import Paragraph from '@/elements/Paragraph/Paragraph'

  import Container from '@/layouts/Container/Container'
  import Grid from '@/layouts/Grid/Grid'
  import GridCell from '@/layouts/Grid/GridCell'

  /**
   * ### Footer concludes the page.
   *
   * The footer displays information about the site such as its developers and
   * maintainers as well as licensing information.
   */
  export default {
    name: 'Footer',
    components: {
      BrandImagery,
      Heading,
      Paragraph,
      Container,
      Grid,
      GridCell
    },
    props: {
      /**
       * _an alternative list of links to show below the logo_
       */
      alternativeLinks: {
        type: Array,
        validator: val => val.every(
          link => ['text', 'href'].every(
            key => key in link
          )
        )
      },
      /**
       * _an alternative list of contact channels to show below the address_
       */
      alternativeContacts: {
        type: Array,
        validator: val => val.every(
          link => ['text', 'href'].every(
            key => key in link
          )
        )
      }
    },
    data: function () {
      return {
        links: this.alternativeLinks || [
          {
            text: this.$t('links.contact'),
            href: 'https://creativecommons.org/about/contact/'
          },
          {
            text: this.$t('links.privacy'),
            href: 'https://creativecommons.org/privacy/'
          },
          {
            text: this.$t('links.policies'),
            href: 'https://creativecommons.org/policies'
          },
          {
            text: this.$t('links.terms'),
            href: 'https://creativecommons.org/terms/'
          }
        ],
        contacts: this.alternativeContacts || [
          {
            text: this.$t('contacts.email'),
            href: 'mailto:info@creativecommons.org'
          },
          {
            text: this.$t('contacts.phone'),
            href: 'tel:1-415-429-6753'
          },
          {
            text: this.$t('contacts.faq'),
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
