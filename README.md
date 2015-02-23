Reactor
=======

A live coding environment for ES6 and React.

Optimized with [Jspm](http://jspm.io), [Babeljs](https://babeljs.io), and [Immutablejs](https://github.com/facebook/immutable-js)

## Setup

	git clone https://github.com/priyatam/reactor
	npm install -g jspm live-server
	jspm install

## Workflow

Start a live-reload server on 8080, or optional port no with `--port 8000`.

	live-server 

Release a minified standalone app.js into `dist`.

	jspm bundle-sfx lib/main.jsx! dist/app.js

