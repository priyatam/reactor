'use strict'

import React from 'react'
import {RouteHandler, Link} from 'react-router'

export default React.createClass({
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
