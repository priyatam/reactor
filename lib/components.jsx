import React from 'react'
import {Link, RouteHandler} from 'react-router'

export const Hello = React.createClass({
    componentDidMount() {
        console.log("finally!")
    },
    render() {
        return (
            <div>Hello {this.props.message}
            <RouteHandler/>
            </div>
        )
    }
})

export const App = React.createClass({
    render() {
        return (
            <div>
              <header>
                <ul>
                  <li><Link to="app">App</Link></li>
                  <li><Link to="hello">Hello</Link></li>
                </ul>
              </header>
              <RouteHandler/>
            </div>
        )
    }
})