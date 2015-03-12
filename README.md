# Reactor

Build React apps with ES6, Rework, and Webpack. No servers, just the UI.

## Why another boilerplate?

Focus on the UI, with an emphasis on forward-thinking, future-proof ES6 and CSS3.

## Goals

- [ES6 React](http://facebook.github.io/react/blog/2015/03/10/react-v0.13.html)
- [ES6 Flux](https://github.com/goatslacker/alt)
- [Rework CSS3](https://github.com/reworkcss/rework)
- [BabelJs](https://babeljs.io)
- [ImmutableJs](https://github.com/facebook/immutable-js)
- [Jest](https://facebook.github.io/jest/)
- [Webpack](http://webpack.github.io) with [react-hot-loader](https://github.com/gaearon/react-hot-loader/tree/master/docs#starter-kits)

## Getting started

Clone the project and remove the git repository:

```bash
git clone --depth=1 https://github.com/priyatam/reactor.git my-reactor
cd my-projectg
rm -rf .git
```

## Development

* `npm start` - Build and start the app in live-reload mode at http://localhost:8000
* `npm test` - Run the tests
* `npm run build` - Run a production build
* `npm version patch` - Bump version

## Design

Note: Sass will be removed after Rework is incorporated.

`import` Sass and CSS files from within your JavaScript component files:

```js
// Filename: app.jsx
import 'normalize.css/normalize.css';
import './scss/app.scss';
```

All CSS (compiled or otherwise) is run through Autoprefixer. CSS files are combined in the
order in which they are imported in JavaScript, thus you should always import your CSS/Sass
before importing any other JavaScript files. Use an approach like [BEM](http://cssguidelin.es/#bem-like-naming) to avoid specificity issues that might exist due to unpredicatable order of
CSS rules.

All required `.html` files are compiled with lodash.template and synced into the `./build`:

```js
// Filename: app.jsx
import './index.html';
```

Sass include paths & lodash template data can be configured in the `webpack.config.js`.

## Workflow

Writing components:

```js
// Filename: Menu.jsx

'use strict';

import './_Menu.scss';

import React from 'react';
import MenuItem from '../MenuItem/MenuItem';

var { PropTypes } = React;

class Menu extends React.Component {

  constructor(...args) {
    super(...args);
    // Set initial state
    this.state = {
      foo: false
    };
  }

  getMenuItem(item) {
    return (
      <MenuItem item={item} key={'menu-item-' + item.id} />
    );
  }

  render() {
    return (
      <ul className={'menu'}>
        {this.props.items.map(this.getMenuItem, this)}
      </ul>
    );
  }
}

Menu.propTypes = {
  items: PropTypes.array.isRequired
};

export default Menu;
```

Writing tests:

```js
// Filename: __tests__/Menu-test.js

'use strict';

import React from 'react/addons';

jest.dontMock('../Menu.jsx');
jest.dontMock('../../MenuItem/MenuItem.jsx');

import Menu from '../Menu.jsx';

var { TestUtils } = React.addons;

describe('Menu', () => {

  var menuItems = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' }
  ];

  var menu = TestUtils.renderIntoDocument(
    <Menu items={menuItems} />
  );
  var menuElem = React.findDOMNode(menu);

  it('Renders the menu items', () => {
    expect(menuElem.querySelectorAll('li').length).toEqual(2);
  });
});
```

## Credits

This project was forked and copied from several boilerplates:

- [react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate)
- [react-seed](https://github.com/badsyntax/react-seed)
- [isomorphic flux](https://github.com/iam4x/isomorphic-flux-boilerplate/tree/master)

## License

Copyright (c) 2015 Priyatam Mudivarti.

[MIT License](http://opensource.org/licenses/MIT).
