# My Base

My personal and heavily biased project base. Use at your own risk.

<a href="https://my-base.moquette.us/" rel="Link to demo"><img src="./docs/resources/cover.png" alt="Link to demo" /></a>

A Minimalist production ready Webpack/React boilerplate for TypeScript Projects.

![Version](https://img.shields.io/github/package-json/v/moquette/my-base?style=flat-square&color=blue) ![Commit](https://img.shields.io/github/last-commit/moquette/my-base?style=flat-square&color=blue)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

<a href="https://github.com/moquette/my-base" alt="Code Page">![](https://img.shields.io/static/v1?label=GitHub&message=https://github.com/moquette/my-base&style=flat-square&color=blue)</a>

<a href="https://my-base.moquette.us" alt="Demo Page">![](https://img.shields.io/static/v1?label=Demo&message=https://my-base.moquette.us&style=flat-square&color=blue)</a>

## Features

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com)
- [Webpack](https://webpack.js.org)
- [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer/)
- [TailwindCSS](https://tailwindcss.com)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [TypeScript 4](https://www.typescriptlang.org)
- [Prettier](https://prettier.io) + [ESLint](http://eslint.org) + [Airbnb](https://github.com/airbnb/javascript)
- [Husky](https://typicode.github.io/husky/#/)
- [Lint-staged](https://github.com/okonet/lint-staged#readme)

## Project

I use React.js for almost every front-end project I create. Here's a solid boilerplate I use for modern React TypeScript based projects.

- Base is a lean and imple alternative for CRA (Create React App);
- We can eliminate all of its disadvantages by setting up dependencies and configs ourselves (add dependencies as needed) making it easier to add/modify build configs;
- Minimal webpack and babel configs required to run a react application;
- Production-ready build set up, with linters and pre-commit hooks.
- Support for both TSX and JSX

## Usage

Clone:

```bash
git clone https://github.com/moquette/my-base.git
```

## Development

1: Change to project directory

```bash
cd my-base
```

2: Install dependencies

```
yarn
```

3: Start development server

```
yarn start
```

Pages served from http://localhost:3000.

**NOTE:**
Auto type checking, linting and formatting performed on pre-commit.

## Deployment

Build:

```bash
yarn build
```

The build will be placed in the `build` directory. You can change the build directory in the webpack config.

## Universal Alias

(Absolute Path Importing)

File import can use either relative or absolute paths with the **@/** universal alias:

**Relative Importing**

```typescript
import { EmailJS } from '../../components/EmailJS'
```

**Universal Alias Importing**

```typescript
import { EmailJS } from '@components/EmailJS'
```

## Sass and TailwindCSS

Sass and TailwindCSS are both supported.

`tailwind.config.js` is located in the project's root an initialzed in `styles/global.scss` . Visit [TailwindCSS](https://tailwindcss.com/docs/configuration) for more information.

## Scripts

**yarn start:**

Start development server and lanches default browser.

**yarn build:**

Builds and bundles resources for production.

**yarn lint:**

Lints, formats and typechecks all files in the `src` directory.

**yarn profile:**

Visualize size of webpack output files with an interactive zoomable treemap.
**Note:** Make sure to build project (`yarn build`) prior to analyzing.

## Yarn / NPM

This boilerplate uses [Yarn 3](https://yarnpkg.com) by default. Nonetheless, you may switch to npm by deleting the `yarn.lock` file, and installing dependencies with `npm install`. Remember to change any CI workflows, Husky Git hooks, and lint-staged steps to use npm commands.

## License

This project is open source and available under the [MIT License](LICENSE).
