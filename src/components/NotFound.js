import React, {Component} from 'react';
import {connect} from 'react-redux';

class NotFound extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>
                    Error 404 - Not Found!
                </h1>
            </React.Fragment>
        );
    }
}

export default connect()(NotFound);