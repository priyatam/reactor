'use strict'

import React from 'react'
import {Route, DefaultRoute} from 'react-router'

export default (
  <Route name='app' path='/' handler={require('./components/app')}>
    <DefaultRoute name="home" handler={require('./components/home')} />
    <Route name="todo" handler={require('./components/todo')} />
  </Route>
)
