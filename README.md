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
</p>

Vocabulary is the code implementation of Creative Commons' Design Language. Vocabulary makes it easier to develop Creative Commons apps while ensuring a consistently familiar experience.

## Included Packages

`vocabulary` is a monorepo containing three packages:

- [@creativecommons/vocabulary](packages/vocabulary) - The main css component library
- [@creativecommons/fonts](packages/fonts) - A collection of typefaces and icon fonts
- [@creativecommons/vue-vocabulary](packages/vue-vocabulary) - Vue component library powered by the main css library

Packages are located in the `/packages` directory. Each package can be developed individually by entering its directory and following the individual `README.md` instructions, or dependencies can be managed for _all_ packages by running `npm install` in the repository root, followed by `npm run setup`.

## Using

To use Vocabulary in your projects, refer to [this document](https://cc-vocabulary.netlify.com/?path=/docs/vocabulary-usage--page).

## Contributing

To contribute to Vocabulary, refer to [this document](https://cc-vocabulary.netlify.com/?path=/docs/vocabulary-contribution--page).

## Versioning

Vocabulary uses [CalVer](https://calver.org/) for version numbering, in the `YYYY.M.Micro` format. `Micro` is bumped whenever there are multiple releases in a month, for example `2020.7.1` is the first release in July 2020, while `2020.7.2` is the second.

## License

Licensed under the Expat/[MIT](http://www.opensource.org/licenses/MIT) license.
