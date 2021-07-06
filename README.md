<p align="center">
  <a href="https://creativecommons.github.io/vocabulary/" class="readme-vocabulary-logo">
    <img
      alt="Vocabulary logo"
      src="https://raw.githubusercontent.com/creativecommons/vocabulary/master/readme_assets/vocabulary_logo.svg?sanitize=true"
      height="40px"/>
  </a>
</p>

> Vocabulary is a cohesive design system to unite the web facing Creative Commons.

<p align="center">
  <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
  
  <a
    href="https://github.com/creativecommons/vocabulary/blob/master/LICENSE"
    style="margin-right: 1em;">
    <img alt="MIT license" src="https://img.shields.io/github/license/creativecommons/vocabulary.svg?color=brightgreen"/>
  </a>
  <a
    href="https://github.com/creativecommons/vocabulary/blob/master/CONTRIBUTING.md"
    style="margin-right: 1em;">
    <img alt="PRs welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"/>
  </a>
  <a
    href="https://github.com/creativecommons/vocabulary/actions"
    style="margin-right: 1em;">
    <img alt="GitHub Actions" src="https://img.shields.io/github/workflow/status/creativecommons/vocabulary/vocabulary-ci/master?label=vocabulary-ci"/>
  </a>
  <a
    href="https://cc-vocabulary.netlify.com"
    style="margin-right: 1em;">
    <img alt="Netlify" src="https://img.shields.io/netlify/fcee0dba-9c91-450d-96e5-82494e6b3af9"/>
  </a>
  <a
    href="https://lerna.js.org/"
    style="margin-right: 1em;">
    <img alt="Maintained With Lerna" src="https://img.shields.io/badge/maintained%20with-lerna-brightgreen.svg"/>
  </a>
</p>

Vocabulary is the code implementation of Creative Commons' Design Language. Vocabulary makes it easier to develop Creative Commons apps while ensuring a consistently familiar experience.

## Included Packages

`vocabulary` is a monorepo containing three packages:

Package    | Description  |          |
-------------- | ------------- | -----
[@creativecommons/vocabulary](packages/vocabulary)    |  The main CSS component library   | [![install size](https://packagephobia.com/badge?p=@creativecommons/vocabulary)](https://packagephobia.com/result?p=@creativecommons/vocabulary)
[@creativecommons/fonts](packages/fonts)    | A collection of typefaces and icon fonts  | [![install size](https://packagephobia.com/badge?p=@creativecommons/fonts)](https://packagephobia.com/result?p=@creativecommons/fonts)
[@creativecommons/vue-vocabulary](packages/vue-vocabulary)    | Vue component library powered by the main CSS library  | [![install size](https://packagephobia.com/badge?p=@creativecommons/vue-vocabulary)](https://packagephobia.com/result?p=@creativecommons/vue-vocabulary)

Packages are located in the `/packages` directory.

## Installation

You would need to have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed.

To install dependencies and run the storybooks for all packages in this repository: 

```bash
npm install --legacy-peer-deps
npm run setup # (optional for npm v7 & above)
npm run build
npm run storybook
```

To run the storybook for an individual package (say, fonts):

```bash
cd packages/fonts
npm install --legacy-peer-deps
npm run build
npm run storybook
```

## Using

To use Vocabulary in your projects, refer to [this document](https://cc-vocabulary.netlify.com/?path=/docs/vocabulary-usage--page).

## Contributing

To contribute to Vocabulary, refer to [this document](https://cc-vocabulary.netlify.com/?path=/docs/vocabulary-contribution--page).

## Versioning

Vocabulary uses [CalVer](https://calver.org/) for version numbering, in the `YYYY.M.Micro` format. `Micro` is bumped whenever there are multiple releases in a month, for example `2020.7.1` is the first release in July 2020, while `2020.7.2` is the second.

## License

Licensed under the Expat/[MIT](http://www.opensource.org/licenses/MIT) license.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://dhruvkb.github.io"><img src="https://avatars.githubusercontent.com/u/16580576?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dhruv Bhanushali</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=dhruvkb" title="Code">💻</a> <a href="#mentoring-dhruvkb" title="Mentoring">🧑‍🏫</a></td>
    <td align="center"><a href="https://conye.netlify.app/"><img src="https://avatars.githubusercontent.com/u/25040059?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Chidiebere Onyegbuchulem</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=chidexebere" title="Code">💻</a></td>
    <td align="center"><a href="http://brenoferreira.github.io"><img src="https://avatars.githubusercontent.com/u/707019?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Breno Ferreira</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=brenoferreira" title="Code">💻</a> <a href="https://github.com/creativecommons/vocabulary/pulls?q=is%3Apr+reviewed-by%3Abrenoferreira" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://nilshah98.me/"><img src="https://avatars.githubusercontent.com/u/22821480?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Neel Shah</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=nilshah98" title="Code">💻</a></td>
    <td align="center"><a href="http://hugo.solar"><img src="https://avatars.githubusercontent.com/u/894708?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hugo Solar</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=hugosolar" title="Code">💻</a> <a href="https://github.com/creativecommons/vocabulary/pulls?q=is%3Apr+reviewed-by%3Ahugosolar" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://blackcipher101.github.io/portfolio"><img src="https://avatars.githubusercontent.com/u/33775493?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nehal Nevle</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=Blackcipher101" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
