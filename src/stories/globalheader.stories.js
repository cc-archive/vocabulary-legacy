import { withKnobs, select } from '@storybook/addon-knobs'
import { CCLetterheart, CCLogomarkWhite } from './logos.stories'

export default { title: 'Global Header', decorators: [withKnobs] }

export const Main = () => {
  const BarStatusSel = {
    Open: 'is-active',
    Close: ''
  }

  const BarStatus = select('Bar Status', BarStatusSel, BarStatusSel.Open)
  return `
      <div class="cc-global-header ${BarStatus}">
        <div class="container padding-vertical-normal">
          <a href="#" class="open-tab">Explore CC</a>
          <div class="level">
            <div class="level-left">
              <header class="global-header-header">
                <a href="https://creativecommons.org" target="_blank" class="main-logo">
                  ${CCLogomarkWhite()}
                </a>
              </header>
            </div> 
          </div>
          <div class="columns">
            <div class="column is-one-third">
              <aside class="donate-section">
                <h5>Our work relies on you!</h5>
                <p>Help us keep the internet free and open.</p>
                <a class="button donate">
                  ${CCLetterheart()} Donate now
                </a>
              </aside>
            </div>
            <div class="column">
              <nav class="navbar" role="navigation" aria-label="global navigation">
                <div class="navbar-menu is-active">
                  <a href="https://network.creativecommons.org" target="_blank" class="navbar-item">
                    <strong>Global Network</strong>
                    <span class="item-description">
                        Join a global community working wo strenghten the Commons
                    </span>
                  </a>
                  <a href="https://certificate.creativecommons.org" target="_blank" class="navbar-item">
                    <strong>Certificate Program</strong>
                    <span class="item-description">
                        Become an expert in creating and engaging with openly licensed materials
                    </span>
                  </a>
                  <a href="https://summit.creativecommons.org" target="_blank" class="navbar-item">
                    <strong>Global Summit</strong>
                    <span class="item-description">
                        Attend oir annual event, promoting the power of open licensing
                    </span>
                  </a>
                  <a href="https://chooser-beta.creativecommons.org" target="_blank" class="navbar-item">
                    <strong>License Chooser</strong>
                    <span class="item-description">
                        Get help choosing the appropiate license for your work
                    </span>
                  </a>
                  <a href="https://search.creativecommons.org" target="_blank" class="navbar-item">
                    <strong>CC Search</strong>
                    <span class="item-description">
                        Find openly licensed material for creative and educational reuse
                    </span>
                  </a>
                  <a href="https://opensource.creativecommons.org" target="_blank" class="navbar-item">
                    <strong>CC Open Source</strong>
                    <span class="item-description">
                        Help us build products that maximize creativity and innovation
                    </span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      `
}
