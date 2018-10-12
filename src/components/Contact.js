import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink, Route} from "react-router-dom";
import Detail from './Detail';

class Contact extends Component {
    render() {
        var contacts = [
            {
                id: 1,
                slug: 'a',
                name: 'A',
                phone: '0123'
            },
            {
                id: 2,
                slug: 'x',
                name: 'X',
                phone: '9789'
            },
            {
                id: 3,
                slug: 't',
                name: 'T',
                phone: '4029'
            }
        ];

        var {match} = this.props;
        var url = match.url;

        var result  = contacts.map((contact, index) => {
            return (
                <NavLink key={index} to={`${url}/${contact.slug}`}> 
                    <li className='list-group-item'>
                        <h3>{contact.name + ': ' + contact.phone}</h3> <br/>
                    </li>
                </NavLink>
            );
        })

        return (
            <div className='text-center'>
                <h1>
                    Contact
                </h1>
                <div className='row'>
                    <ul className='list-group'>
                        {result}
                    </ul>
                </div>
                <div className='row'>
                    <Route path='/contact/:slug' component={Detail}/>
                </div>
            </div>
        );
    }
}

export default connect()(Contact);