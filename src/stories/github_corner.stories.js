export default { title: 'GitHubCorner' }

const GitHubCornerSVG = '' +
'<svg width="80" height="80" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">' +
'<use href="logos/github_corner.svg"></use>' +
'</svg>'

export const Default = () => `
<a
  class="vocab github-corner"
  aria-label="View source on GitHub">
    ${GitHubCornerSVG}
</a>
`

export const Inverted = () => `
<a
  class="vocab github-corner is-inverted"
  aria-label="View source on GitHub">
    ${GitHubCornerSVG}
</a>
`

export const LeftAligned = () => `
<a
  class="vocab github-corner left-cornered"
  aria-label="View source on GitHub">
    ${GitHubCornerSVG}
</a>
`
