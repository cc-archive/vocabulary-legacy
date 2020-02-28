import { CCLogomark } from './logos.stories'

export default { title: 'Header' }

export const bigHeader = () =>
    `<header class="header big">
        <div class="container">
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="#" >
                    ${CCLogomark()}
                    </a>

                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-end">
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a href="#" class="navbar-link" is-active>
                            <h5>lorem </h5>
                        </a>
                        <div class="navbar-dropdown">
                            <a class="navbar-item"><h5> item one </h5></a>
                            <a class="navbar-item"><h5> item two </h5></a>
                            <a class="navbar-item"><h5> item three </h5></a>
                            <a class="navbar-item"><h5> item four </h5></a>
                            <a class="navbar-item"><h5> item five </h5></a>
                        </div>
                    </div>
                    <a href="#" class="navbar-item">
                        <h5>lorem </h5>
                    </a>
                    <a href="#" class="navbar-item">
                        <h5>lorem </h5>
                    </a>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a href="#" class="navbar-link">
                            <h5>lorem </h5>
                        </a>
                        <div class="navbar-dropdown">
                            <a class="navbar-item"><h5> item one </h5></a>
                            <a class="navbar-item"><h5> item two </h5></a>
                            <a class="navbar-item"><h5> item three </h5></a>
                            <a class="navbar-item"><h5> item four </h5></a>
                            <a class="navbar-item"><h5> item five </h5></a>
                        </div>
                    </div>
                    <a href="#" class="navbar-item">
                        <h5>lorem </h5>
                    </a>
            
                </div>
            </nav>
        </div>
    </header>
`

export const smallHeader = () =>
    `<header class="header small">
        <div class="container">
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="#" >
                    ${CCLogomark()}
                    </a>

                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-end">
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a href="#" class="navbar-link" is-active>
                            <h6>lorem </h6>
                        </a>
                        <div class="navbar-dropdown">
                            <a class="navbar-item"><h6> item one </h6></a>
                            <a class="navbar-item"><h6> item two </h6></a>
                            <a class="navbar-item"><h6> item three </h6></a>
                            <a class="navbar-item"><h6> item four </h6></a>
                            <a class="navbar-item"><h6> item five </h6></a>
                        </div>
                    </div>
                    <a href="#" class="navbar-item">
                        <h6>lorem </h6>
                    </a>
                    <a href="#" class="navbar-item">
                        <h6>lorem </h6>
                    </a>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a href="#" class="navbar-link">
                            <h6>lorem </h6>
                        </a>
                        <div class="navbar-dropdown">
                            <a class="navbar-item"><h6> item one </h6></a>
                            <a class="navbar-item"><h6> item two </h6></a>
                            <a class="navbar-item"><h6> item three </h6></a>
                            <a class="navbar-item"><h6> item four </h6></a>
                            <a class="navbar-item"><h6> item five </h6></a>
                        </div>
                    </div>
                    <a href="#" class="navbar-item">
                        <h6>lorem </h6>
                    </a>
            
                </div>
            </nav>
        </div>
    </header>
`
