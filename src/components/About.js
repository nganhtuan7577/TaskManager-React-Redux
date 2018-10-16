import React, {Component} from 'react';
import {connect} from 'react-redux';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>
                    A demo ReactJS application with Redux and Router v4.
                </h1>
            </React.Fragment>
        );
    }
}

export default connect()(About);