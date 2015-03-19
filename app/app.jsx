'use strict'

import './index.html'
import './styles/app.scss'
import './styles/typography.css'
import 'normalize.css/normalize.css'
import 'babel-core/polyfill'
import React from 'react'
import App from './components/App/App'

React.render(
  <App />,
  document.getElementById('app')
)
