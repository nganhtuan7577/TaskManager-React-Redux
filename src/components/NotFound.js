import React, {Component} from 'react';
import {connect} from 'react-redux';

class NotFound extends Component {
    render() {
        return (
            <div>
                <h1>
                    Error 404 - Not Found!
                </h1>
            </div>
        );
    }
}

export default connect()(NotFound);