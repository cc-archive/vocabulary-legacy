<template>
<footer class="main-footer">
  <div class="container">
    <div class="columns">
      <div class="column is-one-quarter">
        <a href="https://creativecommons.org" aria-label="home" class="main-logo margin-bottom-bigger">
          <span class="has-text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 304 73">
              <use href="@creativecommons/vocabulary/assets/logos/cc/logomark.svg#logomark"></use>
            </svg>
          </span>
        </a>
        <div>
          <address class="margin-bottom-normal">Creative Commons<br/>PO Box 1866, Mountain View CA 94042</address>
          <a href="mailto:info@creativecommons.org" class="mail">info@creativecommons.org</a><br/>
          <a href="tel://+1-415-429-6753" class="phone">+1-415-429-6753</a>
        </div>
        <div class="margin-vertical-large">
          <a href="https://www.instagram.com/creativecommons" aria-label="instagram" class="social has-text-white" target="_blank" rel="noopener">
            <i class="icon margin-right-small is-size-4">instagram</i>
          </a>
          <a href="https://www.twitter.com/creativecommons" aria-label="twitter" class="social has-text-white" target="_blank" rel="noopener">
            <i class="icon margin-right-small is-size-4">twitter</i>
          </a>
          <a href="https://www.facebook.com/creativecommons" aria-label="facebook" class="social has-text-white" target="_blank" rel="noopener">
            <i class="icon margin-right-small is-size-4">facebook</i>
          </a>
          <a href="https://www.linkedin.com/company/creative-commons/" aria-label="linkedin" class="social has-text-white" target="_blank" rel="noopener">
            <i class="icon margin-right-small is-size-4">linkedin</i>
          </a>
        </div>
      </div>
      <div class="column is-three-quarters">
        <div class="columns">
          <div class="column is-full">
            <nav aria-label="footerlinks" class="footer-navigation">
        <ul class="menu">
            <li v-for="link in links" :key="link.content">
                <FooterLink is="a" :target="link.target" :href="link.href" class="menu-item">{{link.content}}</FooterLink>
            </li>
        </ul>
    </nav>
          </div>
        </div>
        <div class="columns">
          <div class="column is-two-thirds">
            <slot>
              <div class="subscription">
                <h5 class="b-header">Subscribe to our newsletter</h5>
                <form class="newsletter">
                  <label for="email" class="is-sr-only">Email to subscribe</label>
                  <input type="text" id="email" class="input" placeholder="Your email">
                  <input type="submit" value="subscribe" class="button small">
                </form>
              </div>
            </slot>
            <div class="attribution margin-top-bigger">
              <p class="caption">
                Except where otherwise
                <a href="https://creativecommons.org/policies#license" target="_blank" rel="noopener">noted</a>,
                content on this site is licensed under a
                <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">Creative Commons Attribution 4.0 International license</a>.
                <a href="https://creativecommons.org/website-icons" target="_blank" rel="noopener">Icons</a>
                by
                <a href="https://fontawesome.com/" target="_blank" rel="noopener">Font Awesome</a>.
              </p>
              <div class="margin-top-smaller">
                <i class="icon margin-right-small is-size-4">cclogo</i>
                <i class="icon margin-right-small is-size-4">ccby</i>
              </div>
            </div>
          </div>
          <div class="column is-one-third">
            <aside class="donate-section">
              <h5>Our work relies on you!</h5>
              <p>Help us keep the internet free and open.</p>
              <a class="button small donate" href="http://creativecommons.org/donate">
                <i class="icon cc-letterheart-filled margin-right-small is-size-5 padding-top-smaller"></i>
                Donate now
              </a>
            </aside>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
</template>

<script>
  /**
   * ### Footer concludes the page.
   *
   * The footer displays information about the site such as its developers and
   * maintainers as well as licensing information.
   */
  import FooterLink from './FooterLink'
  export default {
    name: 'Footer',
    components: {
      FooterLink
    },
    props: {
      links: {
        type: Array[Object],
        required: false,
        validator (value) {
          return value.length <= 7
        },
        default: [
          {
            href: 'https://creativecommons.org/about/contact/',
            content: 'Contact'
          },
          {
            href: 'https://creativecommons.org/privacy/',
            content: 'Privacy'
          },
          {
            href: 'https://creativecommons.org/policies/',
            content: 'Policies'
          },
          {
            href: 'https://creativecommons.org/terms/',
            content: 'Terms'
          }
        ]
      }
    }
  }
</script>
