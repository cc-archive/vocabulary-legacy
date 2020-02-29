export default { title: 'GitHubCorner' }

const invertedBackground = {
  parameters: {
    backgrounds: [
      { name: 'dark background', value: '#000', default: true },
      { name: 'light background', value: '#fff', default: false }
    ]
  }
}

const GitHubCorner = '' +
  '<svg width="80" height="80" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">' +
  '<use href="github_corner.svg#githubcorner"></use>' +
  '</svg>'

export const Default = () => `
<a
  class="github-corner"
  aria-label="View source on GitHub">
  ${GitHubCorner}
</a>
`

export const Inverted = () => `
<a
  class="github-corner is-inverted"
  aria-label="View source on GitHub">
  ${GitHubCorner}
</a>
`
Inverted.story = invertedBackground

export const LeftAligned = () => `
<a
  class="github-corner is-left-aligned"
  aria-label="View source on GitHub">
  ${GitHubCorner}
</a>
`
