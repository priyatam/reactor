# Reactor

A live coding environment for ES6 (Babeljs) and [React](https://facebook.github.io/react/), optimized with Webpack and Immutablejs.

## Libraries

- [react](https://facebook.github.io/react/)
- [react-router](https://github.com/rackt/react-router)
- [react-resolver](https://github.com/ericclemmons/react-resolver)
- [react-hot-loader](https://github.com/gaearon/react-hot-loader)
- [webpack](http://webpack.github.io/)
- [gulpjs](http://gulpjs.com/)
- [babeljs](https://babeljs.io/)

## Setup

Use [io.js](https://iojs.org/) with [nvm](https://github.com/creationix/nvm) to take advantages of `ES6` without `--harmony` flag on `NodeJS`:

	nvm install iojs
	nvm use iojs

Clone the repo and install deps:

	git clone https://github.com/priyatam/reactor.git`
	cd reactor && npm install
	npm install -g gulp

## Development

For local development:

	gulp dev

Open your browser to `http://localhost:8080`.

Try to disable JavaScript in your browser, you will still be able to navigate between pages of the application. Enjoy the power of isomorphic applications!

For building a release:

	gulp build

This will:

- Concat & minify styles to `/dist/css/styles.css`
- Concat & minify scripts to `/dist/js/app.js`
- Optimize & copy images to `/dist/img/`
