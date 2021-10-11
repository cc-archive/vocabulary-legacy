<p align="center">
  <a href="https://creativecommons.github.io/vocabulary/" class="readme-vocabulary-logo">
    <img
      alt="Vocabulary logo"
      src="https://raw.githubusercontent.com/creativecommons/vocabulary/master/readme_assets/vocabulary_logo.svg?sanitize=true"
      height="40px"/>
  </a>
</p>

# Creative Commons Vocabulary

> Vocabulary is a cohesive design system to unite the web facing Creative Commons.

<p align="center">

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-19-orange.svg?style=flat-square)](#contributors-)
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
</p>

Vocabulary is the code implementation of Creative Commons' Design Language. Vocabulary makes it easier to develop Creative Commons apps while ensuring a consistently familiar experience.

## Included Packages

`vocabulary` is a monorepo containing three packages:

Package    | Description  |          |
-------------- | ------------- | -----
[@creativecommons/vocabulary](packages/vocabulary)    |  The main CSS component library   | [![install size](https://packagephobia.com/badge?p=@creativecommons/vocabulary)](https://packagephobia.com/result?p=@creativecommons/vocabulary)
[@creativecommons/fonts](packages/fonts)    | A collection of typefaces and icon fonts  | [![install size](https://packagephobia.com/badge?p=@creativecommons/fonts)](https://packagephobia.com/result?p=@creativecommons/fonts)
[@creativecommons/vue-vocabulary](packages/vue-vocabulary)    | Vue component library powered by the main CSS library  | [![install size](https://packagephobia.com/badge?p=@creativecommons/vue-vocabulary)](https://packagephobia.com/result?p=@creativecommons/vue-vocabulary)

## Installation


To setup you will need to have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed.

Instailling with `npm` is lightweight, tweakable and much more performant as the code runs very close to the operating system. On the other hand, all dependencies must be manually resolved and each developer has a different setup. 


#### Project dependencies

If you have the system dependencies installed, you can install the project dependencies via `npm`:

```bash
npm install --legacy-peer-deps
```

## Running the project

Once the project dependencies are installed, run the following command to start the project:

```bash
npm run serve
```

### Building the packages

To build the files for an individual package, run the relevant build command:

- `build:fonts`
- `build:vocabulary`
- `build:vue-vocabulary`

For example, to build the `fonts` package, run the following commands:

```bash
npm install --legacy-peer-deps
npm run build:fonts
```
> ## IMPORTANT NOTE: The `serve` command has the -s flag for static assets serving

## Using

To use Vocabulary in your projects, refer to [this document](https://cc-vocabulary.netlify.com/?path=/docs/vocabulary-usage--page).

## Contributing

We're always looking for contributors to help us find and fix bugs, build new features, help us improve the project documentation or translate the project to another language.

Vocabulary is continuously evolving and improving. You can contribute to the project in a number of ways.

| What       |How      |
| ---------- | ------- |
| **Code**   | If you are a developer, feel free to resolve open issues, raise PRs, add new features to existing components or add new components altogether.  |
| **Design** | If you are a designer, your inputs on making every component more intuitive, aesthetic and joyful will reverberate through the entire ecosystem.|
| **Test**   | If you are a user of these components, your feedback, bug reports and feature requests will drive the project forward so that we can meet your needs.|
| **Write**  | If you have a knack for writing technical articles, you could be the voice of the library's documentation, making it easy to use and understand.      |
| **Share**  | If you can't contribute in these ways, you can refer the project to a friend who might be able to. Spreading the word is the easiest way to help out. |


Interested?

The following instructions are in addition to the processes in our general [Contribution](https://opensource.creativecommons.org/contributing-code/) and [Pull Request](https://opensource.creativecommons.org/contributing-code/pr-guidelines/) guidelines on the Creative Common Open Source website. If you haven't read them already, read them first.

These instructions are a port of the general guidelines, tailored specifically for Vocabulary.

### Discussing Changes
For bug reports and feature requests, use [GitHub issues](https://github.com/creativecommons/vocabulary/issues/new/choose) with the appropriate labels. We can discuss the possibility of that change or new feature being implemented and released in the future. This lets us come to an agreement about the proposed idea before any work is done. 

### Assigning work

If the issue is already assigned to somebody, it is considered polite to give the last assignee a week's time to attempt it before you do. You can express an intention to work on it nonetheless so that it can be reassigned to you if the last assignee bails.

Submitting PRs without commenting your intent to solve an issue is risky because if someone else does ask to work on it before your PR comes in, your PR will be put on hold for a week.

### Making changes

Do all work on its own branch. Use meaningful branch names.

Examples

```bash
  broken_links_readme
  typo_misspelled
```
Use clean commit messages, as imperative sentences in the present tense.

Examples:

```bash
  Remove the broken links from the `README.md` file
  Fix the typo on line 12, where 'misspelled' was misspelled as 'mispelled'
```

Update your fork from time to time. See GitHub Help pages for instructions on how to do that.

Write new tests, and update existing ones, for the changes you make.

### Testing

While our [Husky](https://www.npmjs.com/package/husky) setup will prevent you from committing poorly linted code, it cannot catch logical problems. For that we have some tests.

#### **Unit**

Running unit tests is easy.

```bash
  npm run test:unit
```

#### **Visual regression**

Visual regression tests are slightly more complex. They run in a Docker container to prevent OS differences from affecting the screenshots.

Create a new file ``docker/puppeteer/env_vars`` in which to hold environment variables. Add the ``STORYBOOK_ORIGIN`` environment variable corresponding to the OS you're using.

**macOS**
```bash
  STORYBOOK_ORIGIN=http://host.docker.internal:8080
```
**Linux**
```bash
  STORYBOOK_ORIGIN=http://localhost:8080
```

Build the container.

```bash
docker build \
    --tag puppeteer:latest \
    --file docker/puppeteer/Dockerfile \
    .
```

Start by running the Storybook. You can use your preferred method from the [Installation](https://github.com/creativecommons/vocabulary#installation) section to do so. Once you have the Storybook server running, run the commands as shown below.

```bash
   ./docker/puppeteer/run.sh
    pptr@docker-desktop:/codebase$ npm run test:snapshot
```

To update screenshots, after you've written some new tests or updated failing ones, run the same commands as earlier with  `-- -u` appended to the end of the npm run command. The `--` is a special construct that allows passing arguments to `npm` scripts, which we're using the pass the `-u` (or `--updateSnapshot` ) flag to Jest.

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
    <td align="center"><a href="https://dhruvkb.github.io"><img src="https://avatars.githubusercontent.com/u/16580576?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dhruv Bhanushali</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=dhruvkb" title="Code">💻</a> <a href="#mentoring-dhruvkb" title="Mentoring">🧑‍🏫</a> <a href="https://github.com/creativecommons/vocabulary/pulls?q=is%3Apr+reviewed-by%3Adhruvkb" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://conye.netlify.app/"><img src="https://avatars.githubusercontent.com/u/25040059?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Chidiebere Onyegbuchulem</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=chidexebere" title="Code">💻</a></td>
    <td align="center"><a href="http://brenoferreira.github.io"><img src="https://avatars.githubusercontent.com/u/707019?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Breno Ferreira</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=brenoferreira" title="Code">💻</a> <a href="https://github.com/creativecommons/vocabulary/pulls?q=is%3Apr+reviewed-by%3Abrenoferreira" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://nilshah98.me/"><img src="https://avatars.githubusercontent.com/u/22821480?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Neel Shah</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=nilshah98" title="Code">💻</a></td>
    <td align="center"><a href="http://hugo.solar"><img src="https://avatars.githubusercontent.com/u/894708?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hugo Solar</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=hugosolar" title="Code">💻</a> <a href="https://github.com/creativecommons/vocabulary/pulls?q=is%3Apr+reviewed-by%3Ahugosolar" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://blackcipher101.github.io/portfolio"><img src="https://avatars.githubusercontent.com/u/33775493?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nehal Nevle</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=Blackcipher101" title="Code">💻</a></td>
    <td align="center"><a href="http://dhruvi16.me"><img src="https://avatars.githubusercontent.com/u/34674462?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dhruvi Butti</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=Dhruvi16" title="Code">💻</a> <a href="#design-Dhruvi16" title="Design">🎨</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://tanuj22.github.io"><img src="https://avatars.githubusercontent.com/u/42486853?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tanuj Agarwal</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=Tanuj22" title="Documentation">📖</a></td>
    <td align="center"><a href="http://kritigodey.com"><img src="https://avatars.githubusercontent.com/u/287034?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kriti Godey</b></sub></a><br /><a href="#projectManagement-kgodey" title="Project Management">📆</a></td>
    <td align="center"><a href="https://silvinabt87.github.io"><img src="https://avatars.githubusercontent.com/u/57196258?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Silvina Tamburini</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=silvinabt87" title="Tests">⚠️</a> <a href="https://github.com/creativecommons/vocabulary/commits?author=silvinabt87" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/jahnvigupta"><img src="https://avatars.githubusercontent.com/u/43217070?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jahnvi Gupta</b></sub></a><br /><a href="#design-jahnvigupta" title="Design">🎨</a> <a href="https://github.com/creativecommons/vocabulary/commits?author=jahnvigupta" title="Code">💻</a> <a href="https://github.com/creativecommons/vocabulary/commits?author=jahnvigupta" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/megha070"><img src="https://avatars.githubusercontent.com/u/40516822?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Megha Varshney</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=megha070" title="Code">💻</a> <a href="#design-megha070" title="Design">🎨</a></td>
    <td align="center"><a href="https://kushaggarwal.github.io/me/"><img src="https://avatars.githubusercontent.com/u/44523552?v=4?s=100" width="100px;" alt=""/><br /><sub><b>kush aggarwal</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=kushaggarwal" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/krysal"><img src="https://avatars.githubusercontent.com/u/9145885?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Krystle Salazar</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=krysal" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/arushivii"><img src="https://avatars.githubusercontent.com/u/43967251?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Arushi Verma</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=arushivii" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/krhitesh"><img src="https://avatars.githubusercontent.com/u/25616334?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hitesh</b></sub></a><br /><a href="#infra-krhitesh" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/creativecommons/vocabulary/commits?author=krhitesh" title="Tests">⚠️</a> <a href="#platform-krhitesh" title="Packaging/porting to new platform">📦</a> <a href="https://github.com/creativecommons/vocabulary/commits?author=krhitesh" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Bob160"><img src="https://avatars.githubusercontent.com/u/58000961?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Efio-esien Efiom</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=Bob160" title="Code">💻</a></td>
    <td align="center"><a href="https://anik.live/"><img src="https://avatars.githubusercontent.com/u/16396161?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Anik Das</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=sadn1ck" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/MuluhGodson"><img src="https://avatars.githubusercontent.com/u/40151808?v=4?s=100" width="100px;" alt=""/><br /><sub><b>MuluhGodson</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=MuluhGodson" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
