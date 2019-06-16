<template>
  <footer>
    <!-- TODO Use grid -->
    <Container class="grid">
      <div class="column" id="branding">
        <img
          src="@/assets/logo/wordmark_white.svg"
          alt="CC wordmark"
          class="logo"/>
        <div class="links">
          <ul>
            <li v-for="(link, index) in links" :key="index">
              <a :href="link.href">{{ $t(`links.${link.text}`) }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="column" id="contact">
        <a href="https://creativecommons.org/about/contact">
          <Heading :level="6" v-t="'lovetohear'">
          </Heading>
        </a>
        <address v-html="$t('address')">
        </address>
        <ul class="contacts">
          <li v-for="(contact, index) in contacts" :key="index">
            <a :href="contact.href">{{ $t(`contacts.${contact.text}`) }}</a>
          </li>
        </ul>
      </div>
      <div class="column" id="custom">
        <!-- @slot Content goes here -->
        <slot>
          <div>
            {{ $t('useless') }}
            <p>
              &mdash; {{ $t('picasso') }}
            </p>
          </div>
        </slot>
      </div>
    </Container>
  </footer>
</template>

<script>
  import Heading from '@/elements/Heading/Heading'
  import Container from '@/elements/Container/Container'

  export default {
    name: 'Footer',
    components: {
      Heading,
      Container
    },
    data: function () {
      return {
        links: [
          {
            text: 'contact',
            href: 'https://creativecommons.org/about/contact/'
          },
          {
            text: 'privacy',
            href: 'https://creativecommons.org/privacy/'
          },
          {
            text: 'policies',
            href: 'https://creativecommons.org/policies'
          },
          {
            text: 'terms',
            href: 'https://creativecommons.org/terms/'
          }
        ],
        contacts: [
          {
            text: 'email',
            href: 'mailto:info@creativecommons.org'
          },
          {
            text: 'phone',
            href: 'tel:1-415-429-6753'
          },
          {
            text: 'faq',
            href: 'https://creativecommons.org/faq'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Footer.styl">
</style>

<i18n src="./lang.json">
</i18n>
