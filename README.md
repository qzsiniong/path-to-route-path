# typescript-library-boilerplate

[![Build Status](https://travis-ci.org/cameron-martin/typescript-library-boilerplate.svg?branch=master)](https://travis-ci.org/cameron-martin/typescript-library-boilerplate)

Boilerplate for creating TypeScript libraries. Why yet another one? Because I like things set up my way, obviously.

## Features

* NVM for managing node versions.
* Jest for testing.
* Prettier for formatting.
* TSLint for linting.
* Rollup for bundling.
* Travis for CI.
* Defines [module](https://github.com/rollup/rollup/wiki/pkg.module) and [esnext](http://2ality.com/2017/06/pkg-esnext.html) field.



## Usage

* Fork this repo
  * `$ git init`
  * `$ git remote add upstream https://github.com/cameron-martin/typescript-library-boilerplate.git`
  * `$ git fetch upstream`
  * `$ git merge upstream/master`
* Update package.json fields (name, description, keywords, repository).
* Update repository names in README.md badges.
* Update `.travis.yml` file with your new package name.
* Ensure you have the [Prettier VSCode extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) installed.
* Add travis to your repository.
* Release using [`npm version`](https://docs.npmjs.com/cli/version).

## Updating

* Simply merge from this repository:
  * `$ git merge upstream/master`
