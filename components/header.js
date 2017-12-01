import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Accounts from './accounts';

class Header extends Component {

    onBinClick(e){
        e.preventDefault();
        //call meteor method
        //need to import to main on server and client side to work
        Meteor.call('bins.insert', (err, binId) => {
            //History.push(`/bins/${binID}`)
            console.log(binId);
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
                        <Accounts/>
                    </li>
                    <li>
                        <a href='#' onClick={this.onBinClick.bind(this)}>Create Bin</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;