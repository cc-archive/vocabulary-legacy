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
              <a :href="link.href">{{ link.text }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="column" id="contact">
        <a href="https://creativecommons.org/about/contact">
          <Heading :level="6">
            We'd love to hear from you!
          </Heading>
        </a>
        <address>
          Creative Commons<br/>
          PO Box 1866, Mountain View, CA 94042
        </address>
        <ul class="contacts">
          <li v-for="(contact, index) in contacts" :key="index">
            <a :href="contact.href">{{ contact.text }}</a>
          </li>
        </ul>
      </div>
      <div class="column" id="custom">
        <!-- @slot Content goes here -->
        <slot>
          <div>
            "Computers are useless. They can only give you answers."
            <p>
              &mdash; Pablo Picasso
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
            text: 'Contact',
            href: 'https://creativecommons.org/about/contact/'
          },
          {
            text: 'Privacy',
            href: 'https://creativecommons.org/privacy/'
          },
          {
            text: 'Policies',
            href: 'https://creativecommons.org/policies'
          },
          {
            text: 'Terms',
            href: 'https://creativecommons.org/terms/'
          }
        ],
        contacts: [
          {
            text: 'info@creativecommons.org',
            href: 'mailto:info@creativecommons.org'
          },
          {
            text: '1-415-429-6753',
            href: 'tel:1-415-429-6753'
          },
          {
            text: 'Frequently Asked Questions',
            href: 'https://creativecommons.org/faq'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Footer.styl">
</style>
