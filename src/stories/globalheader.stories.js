import { withKnobs, select } from '@storybook/addon-knobs'

export default { title: 'Global Header', decorators: [withKnobs] }

import { CCLetterheart } from './logos.stories'
import { ButtonDonate } from './buttons.stories'

export const Main = () => {
     const BarStatusSel = {
        Open: 'is-active',
        Close: ''
    }

    const BarStatus = select('Bar Status', BarStatusSel, BarStatusSel.Open);
    return `
        <div class="cc-global-header ${BarStatus}">
        <div class="container padding-vertical-normal">
            <a href="#" class="open-tab">Explore CC</a>
            <header class="global-header-header level">
                <div class="level-left">
                    <h3>Explore Creative Commons</h3>
                </div>
                <div class="level-right">
                    <a class="button donate">
                        ${CCLetterheart()} Donate now
                    </a>
                </div>
            </header>
            <nav class="navbar" role="navigation" aria-label="global navigation">
                <div class="navbar-menu is-active">
                    <a href="#" class="navbar-item">
                        <h5>CC Search</h5>
                        <span class="item-description">
                            Find openly licensed material for creative and educational reuse
                        </span>
                    </a>
                    <a href="#" class="navbar-item">
                        <h5>Global Network</h5>
                        <span class="item-description">
                            Join a global community working wo strenghten the Commons
                        </span>
                    </a>
                    <a href="#" class="navbar-item">
                        <h5>Certificate Program</h5>
                        <span class="item-description">
                            Become an expert in creating and engaging with openly licensed materials
                        </span>
                    </a>
                    <a href="#" class="navbar-item">
                        <h5>Global Summit</h5>
                        <span class="item-description">
                            Attend oir annual event, promoting the power of open licensing
                        </span>
                    </a>
                    <a href="#" class="navbar-item">
                        <h5>CC Open Source</h5>
                        <span class="item-description">
                            Help us build products that maximize creativity and innovation
                        </span>
                    </a>
                </div>
            </nav>
        </div>
        </div>
        `
}
