import React from "react"
import {Route, DefaultRoute, NotFoundRoute, RouteHandler,
        default as Router} from 'react-router'
import {App, Hello} from "./components.jsx!"

const routes = (
    <Route name="app" path="/" handler={App}>
      <Route name="hello" handler={Hello}/>
      <DefaultRoute handler={App}/>
    </Route>
)

export function init() {
    console.log("Routes " + routes)
    return Router.run(routes, Router.HistoryLocation, (Handler) => {
        return React.render(<Handler/>, document.body)
    })
}
