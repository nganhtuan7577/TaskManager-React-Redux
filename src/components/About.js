import React, {Component} from 'react';
import {connect} from 'react-redux';

class About extends Component {
    render() {
        return (
            <div>
                <h1>
                    A demo ReactJS application with Redux and Router v4.
                </h1>
            </div>
        );
    }
}

export default connect()(About);