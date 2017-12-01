import React, { Component, PropTypes } from 'react';
import { Link, withRouter } from 'react-router-dom';


import Accounts from './accounts';


class Header extends Component {

    constructor(props) {
        super(props)
        this.onBinClick = this.onBinClick.bind(this);
    }

    onBinClick(e) {
        e.preventDefault();
        //call meteor method
        //need to import to main on server and client side to work
        Meteor.call('bins.insert', (err, binId) => {
            this.props.history.push(`/bins/${binId}`)
        });
    }

    render() {
        return (
            <nav className='nav navbar-default'>
                <div className='navbar-header'>
                    <Link to='/' className='navbar-brand'>Markbin</Link>
                </div>
                <ul className='nav navbar-nav'>
                    <li>
                        <Accounts />
                    </li>
                    <li>
                        <a href='#' onClick={this.onBinClick}>Create Bin</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default withRouter(Header);