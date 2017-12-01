import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

//React to work with Blaze for user authentication
class Accounts extends Component {

    componentDidMount() {
        //render blaze accounts form in return div below
        this.view = Blaze.render(Template.loginButtons,
            ReactDOM.findDOMNode(this.refs.container));
    }

    componentWillUnmount() {
        //find forms created, detroy and clean up
        Blaze.remove(this.view);
    }

    render() {
        return (
            <div ref='container'></div>
        );
    }
}

export default Accounts;