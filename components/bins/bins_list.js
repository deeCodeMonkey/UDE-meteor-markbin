import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../imports/collections/bins';
import { Link } from 'react-router-dom';

class BinsList extends Component {
    onBinRemove(bin) {
        Meteor.call('bins.remove', bin);
    }

    //helper method
    renderList() {
        return this.props.bins.map(bin => {
            const url = `/bins/${bin._id}`;
            //for all lists, need a unique key
            return (
                <li className='list-group-item' key={bin._id}>
                    <Link to={url}> Bin {bin._id} </Link>
                    <span className='pull-right'>
                        <button
                            className='btn btn-danger'
                            onClick={() => this.onBinRemove(bin)}>
                            Remove Bin
                        </button>
                    </span>
                </li>
            );
        });
    }

    render() {
        return (
            <ul className='list-group'>
                {this.renderList()}
            </ul>
        );
    }
}

export default createContainer(() => {
    //can only receive the data available from publication
    Meteor.subscribe('bins');

    //will show up as props inside of BinsList
    return { bins: Bins.find({}).fetch() }
}, BinsList);