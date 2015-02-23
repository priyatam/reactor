import React from "react";

const Hello = React.createClass({
    componentDidMount() {
	console.log("finally!")
    },
    render() {
	return <div>Hello {this.props.message}</div>;
    }
})

React.render(<Hello message="world"/>, document.body)

export default {}
