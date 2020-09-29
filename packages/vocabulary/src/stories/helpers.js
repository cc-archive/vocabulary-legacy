import { config } from 'storybook-addon-designs'

export const figmaConfig = (nodeId) => config({
  type: 'figma',
  url: `https://www.figma.com/file/l4Mt3dn3Ndtrvrb4aLcwXI/Design-Library?node-id=${nodeId}`
})

export const svgCode = (viewBoxX, viewBoxY, fileName, id) => `<svg
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="xMidYMid meet"
  viewBox="0 0 ${viewBoxX} ${viewBoxY}">
  <use href="logos/${fileName}.svg#${id}"></use>
</svg>`

export const blackText = (content) => `<div class="has-text-black">${content}</div>`

export const whiteText = (content) => `<div class="has-text-white">${content}</div>`

export const header = (color) => 
    `<header>
      <nav class="navbar is-default is-active">
        <div class="navbar-brand">
          <a class="has-text-black">
            <svg
              class="logo"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 304 73">
              <use href="logos/cc/logomark.svg#logomark"></use>
            </svg>
          </a>
          <a role="button" class="navbar-burger is-active" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu is-active">
          <div class="navbar-start">
            <div class="locale">
              <div class="control has-icons-left">
                <div class="select">
                  <select>
                    <option disabled>Select</option>
                    <option selected>English</option>
                    <option>le Français</option>
                    <option>日本語</option>
                    <option>Русский</option>
                    <option>Español</option>
                  </select>
                </div>
                <div class="icon globe is-small is-left ">
                  <i class="icon globe ">locale</i>
                </div>
              </div>
            </div>
            <a class="button small donate" href="http://creativecommons.org/donate">
              <i class="icon cc-letterheart-filled margin-right-small is-size-5 padding-top-smaller"></i>
              Donate
            </a>
          </div>
          <div class="tabs-nav">
            <div class="tabs">
              <ul>
                <li class="menu is-active"><a>Menu</a>
                </li>
                <li class="explore-tab"><a>Explore Creative Commons</a></li>
              </ul>
            </div>
            <div class="tabs-content">
              <div class="tabs-panel is-active">
                <div class="navbar-end">
                  <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link is-arrowless">Dropdown<i class="icon caret-down"></i></a>
                    <div class="navbar-dropdown">
                      <a class="navbar-item">Item 1</a>
                      <a class="navbar-item">Item 2</a>
                      <a class="navbar-item">Item 3</a>
                    </div>
                  </div>
                  <a class="navbar-item">
                    No dropdown
                  </a>
                </div>
              </div>
              <div class="tabs-panel explore"></div>
            </div> 
          </div>
          <div class="navbar-end main-nav">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link is-arrowless">Dropdown<i class="icon caret-down"></i></a>
              <div class="navbar-dropdown">
                <a class="navbar-item">Item 1</a>
                <a class="navbar-item">Item 2</a>
                <a class="navbar-item">Item 3</a>
              </div>
            </div>
            <a class="navbar-item">
              No dropdown
            </a>
          </div>
        </div>
      </nav>
    </header>
    <div style="background-color: ${color}; height: 200px;"></div>`

