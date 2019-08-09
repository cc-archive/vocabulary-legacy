<template>
  <footer class="vocab footer">
    <Container>
      <Grid>
        <GridCell
          id="branding-column"
          :span-set="[12, 12, 4, 4, 4]">
          <div class="logo">
            <!-- @slot Logo goes here -->
            <slot name="logo">
              <BrandImagery color="white"/>
            </slot>
          </div>

          <div class="links">
            <!-- @slot Links go here -->
            <slot name="links">
              <ul>
                <li
                  v-for="(link, index) in links"
                  :key="index">
                  <a :href="link.href">
                    {{ $t(link.key) }}
                  </a>
                </li>
              </ul>
            </slot>
          </div>
        </GridCell>

        <GridCell
          id="contact-column"
          :span-set="[12, 6, 4, 4, 4]">
          <Heading :level="6">{{ $t('lovetohear') }}</Heading>

          <div class="communication">
            <slot name="communication">
              <address v-html="$t('address')"></address>
            </slot>
          </div>

          <div class="contacts">
            <!-- @slot Contacts go here -->
            <slot name="contacts">
              <ul>
                <li
                  v-for="(contact, index) in contacts"
                  :key="index">
                  <a :href="contact.href">
                    {{ $t(contact.key) }}
                  </a>
                </li>
              </ul>
            </slot>
          </div>
        </GridCell>

        <GridCell
          id="custom"
          :span-set="[12, 6, 4, 4, 4]">
          <!-- @slot Content goes here -->
          <slot>
            <div>
              <Quote
                :attribution="$t('quote.picasso')"
                is-inverted>
                <span v-html="$t('quote.useless')"></span>
              </Quote>
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

  import BrandImagery from '@/patterns/BrandImagery/BrandImagery'
  import Quote from '@/patterns/Quote/Quote'

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
      Container,
      Grid,
      GridCell,
      Quote
    },
    data: function () {
      return {
        links: [
          {
            key: 'links.contact',
            href: 'https://creativecommons.org/about/contact/'
          },
          {
            key: 'links.privacy',
            href: 'https://creativecommons.org/privacy/'
          },
          {
            key: 'links.policies',
            href: 'https://creativecommons.org/policies'
          },
          {
            key: 'links.terms',
            href: 'https://creativecommons.org/terms/'
          }
        ],
        contacts: [
          {
            key: 'contacts.email',
            href: 'mailto:info@creativecommons.org'
          },
          {
            key: 'contacts.phone',
            href: 'tel:1-415-429-6753'
          },
          {
            key: 'contacts.faq',
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
