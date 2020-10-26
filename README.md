# JewellNet

The [Personal Website of David Jewell](https://www.davidjewell.nyc)

## Running Locally

Using `vue-loader`, you can run a local, unminified version.

### Choose your own adventure:

`$ npm run dev` from the root, using a package.json script.

-OR-

Navigate to [./\_src/vue](_src/vue) and `$ npm run dev`.

## Grunt

This repo utilizes Grunt as a task runner. Will eventually move to yarn... someday.

### Scripts
- `dev` compiles from [./\_src/](_src) => **./dist/dev**
- `prod` compiles and minifies from [./\_src/](_src) => **./dist/prod**
- `watch` runs a watcher and runs `dev` once a change is detected.
