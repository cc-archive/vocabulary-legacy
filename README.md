<p align="center">
  <a href="https://creativecommons.github.io/vocabulary/" class="readme-vocabulary-logo">
    <img
      alt="Vocabulary logo"
      src="https://raw.githubusercontent.com/creativecommons/vocabulary/master/readme_assets/vocabulary_logo.svg?sanitize=true"
      height="40px"/>
  </a>
</p>

# Creative Commons Vocabulary

🚧 __Notice 09.19.22__: This repository is currently __unstable__, the Vocabulary project as a whole is undergoing major changes related to [Vocabulary Roadmap 2022.Q4-2023.Q1 (work in progress) #1081](https://github.com/creativecommons/vocabulary/issues/1081#objectives).  

If you are using this repository in a project, it is __strongly recommended__ that you lock your version to the latest stable release for the time being, as new releases at the moment are not guaranteed to be non-breaking, and will likely require manual intervention to correct and/or upgrade.


The following repos are directly affected by this work:

* [creativecommons/vocabulary](https://github.com/creativecommons/vocabulary)
* [creative-commons/vocabulary-components](https://github.com/creativecommons/vocabulary-components)
* [creativecommons/vocabulary-fonts](https://github.com/creativecommons/vocabulary-fonts)
* [creativecommons/vocabulary-styles](https://github.com/creativecommons/vocabulary-styles)
* [creativecommons/cc-assets](https://github.com/creativecommons/cc-assets)

The following repos may be indirectly affected by this work:

* [creativecommons/creativecommons-certificate](https://github.com/creativecommons/creativecommons-certificate)
  - `@creativecommons/vocabulary, ^1.0.0-beta.16`
* [creativecommons/wp-theme-openglam](https://github.com/creativecommons/wp-theme-openglam)		
  - `https://unpkg.com/@creativecommons/fonts/css/fonts.css?ver=5.5` (calculates to v1.0.0-beta.2)
  - `https://openglam.org/wp-content/themes/wp-theme-openglam-master/assets/js/script.js?ver=2020.04.1 (id='vocabulary-js')`
* [creativecommons/creativecommons.github.io-source](https://github.com/creativecommons/creativecommons.github.io-source)	
  - `https://unpkg.com/@creativecommons/fonts@2020.9.3/css/fonts.css`
  - `https://unpkg.com/@creativecommons/vocabulary@2020.7.2/js/vocabulary.js`
* [creativecommons/wp-theme-summit](https://github.com/creativecommons/wp-theme-summit)	
  - `@creativecommons/vocabulary, ^2020.8.7` in `/front/package.json`
  - `https://unpkg.com/@creativecommons/fonts@1.0.0-beta.2/css/fonts.css?ver=5.5.9` (calculates to v1.0.0-beta.2)
  - `https://summit.creativecommons.org/wp-content/themes/wp-theme-summit/assets/js/vocabulary.js?ver=2020.06.1`
* [creativecommons/cc-global-components](https://github.com/creativecommons/cc-global-components)	
  - `https://unpkg.com/@creativecommons/fonts@2020.9.3/css/fonts.css`
  - `https://unpkg.com/@creativecommons/vocabulary@2020.11.3/css/vocabulary.css`
* [creativecommons/cc-legal-tools-data](https://github.com/creativecommons/cc-legal-tools-data)		
  - `https://unpkg.com/@creativecommons/vocabulary-fonts@0.1.1/dist/css/fonts.css`
  - `https://unpkg.com/@creativecommons/vocabulary-styles@0.3.0/dist/css/vocabulary-styles.css`
* [creativecommons/cc-legal-tools-app](https://github.com/creativecommons/cc-legal-tools-app)		
  - `https://unpkg.com/@creativecommons/vocabulary-fonts@0.1.1/dist/css/fonts.css`
  - `https://unpkg.com/@creativecommons/vocabulary-styles@0.3.0/dist/css/vocabulary-styles.css`
* [creativecommons/creativecommons-base](https://github.com/creativecommons/creativecommons-base)
  - `https://unpkg.com/@creativecommons/vocabulary-fonts@0.x.x/dist/css/fonts.css`
  - `https://unpkg.com/@creativecommons/vocabulary-styles@0.x.x/dist/css/vocabulary-styles.css`
* [creativecommons/chooser](https://github.com/creativecommons/chooser)
  - `@creativecommons/cc-assets, ^0.1.0`
  - `@creativecommons/vocabulary-components, ^0.2.0`
  - `@creativecommons/vocabulary-fonts, ^0.1.1`
  - `@creativecommons/vocabulary-styles, ^0.2.1`

Known Versions of Vocabulary "family" repositories in use on active CC Projects:



  | [cc-archive/fonts](https://github.com/cc-archive/fonts) | downstream |
  | -- | -- |
  |`1.0.0-beta.2` | [creativecommons/wp-theme-openglam](https://github.com/creativecommons/wp-theme-openglam) |
  | `2020.9.3` | [creativecommons/creativecommons.github.io-source](https://github.com/creativecommons/creativecommons.github.io-source), [creativecommons/cc-global-components](https://github.com/creativecommons/cc-global-components) |
  
-----
  
  | [creativecommons/vocabulary](https://github.com/creativecommons/vocabulary) | downstream |
  | -- | -- | 
  | `1.0.0-beta.16` | [creativecommons/creativecommons-certificate](https://github.com/creativecommons/creativecommons-certificate) |
  | `2020.04.1` | [creativecommons/wp-theme-openglam](https://github.com/creativecommons/wp-theme-openglam) |
  | `2020.06.1` | [creativecommons/wp-theme-summit](https://github.com/creativecommons/wp-theme-summit) |
  | `2020.7.2` | [creativecommons/creativecommons.github.io-source](https://github.com/creativecommons/creativecommons.github.io-source) |
  | `2020.11.3` | [creativecommons/cc-global-components](https://github.com/creativecommons/cc-global-components), [creativecommons/wp-theme-summit](https://github.com/creativecommons/wp-theme-summit) |

-----

  | [creativecommons/vocabulary-fonts](https://github.com/creativecommons/vocabulary-fonts) | downstream |
  | -- | -- | 
  | `0.1.1` | [creativecommons/chooser](https://github.com/creativecommons/chooser), [creativecommons/cc-legal-tools-app](https://github.com/creativecommons/cc-legal-tools-app), [creativecommons/cc-legal-tools-data](https://github.com/creativecommons/cc-legal-tools-data), [creativecommons/creativecommons-base](https://github.com/creativecommons/creativecommons-base) |
  
 -----
 
  | [creativecommons/vocabulary-styles](https://github.com/creativecommons/vocabulary-styles) | downstream |
  | -- | -- |
  | `0.3.0` | [creativecommons/chooser](https://github.com/creativecommons/chooser), [creativecommons/cc-legal-tools-app](https://github.com/creativecommons/cc-legal-tools-app), [creativecommons/cc-legal-tools-data](https://github.com/creativecommons/cc-legal-tools-data), [creativecommons/creativecommons-base](https://github.com/creativecommons/creativecommons-base)	|
  
  -----

  | [creative-commons/vocabulary-components](https://github.com/creativecommons/vocabulary-components) | downstream |
  | -- | -- |
  | `0.3.0` | [creativecommons/chooser](https://github.com/creativecommons/chooser) |
  
  -----
  
  | [creativecommons/cc-assets](https://github.com/creativecommons/cc-assets) | downstream |
  | -- | -- |
  | `0.1.0` | [creativecommons/chooser](https://github.com/creativecommons/chooser) |
  
  
-----


(Scroll down to **[Suspension and Redistribution](#suspension-and-redistribution)`** section for more details and links)

> Vocabulary is a cohesive design system to unite the web facing Creative Commons.

<p align="center">

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-22-orange.svg?style=flat-square)](#contributors-)

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

## Suspension and Redistribution

This `vocabulary` package has been suspended to be redistributed and divided into `vocabulary-components`, `vocabulary-fonts`, `vocabulary-styles`.

They are now accessible at-
* [vocabulary-components](https://github.com/creativecommons/vocabulary-components)
* [vocabulary-fonts](https://github.com/creativecommons/vocabulary-fonts)
* [vocabulary-styles](https://github.com/creativecommons/vocabulary-styles)

## Included Packages

`vocabulary` is a monorepo containing three packages:

| Package                         | Description                                           |                                                                                                                                                          |
| ------------------------------- | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @creativecommons/vocabulary     | The main CSS component library                        | [![install size](https://packagephobia.com/badge?p=@creativecommons/vocabulary)](https://packagephobia.com/result?p=@creativecommons/vocabulary)         |
| @creativecommons/fonts          | A collection of typefaces and icon fonts              | [![install size](https://packagephobia.com/badge?p=@creativecommons/fonts)](https://packagephobia.com/result?p=@creativecommons/fonts)                   |
| @creativecommons/vue-vocabulary | Vue component library powered by the main CSS library | [![install size](https://packagephobia.com/badge?p=@creativecommons/vue-vocabulary)](https://packagephobia.com/result?p=@creativecommons/vue-vocabulary) |

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

Sometimes, on windows environments you may get an error about linebreaks, fix that by running the command as

```bash
npm run build:fonts --fix
```

> ## IMPORTANT NOTE: The `serve` command has the -s flag for static assets serving

## Using

To use Vocabulary in your projects, refer to [this document](https://cc-vocabulary.netlify.com/?path=/docs/vocabulary-usage--page).

## Contributing

We're always looking for contributors to help us find and fix bugs, build new features, help us improve the project documentation or translate the project to another language.

Vocabulary is continuously evolving and improving. You can contribute to the project in a number of ways.

| What       | How                                                                                                                                                   |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Code**   | If you are a developer, feel free to resolve open issues, raise PRs, add new features to existing components or add new components altogether.        |
| **Design** | If you are a designer, your inputs on making every component more intuitive, aesthetic and joyful will reverberate through the entire ecosystem.      |
| **Test**   | If you are a user of these components, your feedback, bug reports and feature requests will drive the project forward so that we can meet your needs. |
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

Running this command will run a general test. Test can also be run for individual packages by running their respective commands

```bash
  npm run test:vue-vocabulary
```

## CI/CD

We use [Github Actions](https://github.com/features/actions) to automate some parts of our CI/CD pipeline. When contributing code, rather than having to commit/push every time a check fails, it will be useful to automate this process on your development environment to be sure all checks done will be successful.

### Setting up CI testing on your Development Environment

We recommend using the cross-platform package [Nektos/act](https://github.com/nektos/act). It requires Docker to run workflows.

#### **Install Dependencies**

##### - **Docker**

If you don't have `Docker` installed, you can follow the links below to set it up depending on your environment.

- [x] Mac : [Docker for Mac](https://docs.docker.com/desktop/mac/install/)
- [x] Linux : [Docker for Linux](https://docs.docker.com/engine/install/)
- [x] Windows : [Docker for Windows](https://docs.docker.com/desktop/windows/install/)

##### - **Nektos/act**

Install using any of the methods below depending on your environment.

| Package / Method                                                                      | Command                                                                                                                      |
| ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **[Homebrew](https://brew.sh/) (Linux/macOS)**                                        | `brew install act`                                                                                                           |
| **[MacPorts](https://www.macports.org) (macOS)**                                      | `sudo port install act`                                                                                                      |
| **[Chocolatey](https://chocolatey.org/) (Windows)**                                   | `choco install act-cli`                                                                                                      |
| **[Scoop](https://scoop.sh/) (Windows)**                                              | `scoop install act`                                                                                                          |
| **[AUR](https://aur.archlinux.org/packages/act/) (Linux)**                            | `yay -S act`                                                                                                                 |
| **[Nix](https://nixos.org) (Linux/macOS)**                                            | [Nix recipe](https://github.com/NixOS/nixpkgs/blob/master/pkgs/development/tools/misc/act/default.nix)                       |
| **[Go](https://golang.org) (Linux/Windows/macOS/any other platform supported by Go)** | `go install github.com/nektos/act@latest`                                                                                    |
| **[Manual Download](https://github.com/nektos/act/releases/latest) (GitHub)**         | Download the [latest release](https://github.com/nektos/act/releases/latest) and add the path to your binary into your PATH. |

#### **Running Workflows**

Once you have downloaded and installed the package with its dependencies, it will automatically read the CI scripts from your [/.github/workflows](https://github.com/creativecommons/vocabulary/tree/main/.github/workflows) folder.

##### Trigger all workflows

To trigger all the CI workflows, `cd` into the root folder of this project (`vocabulary`) and run the command:

```bash
act
```

If you have permission errors, you run it as a sudo user:

```bash
sudo act
```

**NB:** _When you run it for the first time, it will ask you to choose a docker image to be used as default._

##### Trigger a specific workflow

To run a specific workflow, for example, the `build` workflow, you can specify it by running:

```bash
act -j build
```

If you want to see all the workflows available, you run the command:

```bash
act -l
```

Currently, we have four CI workflows namely:

```
- build
- lint
- test
- update_release_draft
```

We recommended that you run these workflows on your development environment so that if any errors occur, you can identify and resolve them before opening a PR.

You can refer the [Netktos/act Documentation](https://github.com/nektos/act/blob/master/README.md) for more commands and configuration options.

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
    <td align="center"><a href="https://github.com/Akpjunior94"><img src="https://avatars.githubusercontent.com/u/56775903?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Akpan Abraham</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=Akpjunior94" title="Code">💻</a></td>
    <td align="center"><a href="https://anik.live/"><img src="https://avatars.githubusercontent.com/u/16396161?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Anik Das</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=sadn1ck" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/arushivii"><img src="https://avatars.githubusercontent.com/u/43967251?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Arushi Verma</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=arushivii" title="Code">💻</a></td>
    <td align="center"><a href="http://brenoferreira.github.io"><img src="https://avatars.githubusercontent.com/u/707019?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Breno Ferreira</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=brenoferreira" title="Code">💻</a> <a href="https://github.com/creativecommons/vocabulary/pulls?q=is%3Apr+reviewed-by%3Abrenoferreira" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://conye.netlify.app/"><img src="https://avatars.githubusercontent.com/u/25040059?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Chidiebere Onyegbuchulem</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=chidexebere" title="Code">💻</a></td>
    <td align="center"><a href="https://dhruvkb.github.io"><img src="https://avatars.githubusercontent.com/u/16580576?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dhruv Bhanushali</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=dhruvkb" title="Code">💻</a> <a href="#mentoring-dhruvkb" title="Mentoring">🧑‍🏫</a> <a href="https://github.com/creativecommons/vocabulary/pulls?q=is%3Apr+reviewed-by%3Adhruvkb" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="http://dhruvi16.me"><img src="https://avatars.githubusercontent.com/u/34674462?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dhruvi Butti</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=Dhruvi16" title="Code">💻</a> <a href="#design-Dhruvi16" title="Design">🎨</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/Bob160"><img src="https://avatars.githubusercontent.com/u/58000961?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Efio-esien Efiom</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=Bob160" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/krhitesh"><img src="https://avatars.githubusercontent.com/u/25616334?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hitesh</b></sub></a><br /><a href="#infra-krhitesh" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/creativecommons/vocabulary/commits?author=krhitesh" title="Tests">⚠️</a> <a href="#platform-krhitesh" title="Packaging/porting to new platform">📦</a> <a href="https://github.com/creativecommons/vocabulary/commits?author=krhitesh" title="Code">💻</a></td>
    <td align="center"><a href="http://hugo.solar"><img src="https://avatars.githubusercontent.com/u/894708?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hugo Solar</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=hugosolar" title="Code">💻</a> <a href="https://github.com/creativecommons/vocabulary/pulls?q=is%3Apr+reviewed-by%3Ahugosolar" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/jahnvigupta"><img src="https://avatars.githubusercontent.com/u/43217070?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jahnvi Gupta</b></sub></a><br /><a href="#design-jahnvigupta" title="Design">🎨</a> <a href="https://github.com/creativecommons/vocabulary/commits?author=jahnvigupta" title="Code">💻</a> <a href="https://github.com/creativecommons/vocabulary/commits?author=jahnvigupta" title="Tests">⚠️</a></td>
    <td align="center"><a href="http://kritigodey.com"><img src="https://avatars.githubusercontent.com/u/287034?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kriti Godey</b></sub></a><br /><a href="#projectManagement-kgodey" title="Project Management">📆</a></td>
    <td align="center"><a href="https://github.com/krysal"><img src="https://avatars.githubusercontent.com/u/9145885?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Krystle Salazar</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=krysal" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/megha070"><img src="https://avatars.githubusercontent.com/u/40516822?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Megha Varshney</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=megha070" title="Code">💻</a> <a href="#design-megha070" title="Design">🎨</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/waridrox"><img src="https://avatars.githubusercontent.com/u/58583793?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mohammad Warid</b></sub></a><br /><a href="#infra-waridrox" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/creativecommons/vocabulary/commits?author=waridrox" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/MuluhGodson"><img src="https://avatars.githubusercontent.com/u/40151808?v=4?s=100" width="100px;" alt=""/><br /><sub><b>MuluhGodson</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=MuluhGodson" title="Documentation">📖</a></td>
    <td align="center"><a href="https://nilshah98.me/"><img src="https://avatars.githubusercontent.com/u/22821480?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Neel Shah</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=nilshah98" title="Code">💻</a></td>
    <td align="center"><a href="https://blackcipher101.github.io/portfolio"><img src="https://avatars.githubusercontent.com/u/33775493?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nehal Nevle</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=Blackcipher101" title="Code">💻</a></td>
    <td align="center"><a href="https://silvinabt87.github.io"><img src="https://avatars.githubusercontent.com/u/57196258?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Silvina Tamburini</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=silvinabt87" title="Tests">⚠️</a> <a href="https://github.com/creativecommons/vocabulary/commits?author=silvinabt87" title="Code">💻</a></td>
    <td align="center"><a href="https://tanuj22.github.io"><img src="https://avatars.githubusercontent.com/u/42486853?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tanuj Agarwal</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=Tanuj22" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/clasick"><img src="https://avatars.githubusercontent.com/u/13066221?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vignesh Kumar</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=clasick" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://kushaggarwal.github.io/me/"><img src="https://avatars.githubusercontent.com/u/44523552?v=4?s=100" width="100px;" alt=""/><br /><sub><b>kush aggarwal</b></sub></a><br /><a href="https://github.com/creativecommons/vocabulary/commits?author=kushaggarwal" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
