# Reactor

A live coding environment for ES6 and [React](https://facebook.github.io/react/). Optimized with Webpack, Babeljs, and Immutablejs

## Libraries Included

* [react](https://facebook.github.io/react/)
* [react-router](https://github.com/rackt/react-router)
* [react-resolver](https://github.com/ericclemmons/react-resolver)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)
* [expressjs](http://expressjs.com/)
* [webpack](http://webpack.github.io/)
* [gulpjs](http://gulpjs.com/)
* [babeljs](https://babeljs.io/)

## Installation / How-to

Use [io.js](https://iojs.org/) to take advantages of `ES6` without `--harmony` flag on `NodeJS`.

It's super easy to do with [nvm](https://github.com/creationix/nvm):

* `$ nvm install iojs`
* `$ nvm use iojs`
* `$ nvm alias default iojs` (to make `node` default to `iojs`)

After that, clone the repo and install dependancies:

* `$ git clone https://github.com/iam4x/iso-react.git`
* `$ cd iso-react && npm install`
* `$ npm install -g gulp`

### Run the project in development:

* `$ gulp dev`
g
Open your browser to `http://localhost:8080` and you will see the magic happens! Try to disable JavaScript in your browser, you will still be able to navigate between pages of the application. Enjoy the power of isomorphic applications!

### Build project:

Just run `$ gulp build`, it will produce these tasks:

* Concat & minify styles to `/dist/css/styles.css`
* Concat & minify scripts to `/dist/js/app.js`
* Optimize & copy images to `/dist/img/`
