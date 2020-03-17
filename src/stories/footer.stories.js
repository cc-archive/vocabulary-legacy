import { svgCode } from './logos.stories.mdx'

export default { title: 'Footer' }

export const Main = () => {
  return `
    <footer class="main-footer">
      <div class="container">
        <div class="columns">
          <div class="column">
            <a href="https://creativecommons.org" class="main-logo margin-bottom-bigger">
              <span class="has-text-white">${svgCode(304, 73, 'cc/logomark', 'creativecommons')}</span>
            </a>
            <p>
              <address class="margin-bottom-normal"> Creative Commons <br> PO Box 1866, Mountain View CA 94042</address>
              <a href="mailto:info@creativecommons.org" class="mail">info@creativecommons.org</a>
              <a href="tel://+1-415-429-6753" class="phone">+1-415-429-6753</a>
            </p>
          </div>
          <div class="column is-half">
            <nav class="footer-navigation navbar">
              <ul class="navbar-menu">
                <li class="item-container">
                  <a href="#" class="navbar-item">Item 1</a>
                </li>
                <li class="item-container">
                  <a href="#" class="navbar-item">Item 2</a>
                </li>
                <li class="item-container">
                  <a href="#" class="navbar-item">Item 3</a>
                </li>
                <li class="item-container">
                  <a href="#" class="navbar-item">Item 4</a>
                </li>
                <li class="item-container">
                  <a href="#" class="navbar-item">Item 5</a>
                </li>
              </ul>
            </nav>
            <div class="subscription">
              <h5 class="b-header">Subscribe to our newsletter</h5>
              <form class="newsletter">
                <input type="text" class="input" placeholder="Your email">
                <input type="submit" value="subscribe" class="button small">
              </form>
            </div>
            <div class="attribution margin-top-bigger">
              <p class="caption">Except where otherwise <a href="https://creativecommons.org/policies#license" target="_blank">noted</a>, content on this site is licensed under a <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">Creative Commons Attribution 4.0 International license</a>. <a href="https://creativecommons.org/website-icons" target="_blank">Icons</a> by Noun Project.</p>
            </div>
          </div>
          <div class="column">
            <aside class="donate-section">
              <h5>Our work relies on you!</h5>
              <p>Help us keep the internet free and open.</p>
              <a class="button small donate">
                ${svgCode(80, 72, 'cc/letterheart', 'creativecommons')} Donate now
              </a>
            </aside>
          </div>
        </div>
      </div>
    </footer>
  `
}
