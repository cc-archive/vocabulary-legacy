export default { title: 'GithubCorner' }

const GithubCornerSVG = '' +
'<svg width="80" height="80" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">' +
'<use href="logos/github_corner.svg"></use>' +
'</svg>'

export const GithubCorner = () => `
<a
  class="vocab github-corner"
  :class="gitHubCornerClasses"
  :href="url"
  :target="target"
  :rel="rel"
  aria-label="View source on GitHub">
    ${GithubCornerSVG}
</a>
`

export const GithubCornerInverted = () => `
<a
  class="vocab github-corner is-inverted"
  :class="gitHubCornerClasses"
  :href="url"
  :target="target"
  :rel="rel"
  aria-label="View source on GitHub">
    ${GithubCornerSVG}
</a>
`

export const GithubCornerLeft = () => `
<a
  class="vocab github-corner left-cornered"
  :class="gitHubCornerClasses"
  :href="url"
  :target="target"
  :rel="rel"
  aria-label="View source on GitHub">
    ${GithubCornerSVG}
</a>
`

export const GithubCornerRight = () => `
<a
  class="vocab github-corner left-cornered"
  :class="gitHubCornerClasses"
  :href="url"
  :target="target"
  :rel="rel"
  aria-label="View source on GitHub">
    ${GithubCornerSVG}
</a>
`
